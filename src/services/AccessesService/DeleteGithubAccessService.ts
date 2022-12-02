import { client, AccessesGithubCollectionEnum } from "../../configurations";
import { doc, setDoc } from "firebase/firestore";
import { AccessesService } from "../index";

const deleteGithubAccessService = async (key: string) => {
  const list = await AccessesService.getGithubAccessService();
  delete list![key];
  await setDoc(
    doc(
      client,
      AccessesGithubCollectionEnum.COLLECTION,
      AccessesGithubCollectionEnum.TABLE
    ),
    {
      ...list,
    }
  );
  return true;
};

export { deleteGithubAccessService };
