import { Request, Response } from "express";
import { SupportService } from "../../services";

/**
 * @description get support data api
 * @param {Request} req
 * @param {Response} res
 */
const getSupport = async (req: Request, res: Response) => {
  const data = await SupportService.getSupportService();
  res.status(200).send(data);
};

export { getSupport };
