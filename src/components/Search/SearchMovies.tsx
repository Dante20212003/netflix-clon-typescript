import { ChangeEvent, useEffect, useRef, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineSearch } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import Sidebar from "./Drawer";
import PerfilNet from "../../assets/perfil.png";
import ItemsSearch from "./ItemSearch";
import { NetflixItem } from "../../utils/interfaces";
import { searchMoviesSeries } from "../../utils/Fetch/Search";
import { useInView } from "react-intersection-observer";

interface Props {
  movies: NetflixItem[];
  sideBar: boolean;
  handleSidebar: () => void;
}
let timeout: number = 0;

const SearchMovies = ({ sideBar, handleSidebar, movies }: Props) => {
  const refInput = useRef<HTMLInputElement>(null);
  const refInput2 = useRef<HTMLInputElement>(null);
  const { ref, inView } = useInView();

  const [dataSearching, setDataSearching] = useState<NetflixItem[]>([]);
  const [noResult, setnoResult] = useState("");
  const [limit, setLimit] = useState(30);

  const [input, setInput] = useState({
    input: "",
    input_2: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    if (name === "input_1") {
      setInput({ input: e.target.value, input_2: "" });

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (e.target.value !== "") {
          setnoResult("");
          searchMoviesSeries(e.target.value).then((response) => {
            if (response.length > 0) {
              setDataSearching(response);
            } else {
              setnoResult("No hay resultados....");
            }
          });
        } else {
          setnoResult("");
          setDataSearching([]);
        }
        clearTimeout(timeout);
      }, 1000);

      return;
    }

    if (name === "input_2") {
      setInput({ input: "", input_2: e.target.value });

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (e.target.value !== "") {
          setnoResult("");
          searchMoviesSeries(e.target.value).then((response) => {
            if (response.length > 0) {
              setDataSearching(response);
            } else {
              setnoResult("No hay resultados....");
            }
          });
        } else {
          setnoResult("");
          setDataSearching([]);
        }

        clearTimeout(timeout);
      }, 500);

      return;
    }
  };

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setLimit(limit + 20);
      }, 2000);
    }
  }, [inView]);

  useEffect(() => {
    if (sideBar) {
      refInput.current?.focus();
      refInput2.current?.focus();
    }
  }, [sideBar]);

  return (
    <Sidebar sideBar={sideBar} handleSidebar={handleSidebar}>
      <div className="top-drawer">
        <AiOutlineArrowLeft onClick={() => handleSidebar()} size={28} />

        <div className="top-drawer-input-md">
          <AiOutlineSearch size={25} color="#8c8c8c" />
          <input
            type="text"
            ref={refInput}
            placeholder="Buscar"
            name="input_1"
            value={input.input}
            onChange={handleInputChange}
          />
        </div>

        <img className="img-perfil" src={PerfilNet} alt="" />
      </div>

      <div className="input-drawer">
        <AiOutlineSearch size={25} color="#8c8c8c" />
        <input
          ref={refInput2}
          type="text"
          placeholder="Buscar una serie, una peli, un genero, etc."
          name="input_2"
          value={input.input_2}
          onChange={handleInputChange}
        />
        <FaMicrophone size={20} color="#8c8c8c" />
      </div>

      <div className="main-search">
        <p style={{ fontSize: "1.6rem" }}>{noResult}</p>

        {noResult.length == 0 && (
          <>
            <h2>{dataSearching.length == 0 ? "Los mas buscados" : ""}</h2>

            <div className="main-search-grid">
              <ItemsSearch
                items={movies}
                input={input.input || input.input_2}
                itemsSearch={
                  dataSearching.length <= 20
                    ? dataSearching
                    : dataSearching.slice(0, limit)
                }
              />
              {dataSearching.length > 20 && (
                <div ref={ref}>
                  <span className="skeleton-loader"></span>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </Sidebar>
  );
};

export default SearchMovies;
