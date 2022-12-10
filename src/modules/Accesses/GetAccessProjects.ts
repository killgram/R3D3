import { Request, Response } from "express";
import { AccessesService } from "../../services";

/**
 * @description getting access projects info api
 * @param {Request} req
 * @param {Response} res
 */
const getAccessProjects = async (req: Request, res: Response) => {
  const data = await AccessesService.getAccessProjectsService();
  res.status(200).send(data);
};

export { getAccessProjects };
