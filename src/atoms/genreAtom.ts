import { atom } from "recoil";

export const movieGenreState = atom({
  key: "movieGenreState",
  default: 28,
});

export const serieGenreState = atom({
  key: "serieGenreState",
  default: 10759,
});

export const pageState = atom({
  key: "pageState",
  default: 1,
});
