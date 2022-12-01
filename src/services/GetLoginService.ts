import { client, AuthCollectionEnum } from "../configurations";
import { doc, getDoc } from "firebase/firestore";

const getLoginService = async () => {
  const querySnapshot = await getDoc(
    doc(client, AuthCollectionEnum.COLLECTION, AuthCollectionEnum.TABLE)
  );
  return querySnapshot.data();
};

export { getLoginService };
