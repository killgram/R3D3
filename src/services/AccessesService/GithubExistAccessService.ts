import { AccessesService } from "../index";

const githubExistAccessService = async (key: string) => {
  let isExist = false;
  const list = await AccessesService.getGithubAccessService();
  Object.keys(list!).forEach((item: string) => {
    if (item === key) {
      isExist = true;
    }
  });
  return isExist;
};

export { githubExistAccessService };
