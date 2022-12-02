import { AccessesService } from "../index";

const protonExistAccessService = async (key: string) => {
  let isExist = false;
  const list = await AccessesService.getProtonAccessService();
  Object.keys(list!).forEach((item: string) => {
    if (item === key) {
      isExist = true;
    }
  });
  return isExist;
};

export { protonExistAccessService };
