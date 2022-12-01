import { client, PersonalizeCollectionEnum } from "../../configurations";
import { doc, updateDoc } from "firebase/firestore";
import { PersonalizeService } from "../index";

const addPersonalizeService = async (key: string, value: string = "") => {
  const newData: any = {};
  newData[key] = value;
  const list = await PersonalizeService.getPersonalizeService();
  list?.list?.push(newData);
  await updateDoc(
    doc(
      client,
      PersonalizeCollectionEnum.COLLECTION,
      PersonalizeCollectionEnum.TABLE
    ),
    {
      list: list?.list,
    }
  );
  return true;
};

export { addPersonalizeService };
