import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    error:
      "⭐We appreciate your time and wish you the best of luck!⭐",
  });
  return res.end();
}
