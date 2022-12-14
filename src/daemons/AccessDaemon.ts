import { collection, onSnapshot, query } from "firebase/firestore";
import { client, AccessesCollectionEnum } from "../configurations";
import { NoticeService } from "../services";

const accessDaemon = () => {
  const q = query(collection(client, AccessesCollectionEnum.COLLECTION));
  onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach(async (change) => {
      if (change.type === "modified") {
        await NoticeService.accessDaemon();
      }
      if (change.type === "removed") {
        await NoticeService.accessDaemon();
      }
    });
  });
};

export { accessDaemon };
