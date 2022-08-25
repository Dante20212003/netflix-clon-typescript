import React, { useEffect } from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { NetflixItem } from "../../utils/interfaces";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface Props {
  items: NetflixItem[];
  itemsSearch: NetflixItem[];
  input: string;
}
const ItemsSearch = ({ items, input, itemsSearch }: Props) => {
 
  return (
    <>
      {items.length > 0 &&
        itemsSearch.length == 0 &&
        items.map((item, i) => (
          <div
            key={`${item.netflix_id}-${i}-item-search`}
            className="item-search-container"
          >
            <LazyLoadImage
              className="item-search-img"
              src={item.img}
              alt={item.title}
            />
            <p className="item-search-title d-none">{item.title}</p>
            <AiOutlinePlayCircle
              className="item-search-icon d-none"
              size={20}
            />
          </div>
        ))}

      {itemsSearch.length > 0 && (
        <>
          {itemsSearch.map((item, i) => (
            <div
              key={`${item.netflix_id}-${i}-searching`}
              className="item-search-container"
            >
              <LazyLoadImage
                className="item-search-img"
                src={item.img}
                alt={item.title}
              />
              <p className="item-search-title d-none">{item.title}</p>
              <AiOutlinePlayCircle
                className="item-search-icon d-none"
                size={20}
              />
            </div>
          ))}

          {/*   {itemsSearch.length > 20 && (
            <div>
              <span className="skeleton-loader"></span>
            </div>
          )} */}
        </>
      )}
    </>
  );
};

export default ItemsSearch;
