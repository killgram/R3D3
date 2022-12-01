import { client, PersonalizeCollectionEnum } from "../../configurations";
import { doc, getDoc } from "firebase/firestore";

const getPersonalizeService = async () => {
  const querySnapshot = await getDoc(
    doc(
      client,
      PersonalizeCollectionEnum.COLLECTION,
      PersonalizeCollectionEnum.TABLE
    )
  );
  return querySnapshot.data();
};

export { getPersonalizeService };
