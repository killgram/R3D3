import { Request, Response } from "express";
import { R3D3Service } from "../../services";

/**
 * @description set password api
 * @param {Request} req
 * @param {Response} res
 */
const setPassword = async (req: Request, res: Response) => {
  const { password } = req.body;
  await R3D3Service.setPasswordService(password);

  res.status(200).send({
    title: `Set password to "${password}"`,
    success: true,
  });
};

export { setPassword };
