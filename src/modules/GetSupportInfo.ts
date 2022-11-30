import { Request, Response } from "express";
const { initializeApp } = require("firebase/app");
const { getFirestore, collection, getDocs } = require("firebase/firestore");
import { FirebaseConfig, SupportCollectionEnum } from "../configurations";

/**
 * @description getting support info api
 * @param {Request} req
 * @param {Response} res
 */
const getSupportInfo = async (req: Request, res: Response) => {
  const app = initializeApp(FirebaseConfig);
  const db = getFirestore(app);

  const querySnapshot = await getDocs(
    collection(db, SupportCollectionEnum.COLLECTION)
  );

  let data;
  querySnapshot.forEach((doc: any) => {
    data = doc.data();
  });

  res.status(200).send({
    data: data,
    success: true,
  });
};

export { getSupportInfo };
