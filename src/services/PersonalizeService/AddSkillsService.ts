import { client, PersonalizeSkillsCollectionEnum } from "../../configurations";
import { doc, updateDoc } from "firebase/firestore";
import { PersonalizeService } from "../index";

const addSkillsService = async (
  name: string,
  link: string,
  rate: string,
  importance: number = 0
) => {
  const list = await PersonalizeService.getSkillsService();
  list?.list?.push({
    name,
    link,
    rate,
    importance,
  });
  await updateDoc(
    doc(
      client,
      PersonalizeSkillsCollectionEnum.COLLECTION,
      PersonalizeSkillsCollectionEnum.TABLE
    ),
    {
      list: list?.list,
    }
  );
  return true;
};

export { addSkillsService };
