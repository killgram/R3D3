import { Request, Response } from "express";
import { ResumeService } from "../../services";

/**
 * @description get resume total count data api
 * @param {Request} req
 * @param {Response} res
 */
const getTotalCount = async (req: Request, res: Response) => {
  const { year } = req.query;

  const data = await ResumeService.getTotalCountService(Number(year));
  res.status(200).send(data);
};

export { getTotalCount };
