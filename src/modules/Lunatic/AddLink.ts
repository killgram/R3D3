import { Request, Response } from "express";
import { LunaticService } from "../../services";

/**
 * @description add link in lunatic api
 * @param {Request} req
 * @param {Response} res
 */
const addLink = async (req: Request, res: Response) => {
  const { link } = req.body;

  if (!link) {
    return res.status(200).send({
      title: "query param is missing",
      success: false,
    });
  }
  await LunaticService.addLinkService(link);
  res.status(200).send({
    title: `Good, "${link}" was add`,
    success: true,
  });
};

export { addLink };
