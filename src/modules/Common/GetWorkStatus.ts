import { Request, Response } from "express";

/**
 * @description check work status api
 * @param {Request} req
 * @param {Response} res
 */
const getWorkStatus = (req: Request, res: Response) => {
  res.status(200).send({
    title: "R3D3 is working correctly",
    success: true,
  });
};

export { getWorkStatus };
