// @ts-nocheck
import { MongoClient } from "mongodb";
import Info from "../api/models/info";
import jwt from "jsonwebtoken";
import dbConnect from "../lib/dbConnect";
import jwtDecode from "jwt-decode";
const JWT_SECRET = "ojdfbvpwurbb*(^%&B089y(&*T(#47";
async function handler(req, res) {
  if (req.method === "POST") {

    console.log(req.body.form.profile_pic)

    const data = req.body;
    await dbConnect();
    if (!req.body) {
      res.status(404).end("Error");
      return;
    }
    console.log(jwtDecode(data.jwt).username);
    const username = jwtDecode(data.jwt).username;
    const info = data.form;
    const {
      first_name,
      last_name,
      profile_pic,
      email,
      twitter,
      linkedin,
      github,
      interests,
      current_role,
      previous_title,
      resume,
      contact_no,
      additional_links,
      ready_to_work,
      why_recruit_me,
    } = info;
    const userInfo = {
      username,
      first_name,
      last_name,
      profile_pic,
      email,
      twitter,
      linkedin,
      github,
      interests,
      current_role,
      previous_title,
      resume,
      contact_no,
      additional_links,
      ready_to_work,
      why_recruit_me,
    };

    try {
      const user = await Info.create(userInfo);
      res.status(201).json({ message: "Info added" });
    } catch (err) {
      console.log(err);
      return res.json({ status: "error", error: err });
    }



    // const client = await MongoClient.connect('mongodb+srv://john:qwaszx1234@cluster0.ynpnugd.mongodb.net/talesby?retryWrites=true&w=majority')
    // const db = client.db();
    // const meetupsCollection = db.collection('detials');
    // const result = await meetupsCollection.insertOne(data);
    // console.log(result)
    // client.close()
    // res.status(201).json({message: 'form Updated'});
  }
}

export default handler;
