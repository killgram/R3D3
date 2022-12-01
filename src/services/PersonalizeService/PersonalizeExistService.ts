import { PersonalizeService } from "../index";

const personalizeExistService = async (key: string) => {
  let isExist = false;
  const list = await PersonalizeService.getPersonalizeService();
  list?.list?.forEach((item: string) => {
    if (Object.keys(item)[0] === key) {
      isExist = true;
    }
  });
  return isExist;
};

export { personalizeExistService };
