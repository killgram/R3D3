import { client, PersonalizeCollectionEnum } from "../../configurations";
import { doc, updateDoc } from "firebase/firestore";
import { PersonalizeService } from "../index";

const changePersonalizeService = async (key: string, value: string = "") => {
  const list = await PersonalizeService.getPersonalizeService();
  let newList: string[] = [];
  list?.list?.forEach((item: string) => {
    if (Object.keys(item)[0] === key) {
      const newData: any = {};
      newData[key] = value;
      newList.push(newData);
    } else {
      newList.push(item);
    }
  });
  await updateDoc(
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

export { changePersonalizeService };
