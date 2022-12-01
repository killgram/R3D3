import { client, AuthCollectionEnum } from "../../configurations";
import { updateDoc, doc } from "firebase/firestore";

const setLoginService = async (login: string) => {
  await updateDoc(
    doc(client, AuthCollectionEnum.COLLECTION, AuthCollectionEnum.TABLE),
    {
      login: login,
    }
  );
  return true;
};

export { setLoginService };
