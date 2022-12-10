import { Request, Response } from "express";
import { AccessesService } from "../../services";

/**
 * @description delete field in access project api
 * @param {Request} req
 * @param {Response} res
 */
const deleteField = async (req: Request, res: Response) => {
  const { projectName, fieldName } = req.body;

  if (!projectName || !fieldName) {
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
    await AccessesService.deleteFieldService(projectName, fieldName);
    res.status(200).send({
      title: `Good, ${fieldName} in ${projectName} was delete`,
      success: true,
    });
  }
};

export { deleteField };
