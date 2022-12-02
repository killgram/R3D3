import { client, AccessesRenderCollectionEnum } from "../../configurations";
import { doc, getDoc } from "firebase/firestore";

const getRenderAccessService = async () => {
  const querySnapshot = await getDoc(
    doc(
      client,
      AccessesRenderCollectionEnum.COLLECTION,
      AccessesRenderCollectionEnum.TABLE
    )
  );
  return querySnapshot.data();
};

export { getRenderAccessService };
