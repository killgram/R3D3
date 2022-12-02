import { AccessesService } from "../index";

const renderExistAccessService = async (key: string) => {
  let isExist = false;
  const list = await AccessesService.getRenderAccessService();
  Object.keys(list!).forEach((item: string) => {
    if (item === key) {
      isExist = true;
    }
  });
  return isExist;
};

export { renderExistAccessService };
