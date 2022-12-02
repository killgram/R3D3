import { client, AccessesProtonCollectionEnum } from "../../configurations";
import { doc, setDoc } from "firebase/firestore";
import { AccessesService } from "../index";

const deleteProtonAccessService = async (key: string) => {
  const list = await AccessesService.getProtonAccessService();
  delete list![key];
  await setDoc(
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

export { deleteProtonAccessService };
