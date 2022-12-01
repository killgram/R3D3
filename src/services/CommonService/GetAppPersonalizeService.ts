import {
  client,
  DistributionAppsData,
  PersonalizeCollectionEnum,
} from "../../configurations";
import { doc, getDoc } from "firebase/firestore";

const getAppPersonalizeService = async () => {
  const querySnapshot = await getDoc(
    doc(
      client,
      PersonalizeCollectionEnum.COLLECTION,
      PersonalizeCollectionEnum.TABLE
    )
  );
  let coincidenceData: string[] = [];
  const allData = querySnapshot.data();
  allData?.list.forEach((item: string) => {
    if (DistributionAppsData.includes(Object.keys(item)[0])) {
      coincidenceData.push(item);
    }
  });
  return { list: coincidenceData };
};

export { getAppPersonalizeService };
