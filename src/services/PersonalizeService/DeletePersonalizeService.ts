import { client, PersonalizeCollectionEnum } from "../../configurations";
import { doc, setDoc } from "firebase/firestore";
import { PersonalizeService } from "../index";

const deletePersonalizeService = async (key: string) => {
  let newList: string[] = [];
  const list = await PersonalizeService.getPersonalizeService();
  list?.list?.forEach((item: string) => {
    if (Object.keys(item)[0] !== key) {
      newList.push(item);
    }
  });
  await setDoc(
    doc(
      client,
      PersonalizeCollectionEnum.COLLECTION,
      PersonalizeCollectionEnum.TABLE
    ),
    {
      list: newList,
    }
  );
  return true;
};

export { deletePersonalizeService };
