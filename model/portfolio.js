const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PortFolio = new Schema({
  id: ObjectId,
  author:Object,
  title: String,
  description:String,
  body: String,
  resumeFile:String,
  linkSocial:Array,
  linkProject:Array,
  imageUrl:String,
},{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

const PortFolioUser = mongoose.model("portFolio", PortFolio);

module.exports = PortFolioUser;