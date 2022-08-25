import { NetflixData } from "../utils/interfaces";

type Action =
  | { type: "addNetflixData"; payload: NetflixData }
  | { type: "ffi" };

export const appReducer = (state: NetflixData, action: Action) => {
  switch (action.type) {
    case "addNetflixData":
      return {
        ...state,
      };
      break;

    case "ffi":
      break;
  }
};
