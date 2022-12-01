import { Request, Response } from "express";
import { checkMobileSecretKey } from "../utils/MobileUtils";
import { getLoginService } from "../services";

/**
 * @description get mobile login api
 * @param {Request} req
 * @param {Response} res
 */
const getLogin = async (req: Request, res: Response) => {
  const { key } = req.query;
  const isMe = checkMobileSecretKey(String(key));
  if (isMe) {
    const data = await getLoginService();
    return res.status(200).send({
      data: data,
      success: true,
    });
  }
};

export { getLogin };
