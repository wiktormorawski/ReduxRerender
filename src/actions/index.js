import { changeUnread } from "./types";

export const changeEmailUnreadCheckbox = (id) => ({
  type: changeUnread,
  payload: { id },
});
