import React, { useEffect, useState } from "react";
import { fetchFilters } from "../../utils/Fetch/InfoItemFetch";
import { NetflixItem } from "../../utils/interfaces";
import Sidebar from "./Drawer";
import PerfilNet from "../../assets/perfil.png";
import "../../assets/styles/sidebarFilter.css";
import { AiOutlineArrowLeft, AiOutlineSearch } from "react-icons/ai";

interface Props {
  sideBarMenu: boolean;
  handleSideBarMenu: (val: boolean) => void;
}

interface Generos {
  netflix_id: number;
  genre: string;
}

const SideBarFilter = ({ sideBarMenu, handleSideBarMenu }: Props) => {
  const [filtersItems, setFiltersItems] = useState<Generos[]>([]);

  useEffect(() => {
    fetchFilters().then((filters) => {
      setFiltersItems(filters);
    });
  }, []);

  return (
    <Sidebar
      sideBar={sideBarMenu}
      handleSidebar={handleSideBarMenu}
      max_w={window.innerWidth > 550 ? true : false}
    >
      <div></div>

      <div className="sideBarFilters-container x1234">
        <div className="sideBarFilters-header">
          <h2 style={{ fontSize: "2rem" }}>Categorias</h2>
          <div className="header-sideBarMenu">
            <img className="img-perfil" src={PerfilNet} alt="" />
            <p>Administrador</p>
          </div>
        </div>
        <p
          className="filter-item active"
          onClick={() => handleSideBarMenu(false)}
        >
          Inicio
        </p>

        {filtersItems.length > 0 &&
          filtersItems.map((filterItem, i) => (
            <p
              onClick={() => handleSideBarMenu(false)}
              key={`${filterItem.netflix_id}-categories-${i}`}
              className="filter-item"
            >
              {filterItem.genre}
            </p>
          ))}
      </div>
    </Sidebar>
  );
};

export default SideBarFilter;
