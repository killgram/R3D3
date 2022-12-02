import { client, AccessesProtonCollectionEnum } from "../../configurations";
import { doc, getDoc } from "firebase/firestore";

const getProtonAccessService = async () => {
  const querySnapshot = await getDoc(
    doc(
      client,
      AccessesProtonCollectionEnum.COLLECTION,
      AccessesProtonCollectionEnum.TABLE
    )
  );
  return querySnapshot.data();
};

export { getProtonAccessService };
