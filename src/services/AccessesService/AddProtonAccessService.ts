import { client, AccessesProtonCollectionEnum } from "../../configurations";
import { doc, updateDoc } from "firebase/firestore";
import { AccessesService } from "../index";

const addProtonAccessService = async (
  name: string,
  login: string,
  pass: string
) => {
  const newData: any = {};
  newData[name] = {
    login: login,
    pass: pass,
  };
  let list = await AccessesService.getProtonAccessService();
  list = { ...newData, ...list };
  await updateDoc(
    doc(
      client,
      AccessesProtonCollectionEnum.COLLECTION,
      AccessesProtonCollectionEnum.TABLE
    ),
    {
      ...list,
    }
  );
  return true;
};

export { addProtonAccessService };
