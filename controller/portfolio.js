const PortFolioUser = require("../model/portfolio");
const GetPortFolio = async (req, res) => {
  try {
    const result = await PortFolioUser.find({});

    return res.status(200).json({ data: result, statusMessage: "ok" });
  } catch (error) {
    console.log("err:", error);
  }
};

const CreatePortFolio = async (req, res) => {
  try {
    const {
      author,
      title,
      description,
      body,
      resumeFile,
      linkSocial,
      linkProject,
      imageUrl,
    } = req.body;

    const datasCreate = new ModelBlog({
      author: author,
      title: title,
      description: description,
      body: body,
      resumeFile: resumeFile,
      linkSocial: linkSocial,
      linkProject: linkProject,
      imageUrl: imageUrl,
    });

    datasCreate.save();
    return res
      .status(201)
      .json({ data: datasCreate, statusMessage: "create success" });
  } catch (error) {}
};

const UpdatePortFolio = async (req, res) => {
  try {
    const { _id } = req.body;

    const dataUpdate = await ModelBlog.findByIdAndUpdate(_id, req.body, {
      new: true,
    });

    await dataUpdate.save();
    return res
      .status(201)
      .json({ data: dataUpdate, statusMessage: "Update success" });
  } catch (error) {}
};

module.exports = {
  GetPortFolio,
  UpdatePortFolio,
  CreatePortFolio,
};
