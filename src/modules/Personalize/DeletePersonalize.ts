import { Request, Response } from "express";
import { PersonalizeService } from "../../services";

/**
 * @description delete personalize data api
 * @param {Request} req
 * @param {Response} res
 */
const deletePersonalize = async (req: Request, res: Response) => {
  const { key } = req.body;
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
    await PersonalizeService.deletePersonalizeService(key);
    res.status(200).send({
      title: `Personalize key "${key}" was delete`,
      success: true,
    });
  }
};

export { deletePersonalize };
