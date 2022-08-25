import { useReducer } from "react";
import { NetflixData } from "../utils/interfaces";
import { AppContext } from "./AppContext";
import { appReducer } from "./AppReducer";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const INITIAL_STATE: NetflixData = {
  data: {
    series: [
      {
        title: "Santiago of the Seas",
        img: "https://occ-0-448-999.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQia38u2a3dWzRlbldZJNJLQzhDG33e1o5GOExWZUJddgNWPE4UdC_SgL1COkFQe8m8M6hVMIdJkMm3sA7qTd8zVT0F2GpqATg.jpg?r=6e6",
        title_type: "series",
        netflix_id: 81604781,
        synopsis:
          "Sail the oceans with Santiago, a brave and bilingual young pirate, as he and cousin Tomás, mermaid Lorelai and more friends protect their island home.",
        rating: "0",
        year: "2020",
        runtime: "0",
        imdb_id: "tt12844622",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNzgxNTQwNjQtYmE1NS00NDQ2LWFiNGEtZTQwMmFiYjc5MzUwXkEyXkFqcGdeQXVyODk1MjAxNzQ@._V1_SX300.jpg",
        top250: 0,
        top250tv: 0,
        title_date: "2022-08-19",
      },
    ],
    movies: [
      {
        title: "From the Vine",
        img: "https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABdTeSaUJV9MQ5U8qh_CzaNXZ1ZY1WClKViyYd3khEOkicAm4ONzkYp_crZNNcnUUeU7My2I6aPUX22u42kZFFs0PokD6T2w1xQ.jpg?r=e9f",
        title_type: "movie",
        netflix_id: 81324343,
        synopsis:
          "After quitting his CEO job in Canada, a man travels back to his hometown in rural Italy, where he tries to revive his grandpa&#39;s vineyard.",
        rating: "0",
        year: "2019",
        runtime: "5647",
        imdb_id: "tt9313424",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMTc3MDQxZDItZDhmNy00NjA4LThkM2QtOTlmZTk1ZmM0YzIwXkEyXkFqcGdeQXVyMjEyMDYzNjc@._V1_SX300.jpg",
        top250: 0,
        top250tv: 0,
        title_date: "2022-08-19",
      },
    ],
  },
};

export const AppProvider = ({ children }: Props) => {
  /* const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);
  
  return (
    <AppContext.Provider
      value={{
        INITIAL_STATE,
      }}
    >
      {children}
    </AppContext.Provider>
  ); */
};
