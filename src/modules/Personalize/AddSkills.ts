import { Request, Response } from "express";
import { PersonalizeService } from "../../services";

/**
 * @description add skills data api
 * @param {Request} req
 * @param {Response} res
 */
const addSkills = async (req: Request, res: Response) => {
  const { name, link, rate, importance } = req.body;
  if (!name || !link || !rate) {
    return res.status(200).send({
      title: "query param is missing",
      success: false,
    });
  }
  await PersonalizeService.addSkillsService(name, link, rate, importance);
  res.status(200).send({
    title: `Good`,
    success: true,
  });
};

export { addSkills };
