const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: String,
  blurb_main: String,
  blurb_spotlight: String,
  contribution: [String],
  stack: [String],
  websiteUrl: String,
  githubUrl: String,
  img: String,
  why: String,
  future: String,
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
