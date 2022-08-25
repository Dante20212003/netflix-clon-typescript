import { useState, useEffect, useRef, useContext } from "react";
import OutsideClickHandler from "react-outside-click-handler";

import { Container } from "../utils/styled.components";

import Background from "../assets/back-catalog.jpg";
import "../assets/styles/catalogIndex.css";
import TopbarCatalog from "../components/Catalog/TopbarCatalog";
import InfoPeliculaBack from "../components/Catalog/InfoPeliculaBack";

import { DataPeliculas, testCombination } from "../utils/Data/MoviesSeries";
import Carousel from "../components/Carousel";
import { NetflixItem } from "../utils/interfaces";
import { DataSmallCategory } from "../utils/Data/Categorias";

import SearchMovies from "../components/Search/SearchMovies";
import SideBarFilter from "../components/Search/SideBarFilter";
import SeriesFilter from "../components/Filters/SeriesFilter";
import { AppContext } from "../context/AppContext";
import { getAllMovies } from "../utils/Fetchs";

interface Catalog {
  estrenos: NetflixItem[];
  anime: NetflixItem[];
  documentales: NetflixItem[];
  dramas: NetflixItem[];
  terror: NetflixItem[];
  koreanos: NetflixItem[];
  suspenso: NetflixItem[];
  main: NetflixItem[];
}

const NetflixCatalogo = () => {
  const ref = useRef<HTMLDivElement>(null);

  // const context = useContext(AppContext);

  const [sideBar, setSideBar] = useState(false);
  const [sideBarMenu, setSideBarMenu] = useState(false);
  const [seriesFilterSidebar, setSeriesFilterSidebar] = useState(false);

  const [fixear, setfixear] = useState(false);

  const [data, setData] = useState<Catalog>({
    estrenos: [],
    anime: [],
    documentales: [],
    dramas: [],
    terror: [],
    koreanos: [],
    suspenso: [],
    main: [],
  });

  const handleSidebar = () => {
    setSideBar(!sideBar);
  };

  const handleSideBarMenu = (val: boolean) => {
    setSideBarMenu(val);
  };

  const handleSideBarMenuSeries = (val: boolean) => {
    setSeriesFilterSidebar(val);
  };

  const handleFixed = (val: boolean) => {
    setfixear(val);
  };

  const getAllDataCatalog = () => {
    const dataEstrenos = testCombination();
    const dataAnime = DataSmallCategory("anime");
    const dataDocumentales = DataSmallCategory("documentales");
    const dataDramas = DataSmallCategory("dramas");
    const dataTerror = DataSmallCategory("terror");
    const dataKoreanos = DataSmallCategory("koreanos");
    const dataSuspenso = DataSmallCategory("suspenso");
    const dataMain = DataSmallCategory("main");

    setData({
      estrenos: dataEstrenos,
      anime: dataAnime,
      documentales: dataDocumentales,
      dramas: dataDramas,
      terror: dataTerror,
      koreanos: dataKoreanos,
      suspenso: dataSuspenso,
      main: dataMain,
    });
  };

  useEffect(() => {
    // console.log(context.data);
    /*   getAllMovies().then((data) => {
      console.log("listo desde netflix");
      console.log(data);
    }); */
  }, []);

  useEffect(() => {
    getAllDataCatalog();
  }, []);

  useEffect(() => {
    if (sideBar) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [sideBar]);
  return (
    <>
      {/* <button onClick={handleBusqueda}>awdawd</button> */}
      {/*  <Sidebar sideBar={sideBar} handleSidebar={handleSidebar}></Sidebar> */}
      <SearchMovies
        movies={data.main}
        sideBar={sideBar}
        handleSidebar={handleSidebar}
      />

      <SeriesFilter
        sideBarMenuSeries={seriesFilterSidebar}
        handleSidebarSeries={handleSideBarMenuSeries}
      />

      <OutsideClickHandler onOutsideClick={() => setSideBarMenu(false)}>
        <SideBarFilter
          sideBarMenu={sideBarMenu}
          handleSideBarMenu={handleSideBarMenu}
        ></SideBarFilter>
      </OutsideClickHandler>

      <Container
        img={Background}
        height={55}
        gradient
        className="contenedor-background"
      >
        <TopbarCatalog
          busqueda={sideBar}
          handleMenu={handleSideBarMenu}
          handleBusqueda={handleSidebar}
          handleFixed={handleFixed}
          handleSideBarMenuSeries={handleSideBarMenuSeries}
          fixear={fixear}
        />

        <InfoPeliculaBack fixear={fixear} />
      </Container>

      <Container center>
        <div className="container-peliculas-all">
          <h2>Nuevos Lanzamientos</h2>

          <Carousel peliculas={data.estrenos} />

          <h2>Anime</h2>

          <Carousel peliculas={data.anime} />

          <h2>Documentales</h2>

          <Carousel peliculas={data.documentales} />

          <h2>Suspenso</h2>

          <Carousel peliculas={data.suspenso} />

          <h2>Solo en Netflix</h2>

          <Carousel peliculas={data.main} v2 />

          <h2>Dramas</h2>

          <Carousel peliculas={data.dramas} />

          <h2>Terror</h2>

          <Carousel peliculas={data.terror} />

          <h2>Asiatiocs</h2>

          <Carousel peliculas={data.koreanos} />
        </div>
      </Container>
    </>
  );
};

export default NetflixCatalogo;
