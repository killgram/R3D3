import { Request, Response } from "express";
import { SupportService } from "../../services";

/**
 * @description delete support data api
 * @param {Request} req
 * @param {Response} res
 */
const deleteSupport = async (req: Request, res: Response) => {
  const { key } = req.body;
  if (!key) {
    return res.status(200).send({
      title: "query param is missing",
      success: false,
    });
  }
  const isExist = await SupportService.supportExistService(key);
  if (!isExist) {
    return res.status(200).send({
      title: `"${key}" is not exist!`,
      success: false,
    });
  } else {
    await SupportService.deleteSupportService(key);
    res.status(200).send({
      title: `Support key "${key}" was delete`,
      success: true,
    });
  }
};

export { deleteSupport };
