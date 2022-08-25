import { NetflixData, NetflixItem } from "../utils/interfaces";
import { createContext } from "react";

export const AppContext = createContext<NetflixData>({} as NetflixData);
