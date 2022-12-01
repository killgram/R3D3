import { Request, Response } from "express";
import { SupportService } from "../../services";

/**
 * @description add support data api
 * @param {Request} req
 * @param {Response} res
 */
const addSupport = async (req: Request, res: Response) => {
  const { key, value } = req.body;

  if (!key || !value) {
    return res.status(200).send({
      title: "query param is missing",
      success: false,
    });
  }
  await SupportService.addSupportService(key, value);
  res.status(200).send({
    title: `Good, "${key}:${value}" was add`,
    success: true,
  });
};

export { addSupport };
