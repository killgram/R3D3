import { PersonalizeService } from "../index";

const skillsExistService = async (key: string) => {
  let isExist = false;
  const list = await PersonalizeService.getSkillsService();
  list?.list?.forEach((item: { name: string }) => {
    if (item.name === key) {
      isExist = true;
    }
  });
  return isExist;
};

export { skillsExistService };
