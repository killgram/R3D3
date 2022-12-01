import { client, LunaticCollectionEnum } from "../../configurations";
import { doc, getDoc } from "firebase/firestore";

const getLinksService = async () => {
  const querySnapshot = await getDoc(
    doc(client, LunaticCollectionEnum.COLLECTION, LunaticCollectionEnum.TABLE)
  );
  return querySnapshot.data();
};

export { getLinksService };
