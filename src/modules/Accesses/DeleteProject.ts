import { Request, Response } from "express";
import { AccessesService } from "../../services";

/**
 * @description delete access project api
 * @param {Request} req
 * @param {Response} res
 */
const deleteProject = async (req: Request, res: Response) => {
  const { projectName } = req.body;

  if (!projectName) {
    return res.status(200).send({
      title: "query param is missing",
      success: false,
    });
  }

  const isExist = await AccessesService.isExistProjectService(projectName);

  if (!isExist) {
    return res.status(200).send({
      title: `"${projectName}" is not exist!`,
      success: false,
    });
  } else {
    await AccessesService.deleteProjectService(projectName);
    res.status(200).send({
      title: `Good, ${projectName} was delete`,
      success: true,
    });
  }
};

export { deleteProject };
