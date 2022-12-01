import { Request, Response } from "express";
import { CommonService } from "../../services";

/**
 * @description getting app personalize info api
 * @param {Request} req
 * @param {Response} res
 */
const getAppPersonalize = async (req: Request, res: Response) => {
  const data = await CommonService.getAppPersonalizeService();
  res.status(200).send(data);
};

export { getAppPersonalize };
