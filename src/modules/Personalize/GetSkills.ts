import { Request, Response } from "express";
import { PersonalizeService } from "../../services";

/**
 * @description get skills data api
 * @param {Request} req
 * @param {Response} res
 */
const getSkills = async (req: Request, res: Response) => {
  const data = await PersonalizeService.getSkillsService();
  res.status(200).send(data);
};

export { getSkills };
