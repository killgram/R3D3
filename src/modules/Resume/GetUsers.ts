import { Request, Response } from "express";
import { ResumeService } from "../../services";

/**
 * @description get resume users data api
 * @param {Request} req
 * @param {Response} res
 */
const getUsers = async (req: Request, res: Response) => {
  const { month, year } = req.query;

  if (!month || !year) {
    return res.status(200).send({
      title: "query param is missing",
      success: false,
    });
  }

  if (String(month) === "0") {
    return res.status(200).send({
      title: "month must be from 1",
      success: false,
    });
  }

  const data = await ResumeService.getUsersService(Number(month), Number(year));
  res.status(200).send(data);
};

export { getUsers };
