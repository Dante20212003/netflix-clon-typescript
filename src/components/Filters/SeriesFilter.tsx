import React, { useEffect, useState } from "react";
import { Container } from "../../utils/styled.components";
import Sidebar from "../Search/Drawer";
import Background from "../../assets/back-catalog.jpg";
import ItemsSearch from "../Search/ItemSearch";
import { NetflixItem } from "../../utils/interfaces";
import { fetchAllSeries } from "../../utils/Fetch/InfoItemFetch";
import { useInView } from "react-intersection-observer";

interface Props {
  sideBarMenuSeries: boolean;
  handleSidebarSeries: (val: boolean) => void;
}

const SeriesFilter = ({ sideBarMenuSeries, handleSidebarSeries }: Props) => {
  const [series, setSeries] = useState<NetflixItem[]>([]);
  const [limit, setLimit] = useState(30);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setLimit(limit + 20);
      }, 1500);
    }
  }, [inView]);

  useEffect(() => {
    fetchAllSeries().then((series) => setSeries(series));
  }, []);

  return (
    <Sidebar sideBar={sideBarMenuSeries} handleSidebar={handleSidebarSeries}>
      <div className="main-series">
        <h2>Series</h2>
        <div className="main-search-grid">
          <ItemsSearch
            items={series.slice(0, limit)}
            input={""}
            itemsSearch={[]}
          />

          <div ref={ref}>
            <span className="skeleton-loader"></span>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default SeriesFilter;
