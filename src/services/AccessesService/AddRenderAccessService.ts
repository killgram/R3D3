import { client, AccessesRenderCollectionEnum } from "../../configurations";
import { doc, updateDoc } from "firebase/firestore";
import { AccessesService } from "../index";

const addRenderAccessService = async (
  name: string,
  login: string,
  pass: string
) => {
  const newData: any = {};
  newData[name] = {
    login: login,
    pass: pass,
  };
  let list = await AccessesService.getRenderAccessService();
  list = { ...newData, ...list };
  await updateDoc(
    doc(
      client,
      AccessesRenderCollectionEnum.COLLECTION,
      AccessesRenderCollectionEnum.TABLE
    ),
    {
      ...list,
    }
  );
  return true;
};

export { addRenderAccessService };
