import { client, AccessesCollectionEnum } from "../../configurations";
import { doc, deleteDoc } from "firebase/firestore";

const deleteProjectService = async (projectName: string) => {
  await deleteDoc(
    doc(
      client,
      AccessesCollectionEnum.COLLECTION,
      `${projectName.toUpperCase()}`
    )
  );
  return true;
};

export { deleteProjectService };
