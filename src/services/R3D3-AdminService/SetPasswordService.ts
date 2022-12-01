import { client, AuthCollectionEnum } from "../../configurations";
import { updateDoc, doc } from "firebase/firestore";

const setPasswordService = async (password: string) => {
  await updateDoc(
    doc(client, AuthCollectionEnum.COLLECTION, AuthCollectionEnum.TABLE),
    {
      password: password,
    }
  );
  return true;
};

export { setPasswordService };
