import { Request, Response } from "express";
import { PersonalizeService } from "../../services";

/**
 * @description get personalize data api
 * @param {Request} req
 * @param {Response} res
 */
const getPersonalize = async (req: Request, res: Response) => {
  const data = await PersonalizeService.getPersonalizeService();
  res.status(200).send(data);
};

export { getPersonalize };
