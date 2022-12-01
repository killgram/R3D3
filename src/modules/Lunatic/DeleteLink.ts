import { Request, Response } from "express";
import { LunaticService } from "../../services";

/**
 * @description delete link in lunatic api
 * @param {Request} req
 * @param {Response} res
 */
const deleteLink = async (req: Request, res: Response) => {
  const { link } = req.body;
  if (!link) {
    return res.status(200).send({
      title: "query param is missing",
      success: false,
    });
  }
  const isExist = await LunaticService.linkIsExistService(link);
  if (!isExist) {
    return res.status(200).send({
      title: `"${link}" is not exist!`,
      success: false,
    });
  } else {
    await LunaticService.deleteLinkService(link);
    res.status(200).send({
      title: `Link "${link}" was delete`,
      success: true,
    });
  }
};

export { deleteLink };
