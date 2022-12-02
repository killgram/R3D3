import { Request, Response } from "express";
import { AccessesService } from "../../services";

/**
 * @description delete github access data api
 * @param {Request} req
 * @param {Response} res
 */
const deleteGithubAccess = async (req: Request, res: Response) => {
  const { key } = req.body;
  if (!key) {
    return res.status(200).send({
      title: "query param is missing",
      success: false,
    });
  }
  const isExist = await AccessesService.githubExistAccessService(key);
  if (!isExist) {
    return res.status(200).send({
      title: `"${key}" is not exist!`,
      success: false,
    });
  } else {
    await AccessesService.deleteGithubAccessService(key);
    res.status(200).send({
      title: `Github access "${key}" was delete`,
      success: true,
    });
  }
};

export { deleteGithubAccess };
