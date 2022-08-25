import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { itemInfoData } from "../utils/Fetch/InfoItemFetch";

const InfoMovie = () => {
  const params = useParams() as any;
  const [loading, setLoading] = useState(false);

  const getMovieInfo = async () => {
    setLoading(true);
    const data = await itemInfoData(params.id, params.type);
    console.log(data);
    setLoading(false);
  };

  useEffect(() => {
    getMovieInfo();
  }, []);
  return (
    <div style={{ fontSize: "9rem" }}>{loading ? "cargando" : "listo"}</div>
  );
};

export default InfoMovie;
