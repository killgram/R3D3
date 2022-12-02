import { Request, Response } from "express";
import { PersonalizeService } from "../../services";

/**
 * @description delete skills data api
 * @param {Request} req
 * @param {Response} res
 */
const deleteSkills = async (req: Request, res: Response) => {
  const { key } = req.body;
  if (!key) {
    return res.status(200).send({
      title: "query param is missing",
      success: false,
    });
  }
  const isExist = await PersonalizeService.skillsExistService(key);
  if (!isExist) {
    return res.status(200).send({
      title: `"${key}" is not exist!`,
      success: false,
    });
  } else {
    await PersonalizeService.deleteSkillsService(key);
    res.status(200).send({
      title: `Skills key "${key}" was delete`,
      success: true,
    });
  }
};

export { deleteSkills };
