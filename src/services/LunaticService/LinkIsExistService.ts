import { LunaticService } from "../index";

const linkIsExistService = async (link: string) => {
  let isExist = false;
  const list = await LunaticService.getLinksService();
  list?.links?.forEach((item: string) => {
    if (item === link) {
      isExist = true;
    }
  });
  return isExist;
};

export { linkIsExistService };
