import { client, SupportCollectionEnum } from "../../configurations";
import { doc, getDoc } from "firebase/firestore";

const getSupportInfoService = async () => {
  const querySnapshot = await getDoc(
    doc(client, SupportCollectionEnum.COLLECTION, SupportCollectionEnum.TABLE)
  );
  return querySnapshot.data();
};

export { getSupportInfoService };
