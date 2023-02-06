import { CHANGE_PHONE_COLOR } from "./type";

export const changePhoneColor = (arg) => {
  return {
    type: CHANGE_PHONE_COLOR,
    payload: arg
  }
};