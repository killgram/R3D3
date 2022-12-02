import { Request, Response } from "express";
import { AccessesService } from "../../services";

/**
 * @description delete render access data api
 * @param {Request} req
 * @param {Response} res
 */
const deleteRenderAccess = async (req: Request, res: Response) => {
  const { key } = req.body;
  if (!key) {
    return res.status(200).send({
      title: "query param is missing",
      success: false,
    });
  }
  const isExist = await AccessesService.renderExistAccessService(key);
  if (!isExist) {
    return res.status(200).send({
      title: `"${key}" is not exist!`,
      success: false,
    });
  } else {
    await AccessesService.deleteRenderAccessService(key);
    res.status(200).send({
      title: `Render access "${key}" was delete`,
      success: true,
    });
  }
};

export { deleteRenderAccess };
