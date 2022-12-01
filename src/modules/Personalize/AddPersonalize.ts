import { Request, Response } from "express";
import { PersonalizeService } from "../../services";

/**
 * @description add personalize data api
 * @param {Request} req
 * @param {Response} res
 */
const addPersonalize = async (req: Request, res: Response) => {
  const { key, value } = req.body;
  if (!key) {
    return res.status(200).send({
      title: "query param is missing",
      success: false,
    });
  }
  await PersonalizeService.addPersonalizeService(key, value);
  res.status(200).send({
    title: `Good, "${key}:${value}" was add`,
    success: true,
  });
};

export { addPersonalize };
