import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { NetflixItem } from "../utils/interfaces";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

interface Props {
  peliculas: NetflixItem[];
  v2?: boolean;
}
const Carousel = ({ peliculas, v2 }: Props) => {
  const router = useNavigate();

  const handleInfoMovie = (id: string, type: string) => {
    router(`/item/${type}/${id}`);
  };

  return (
    <ScrollContainer>
      <div className="peliculas-flex">
        {peliculas.length > 0 &&
          peliculas.map((item, i) => {
            return (
              <img
                key={item.netflix_id + "-" + i}
                onClick={() => handleInfoMovie(item.imdb_id, item.title_type)}
                className={`${v2 ? "img-peli-v2" : "img-peli"}`}
                src={item.img}
                alt={item.title}
              />
            );
          })}
      </div>
    </ScrollContainer>
  );
};

export default Carousel;
