//@ts-nocheck
import Info from "../api/models/info";
import dbConnect from "../lib/dbConnect";
async function handler(req, res) {
    await dbConnect()
    if (req.method === "POST") {
        const username = req.body
        const user = await Info.findOne({username})
        console.log(user)
        return res.json({status: 200, data: user})
    }
}
export default handler;