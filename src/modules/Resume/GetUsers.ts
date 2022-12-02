import { Request, Response } from "express";
import { ResumeService } from "../../services";

/**
 * @description get resume users data api
 * @param {Request} req
 * @param {Response} res
 */
const getUsers = async (req: Request, res: Response) => {
  const data = await ResumeService.getUsersService();
  res.status(200).send(data);
};

export { getUsers };
