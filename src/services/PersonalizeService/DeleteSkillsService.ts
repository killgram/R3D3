import { client, PersonalizeSkillsCollectionEnum } from "../../configurations";
import { doc, setDoc } from "firebase/firestore";
import { PersonalizeService } from "../index";

const deleteSkillsService = async (key: string) => {
  let newList: any = [];
  const list = await PersonalizeService.getSkillsService();
  list?.list?.forEach((item: { name: string }) => {
    if (item.name !== key) {
      newList.push(item);
    }
  });
  console.log(newList);
  await setDoc(
    doc(
      client,
      PersonalizeSkillsCollectionEnum.COLLECTION,
      PersonalizeSkillsCollectionEnum.TABLE
    ),
    {
      list: newList,
    }
  );
  return true;
};

export { deleteSkillsService };
