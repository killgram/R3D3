import { client, SupportCollectionEnum } from "../../configurations";
import { doc, updateDoc } from "firebase/firestore";
import { SupportService } from "../index";

const deleteSupportService = async (key: string) => {
  let newList: string[] = [];
  const list = await SupportService.getSupportService();
  list?.helpData?.forEach((item: string) => {
    if (Object.keys(item)[0] !== key) {
      newList.push(item);
    }
  });
  await updateDoc(
    doc(client, SupportCollectionEnum.COLLECTION, SupportCollectionEnum.TABLE),
    {
      helpData: newList,
    }
  );
  return true;
};

export { deleteSupportService };
