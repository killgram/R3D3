import { client, AccessesCollectionEnum } from "../../configurations";
import { doc, setDoc } from "firebase/firestore";

const addNewProjectService = async (projectName: string) => {
  await setDoc(
    doc(
      client,
      AccessesCollectionEnum.COLLECTION,
      `${projectName.toUpperCase()}`
    ),
    { list: [] }
  );
  return true;
};

export { addNewProjectService };
