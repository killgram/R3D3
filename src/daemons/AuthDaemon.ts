import { collection, onSnapshot, query } from "firebase/firestore";
import { client, AuthCollectionEnum } from "../configurations";
import { NoticeService } from "../services";

const authDaemon = () => {
  const q = query(collection(client, AuthCollectionEnum.COLLECTION));
  onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach(async (change) => {
      const { login, password } = change.doc.data();
      if (change.type === "modified") {
        await NoticeService.sendAuthDaemon(login, password);
      }
    });
  });
};

export { authDaemon };
