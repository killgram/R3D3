import { Request, Response } from "express";
import { R3D3Service } from "../../services";

/**
 * @description get mobile login api
 * @param {Request} req
 * @param {Response} res
 */
const getLogin = async (req: Request, res: Response) => {
  const data = await R3D3Service.getLoginService();
  return res.status(200).send({
    data: data,
    success: true,
  });
};

export { getLogin };
