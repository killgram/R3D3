import { doc, onSnapshot } from "firebase/firestore";
import { client, PersonalizeCollectionEnum } from "../configurations";
import { NoticeService } from "../services";

const personalizeDaemon = () => {
  let firstUpdate = false;
  onSnapshot(
    doc(
      client,
      PersonalizeCollectionEnum.COLLECTION,
      PersonalizeCollectionEnum.TABLE
    ),
    async (_) => {
      if (firstUpdate) {
        await NoticeService.personalizeDaemon();
      } else {
        firstUpdate = true;
      }
    }
  );
};

export { personalizeDaemon };
