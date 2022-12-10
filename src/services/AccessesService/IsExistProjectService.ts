import { AccessesService } from "../index";

const isExistProjectService = async (projectName: string) => {
  let isExist = false;
  const list = await AccessesService.getAccessProjectsService();
  list?.forEach((item: any) => {
    if (item?.project?.toLowerCase() === projectName?.toLowerCase()) {
      isExist = true;
    }
  });
  return isExist;
};

export { isExistProjectService };
