import { client, AccessesRenderCollectionEnum } from "../../configurations";
import { doc, setDoc } from "firebase/firestore";
import { AccessesService } from "../index";

const deleteRenderAccessService = async (key: string) => {
  const list = await AccessesService.getRenderAccessService();
  delete list![key];
  await setDoc(
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

export { deleteRenderAccessService };
