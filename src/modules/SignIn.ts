import { Request, Response } from "express";
import { authExistService, clearAuthService } from "../services";
import { TokenUtils } from "../utils";

/**
 * @description sign in api
 * @param {Request} req
 * @param {Response} res
 */
const signIn = async (req: Request, res: Response) => {
  const { login, password } = req.query;
  const isExist = await authExistService(String(login), String(password));
  if (isExist) {
    const accessToken = TokenUtils.generateAccessToken(String(login));
    await clearAuthService();
    return res.status(200).send({
      accessToken: accessToken,
      success: true,
    });
  } else {
    return res.status(200).send({
      title: "Forbidden, go away",
      success: false,
    });
  }
};

export { signIn };
