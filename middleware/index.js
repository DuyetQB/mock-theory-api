const jwt = require("jsonwebtoken");
const ModelUser = require("../model/user");

const Middleware = async (req,res,next) =>{
        try {
            const authorizationClient = req.headers['authorization'];
            const token = authorizationClient && authorizationClient.split(' ')[1];
            if(!token) return res.status(403).json({
                error:"error-token",
                status:"error",
                statusMessage:"you don't have permision"
            });
            const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
             console.log("decoded:",decodedToken);
            // req.userId = decoded.id
    
            const { role }  = await ModelUser.findById(decodedToken.id);
            console.log("role:",role);
            if (!req.body.roles.includes(role)) {
                res.status(401).json({  status:"error",statusMessage: 'Unauthorized' });
            } 

            next();
            
        } catch (error) {
            if(error) return res.status(401).json({
                status:"error",
                statusMessage:"the user is not authentication",
                error:error
            })
        }

    }


module.exports = {
    Middleware
}