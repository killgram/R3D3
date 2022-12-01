import { Request, Response } from "express";
import { PersonalizeService } from "../../services";

/**
 * @description change personalize data api
 * @param {Request} req
 * @param {Response} res
 */
const changePersonalize = async (req: Request, res: Response) => {
  const { key, value } = req.body;
  if (!key) {
    return res.status(200).send({
      title: "query param is missing",
      success: false,
    });
  }

  const isExist = await PersonalizeService.personalizeExistService(key);
  if (!isExist) {
    return res.status(200).send({
      title: `"${key}" is not exist!`,
      success: false,
    });
  } else {
    await PersonalizeService.changePersonalizeService(key, value);
    res.status(200).send({
      title: `Good, "${key}:${value}" - new value`,
      success: true,
    });
  }
};

export { changePersonalize };
