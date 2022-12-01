import { doc, getDoc } from "firebase/firestore";
import { client, AuthCollectionEnum } from "../configurations";

const authExistService = async (login: string, password: string) => {
  let isExist = false;
  const querySnapshot = await getDoc(
    doc(client, AuthCollectionEnum.COLLECTION, AuthCollectionEnum.TABLE)
  );
  const correctData = querySnapshot.data();
  if (correctData?.login === login && correctData?.password === password) {
    isExist = true;
  }
  return isExist;
};

export { authExistService };
