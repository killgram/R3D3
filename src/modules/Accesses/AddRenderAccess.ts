import { Request, Response } from "express";
import { AccessesService } from "../../services";

/**
 * @description add render access data api
 * @param {Request} req
 * @param {Response} res
 */
const addRenderAccess = async (req: Request, res: Response) => {
  const { name, login, pass } = req.body;
  if (!name || !login || !pass) {
    return res.status(200).send({
      title: "query param is missing",
      success: false,
    });
  }
  await AccessesService.addRenderAccessService(name, login, pass);
  res.status(200).send({
    title: `Good, "${name}" in render was add`,
    success: true,
  });
};

export { addRenderAccess };
