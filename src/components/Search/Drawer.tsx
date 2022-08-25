import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineSearch } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";

interface Props2 {
  sideBar: boolean;
  handleSidebar: (e: boolean) => void;
  children: any;
  max_w?: boolean;
}

function Sidebar({ sideBar, handleSidebar, children, max_w }: Props2) {
  return (
    <AnimatePresence>
      {sideBar && (
        <>
          <motion.div
            initial={{ x: "100%" }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className={`sidebar-fixed ${
              window.innerWidth <= 550 ? "no-padding" : "si-padding"
            } ${max_w && "sidebar-mx-w"} ${
              children.length == 2 && "padding-filters"
            }`}
          >
            <div className="sidebar-container">
              <div className="sidebar-body">{children}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;
