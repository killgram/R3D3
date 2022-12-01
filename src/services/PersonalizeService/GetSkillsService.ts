import { client, PersonalizeSkillsCollectionEnum } from "../../configurations";
import { doc, getDoc } from "firebase/firestore";

const getSkillsService = async () => {
  const querySnapshot = await getDoc(
    doc(
      client,
      PersonalizeSkillsCollectionEnum.COLLECTION,
      PersonalizeSkillsCollectionEnum.TABLE
    )
  );
  return querySnapshot.data();
};

export { getSkillsService };
