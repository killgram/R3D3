import { client, AuthCollectionEnum } from "../../configurations";
import { updateDoc, doc } from "firebase/firestore";

const clearAuthService = async () => {
  await updateDoc(
    doc(client, AuthCollectionEnum.COLLECTION, AuthCollectionEnum.TABLE),
    {
      login: "",
      password: "",
    }
  );
};

export { clearAuthService };
