import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import NetLogo from "../../assets/logo-net.png";
import PerfilNet from "../../assets/perfil.png";

interface Props {
  handleFixed: (val: boolean) => void;
  fixear: boolean;
  handleBusqueda: () => void;
  busqueda: boolean;
  handleMenu: (val: boolean) => void;
  handleSideBarMenuSeries: (val: boolean) => void;
}
const TopbarCatalog = ({
  handleFixed,
  handleBusqueda,
  handleMenu,
  handleSideBarMenuSeries,
  fixear,
  busqueda,
}: Props) => {
  const router = useNavigate();
  const { ref, inView } = useInView();

  const onClickHome = () => {
    router("/");
  };

  useEffect(() => {
    if (!inView) {
      handleFixed(true);
    } else {
      handleFixed(false);
    }
  }, [inView]);

  return (
    <div className="container-catalog">
      <div ref={ref} className="top-bar-catalog">
        <div className="navegacion">
          <img
            onClick={onClickHome}
            className="top-bar-img"
            src={NetLogo}
            alt=""
          />
          <nav>
            <p>Inicio</p>
            <p onClick={() => handleSideBarMenuSeries(true)}>Series</p>
            <p>Peliculas</p>
          </nav>
        </div>

        <div className="search-perfil">
          <FaSearch
            className="c-pointer"
            onClick={handleBusqueda}
            size={24}
            color="white"
          />
          <img className="img-perfil c-pointer" src={PerfilNet} alt="" />
          <FiMenu
            className="menu-filter c-pointer"
            onClick={() => handleMenu(true)}
            size={25}
          />
        </div>
      </div>

      <div
        className={`top-bar-filter ${fixear && !busqueda && "top-bar-fixed"}`}
      >
        <p onClick={() => handleSideBarMenuSeries(true)} className="c-pointer">
          Series
        </p>
        <p className="c-pointer">Peliculas</p>
        <p onClick={() => handleMenu(true)} className="c-pointer">
          Categorias
        </p>
      </div>
    </div>
  );
};

export default TopbarCatalog;
