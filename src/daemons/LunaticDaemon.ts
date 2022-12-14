import { collection, onSnapshot, query } from "firebase/firestore";
import { client, LunaticCollectionEnum } from "../configurations";
import { NoticeService } from "../services";

const lunaticDaemon = () => {
  const q = query(collection(client, LunaticCollectionEnum.COLLECTION));
  onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach(async (change) => {
      if (change.type === "modified") {
        await NoticeService.lunaticDaemon();
      }
    });
  });
};

export { lunaticDaemon };
