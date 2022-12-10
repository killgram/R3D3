import { client, AccessesCollectionEnum } from "../../configurations";
import { collection, DocumentData, getDocs } from "firebase/firestore";

const getAccessProjectsService = async () => {
  const querySnapshot = await getDocs(
    collection(client, AccessesCollectionEnum.COLLECTION)
  );
  let data: { project: string; data: DocumentData }[] = [];
  querySnapshot.forEach((doc) => {
    data.push({
      project: doc.id,
      data: doc.data(),
    });
  });
  return data;
};

export { getAccessProjectsService };
