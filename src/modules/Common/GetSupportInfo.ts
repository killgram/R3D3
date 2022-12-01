import { Request, Response } from "express";
import { CommonService } from "../../services";

/**
 * @description getting support info api
 * @param {Request} req
 * @param {Response} res
 */
const getSupportInfo = async (req: Request, res: Response) => {
  const data = await CommonService.getSupportInfoService();
  res.status(200).send({
    data: data,
    success: true,
  });
};

export { getSupportInfo };
