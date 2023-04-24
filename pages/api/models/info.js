//@ts-nocheck
const mongoose = require("mongoose");
import dbConnect from "../../lib/dbConnect";
const infoSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    first_name: { type: String, required: true, unique: false },
    last_name: { type: String, required: false, unique: false },
    profile: { type: String, required: false, unique: false },
    email: { type: String, required: false, unique: false },
    twitter: { type: String, required: false },
    linkedin: { type: String, required: false },
    github: { type: String, required: false },
    interests: { type: String, required: false },
    current_role: { type: String, required: false },
    previous_title: { type: String, required: false },
    resume: { type: String, required: false },
    contact_no: { type: String, required: false },
    additional_links: { type: String, required: false },
    ready_to_work: { type: String, required: false },
    why_recruit_me: { type: String, required: false },
  },
  {
    collection: "details",
  }
);

const model = mongoose.models.Info || mongoose.model("Info", infoSchema);

module.exports = model;
