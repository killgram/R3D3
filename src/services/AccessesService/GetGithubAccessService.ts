import { client, AccessesGithubCollectionEnum } from "../../configurations";
import { doc, getDoc } from "firebase/firestore";

const getGithubAccessService = async () => {
  const querySnapshot = await getDoc(
    doc(
      client,
      AccessesGithubCollectionEnum.COLLECTION,
      AccessesGithubCollectionEnum.TABLE
    )
  );
  return querySnapshot.data();
};

export { getGithubAccessService };
