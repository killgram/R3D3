import { client, LunaticCollectionEnum } from "../../configurations";
import { doc, updateDoc } from "firebase/firestore";
import { LunaticService } from "../index";

const addLinkService = async (link: string) => {
  const list = await LunaticService.getLinksService();
  list?.links?.push(link);
  await updateDoc(
    doc(client, LunaticCollectionEnum.COLLECTION, LunaticCollectionEnum.TABLE),
    {
      links: list?.links,
    }
  );
  return true;
};

export { addLinkService };
