import {
  resumeClient,
  ResumeTotalCountCollectionEnum,
} from "../../configurations";
import { doc, getDoc } from "firebase/firestore";

const getTotalCountService = async () => {
  const querySnapshot = await getDoc(
    doc(
      resumeClient,
      ResumeTotalCountCollectionEnum.COLLECTION,
      ResumeTotalCountCollectionEnum.TABLE
    )
  );
  const data = querySnapshot.data();
  return {
    totalView: data?.totalView,
    lastView: +data?.lastView?.toDate(),
  };
};

export { getTotalCountService };
