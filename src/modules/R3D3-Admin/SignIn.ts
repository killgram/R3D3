import { Request, Response } from "express";
import { R3D3Service } from "../../services";
import { TokenUtils } from "../../utils";

/**
 * @description sign in api
 * @param {Request} req
 * @param {Response} res
 */
const signIn = async (req: Request, res: Response) => {
  const { login, password } = req.query;
  const isExist = await R3D3Service.authExistService(
    String(login),
    String(password)
  );
  if (isExist) {
    const accessToken = TokenUtils.generateAccessToken(String(login));
    await R3D3Service.clearAuthService();
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
