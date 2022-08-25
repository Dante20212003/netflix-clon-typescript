import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/ContextProvider";

import Busqueda from "./pages/Busqueda";
import InfoMovie from "./pages/InfoMovie";

import Login from "./pages/Login";
import Netflix from "./pages/Netflix";
import NetflixCatalogo from "./pages/NetflixCatalogo";
import "./styles.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Netflix />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalog" element={<NetflixCatalogo />} />
        <Route path="/search" element={<Busqueda />} />
        <Route path="/item/:type/:id" element={<InfoMovie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
