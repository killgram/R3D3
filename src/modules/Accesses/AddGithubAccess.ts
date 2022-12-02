import { Request, Response } from "express";
import { AccessesService } from "../../services";

/**
 * @description add github access data api
 * @param {Request} req
 * @param {Response} res
 */
const addGithubAccess = async (req: Request, res: Response) => {
  const { name, login, pass } = req.body;
  if (!name || !login || !pass) {
    return res.status(200).send({
      title: "query param is missing",
      success: false,
    });
  }
  await AccessesService.addGithubAccessService(name, login, pass);
  res.status(200).send({
    title: `Good, "${name}" in github was add`,
    success: true,
  });
};

export { addGithubAccess };
