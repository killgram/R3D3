import { Request, Response } from "express";
import { LunaticService } from "../../services";

/**
 * @description get links lunatic api
 * @param {Request} req
 * @param {Response} res
 */
const getLinks = async (req: Request, res: Response) => {
  const data = await LunaticService.getLinksService();
  res.status(200).send(data);
};

export { getLinks };
