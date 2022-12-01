import { SupportService } from "../index";

const supportExistService = async (key: string) => {
  let isExist = false;
  const list = await SupportService.getSupportService();
  list?.helpData?.forEach((item: string) => {
    if (Object.keys(item)[0] === key) {
      isExist = true;
    }
  });
  return isExist;
};

export { supportExistService };
