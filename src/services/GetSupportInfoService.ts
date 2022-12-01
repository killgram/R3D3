import { client, SupportCollectionEnum } from "../configurations";
import { collection, getDocs } from "firebase/firestore";

const getSupportInfoService = async () => {
  let data;
  const querySnapshot = await getDocs(
    collection(client, SupportCollectionEnum.COLLECTION)
  );
  querySnapshot.forEach((doc: any) => {
    data = doc.data();
  });
  return data;
};

export { getSupportInfoService };
