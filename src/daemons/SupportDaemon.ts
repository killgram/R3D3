import { collection, onSnapshot, query } from "firebase/firestore";
import { client, SupportCollectionEnum } from "../configurations";
import { NoticeService } from "../services";

const supportDaemon = () => {
  const q = query(collection(client, SupportCollectionEnum.COLLECTION));
  onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach(async (change) => {
      if (change.type === "modified") {
        await NoticeService.supportDaemon();
      }
    });
  });
};

export { supportDaemon };
