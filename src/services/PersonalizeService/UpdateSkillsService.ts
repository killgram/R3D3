import { client, PersonalizeSkillsCollectionEnum } from "../../configurations";
import { doc, updateDoc } from "firebase/firestore";

const updateSkillsService = async (data: Array<string>) => {
  await updateDoc(
    doc(
      client,
      PersonalizeSkillsCollectionEnum.COLLECTION,
      PersonalizeSkillsCollectionEnum.TABLE
    ),
    {
      list: data,
    }
  );
  return true;
};

export { updateSkillsService };
