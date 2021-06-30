// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

const KEY = "qwemieofoieqjoeiq";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.body;

  const { admin } = jwt.verify(token, KEY) as { [key: string]: boolean };
  console.log('chamou')
  if(admin){
    res.json({secretAdminCode: 12345})
  }else {
    res.json({admin: false})
  }
}
