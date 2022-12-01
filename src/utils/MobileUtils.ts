import { Keys } from "../configurations";

const checkMobileSecretKey = (incomingKey: string) => {
  return incomingKey === Keys.mobileSecretKey;
};

export { checkMobileSecretKey };
