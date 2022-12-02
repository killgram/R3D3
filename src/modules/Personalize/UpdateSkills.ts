import { Request, Response } from "express";
import { PersonalizeService } from "../../services";

/**
 * @description update skills data api
 * @param {Request} req
 * @param {Response} res
 */
const updateSkills = async (req: Request, res: Response) => {
  const { list } = req.body;
  if (!list) {
    return res.status(200).send({
      title: "query param is missing",
      success: false,
    });
  }
  await PersonalizeService.updateSkillsService(list);
  res.status(200).send({
    title: `Good`,
    success: true,
  });
};

export { updateSkills };
