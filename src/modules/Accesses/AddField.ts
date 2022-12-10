import { Request, Response } from "express";
import { AccessesService } from "../../services";

/**
 * @description add new field in access project api
 * @param {Request} req
 * @param {Response} res
 */
const addField = async (req: Request, res: Response) => {
  const { projectName, fieldName, data } = req.body;

  if (!projectName || !fieldName || !data) {
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
    await AccessesService.addFieldService(projectName, fieldName, data);
    res.status(200).send({
      title: `Good, ${fieldName} in ${projectName} was add`,
      success: true,
    });
  }
};

export { addField };
