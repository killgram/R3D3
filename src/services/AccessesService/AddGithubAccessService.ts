import { client, AccessesGithubCollectionEnum } from "../../configurations";
import { doc, updateDoc } from "firebase/firestore";
import { AccessesService } from "../index";

const addGithubAccessService = async (
  name: string,
  login: string,
  pass: string
) => {
  const newData: any = {};
  newData[name] = {
    login: login,
    pass: pass,
  };
  let list = await AccessesService.getGithubAccessService();
  list = { ...newData, ...list };
  await updateDoc(
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

export { addGithubAccessService };
