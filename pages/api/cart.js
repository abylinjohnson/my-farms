// @ts-nocheck
import dbConnect from "../lib/dbConnect";
import Cart from "./models/cart";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import jwtDecode from "jwt-decode";
const JWT_SECRET = "ojdfbvpwurbb*(^%&B089y(&*T(#47";
async function handler(req, res) {
  if (req.method === "POST") {
    await dbConnect();
    if (!req.body) {
      res.status(404).end("Error");
      return;
    }

    const userData = await Cart.findOne({
      name: jwtDecode(req.body.jwt).username,
    });
    if (!userData) {
      const item = {
        name: jwtDecode(req.body.jwt).username,
        items: [req.body.data],
      };
      try {
        const Item = await Cart.create(item);
        console.log("Created Blog");
        return res.status(201).json({ data: "Created" });
      } catch (err) {
        console.log(err);
        return res.status(400).json({ data: "Not Created" });
      }
    }else{
        console.log(userData);
        console.log(req.body.data)
        console.log(userData.items)
        const item = {
            name: jwtDecode(req.body.jwt).username,
            items: userData.items.concat(req.body.data),
          };
          try {
            const Item = await Cart.updateOne({username: item.name},{items: item.items});
            console.log("Created Blog");
            return res.status(201).json({ data: "Created" });
          } catch (err) {
            console.log(err);
            return res.status(400).json({ data: "Not Created" });
          }
    }
  } else if (req.method === "GET") {
    await dbConnect();
    const items = await Blogs.find();
    return res.status(200).json({ data: items });
  }
}

export default handler;
