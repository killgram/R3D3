import { Request, Response } from "express";
import { AccessesService } from "../../services";

/**
 * @description add new access project api
 * @param {Request} req
 * @param {Response} res
 */
const addNewProject = async (req: Request, res: Response) => {
  const { projectName } = req.body;

  if (!projectName) {
    return res.status(200).send({
      title: "query param is missing",
      success: false,
    });
  }

  const isExist = await AccessesService.isExistProjectService(projectName);

  if (isExist) {
    return res.status(200).send({
      title: `"${projectName}" is already exist!`,
      success: false,
    });
  } else {
    await AccessesService.addNewProjectService(projectName);
    res.status(200).send({
      title: `Good, ${projectName} was add`,
      success: true,
    });
  }
};

export { addNewProject };
