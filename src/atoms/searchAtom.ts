import { atom } from "recoil";

export const nameState = atom({
  key: "nameState",
  default: "",
});

export const typeState = atom({
  key: "typeState",
  default: "movie",
});
