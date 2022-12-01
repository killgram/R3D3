import { client, LunaticCollectionEnum } from "../../configurations";
import { doc, updateDoc } from "firebase/firestore";
import { LunaticService } from "../index";

const deleteLinkService = async (link: string) => {
  let newList: string[] = [];
  const list = await LunaticService.getLinksService();
  list?.links?.forEach((item: string) => {
    if (item !== link) {
      newList.push(item);
    }
  });
  await updateDoc(
    doc(client, LunaticCollectionEnum.COLLECTION, LunaticCollectionEnum.TABLE),
    {
      links: newList,
    }
  );
  return true;
};

export { deleteLinkService };
