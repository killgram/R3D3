import { doc, onSnapshot } from "firebase/firestore";
import { client, PersonalizeSkillsCollectionEnum } from "../configurations";
import { NoticeService } from "../services";

const skillsDaemon = () => {
  let firstUpdate = false;
  onSnapshot(
    doc(
      client,
      PersonalizeSkillsCollectionEnum.COLLECTION,
      PersonalizeSkillsCollectionEnum.TABLE
    ),
    async (_) => {
      if (firstUpdate) {
        await NoticeService.skillsDaemon();
      } else {
        firstUpdate = true;
      }
    }
  );
};

export { skillsDaemon };
