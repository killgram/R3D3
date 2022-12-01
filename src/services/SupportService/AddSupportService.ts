import { client, SupportCollectionEnum } from "../../configurations";
import { doc, updateDoc } from "firebase/firestore";
import { SupportService } from "../index";

const addSupportService = async (key: string, value: string) => {
  const newData: any = {};
  newData[key] = value;
  const list = await SupportService.getSupportService();
  list?.helpData?.push(newData);
  await updateDoc(
    doc(client, SupportCollectionEnum.COLLECTION, SupportCollectionEnum.TABLE),
    {
      helpData: list?.helpData,
    }
  );
  return true;
};

export { addSupportService };
