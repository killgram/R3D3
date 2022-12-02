import { Request, Response } from "express";
import { AccessesService } from "../../services";

/**
 * @description get all access data api
 * @param {Request} req
 * @param {Response} res
 */
const getAllAccess = async (req: Request, res: Response) => {
  const github = await AccessesService.getGithubAccessService();
  const proton = await AccessesService.getProtonAccessService();
  const render = await AccessesService.getRenderAccessService();
  res.status(200).send({ github, render, proton });
};

export { getAllAccess };
