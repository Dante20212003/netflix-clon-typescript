import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import "../../assets/styles/collapsible.css";

interface Props {
  title: string;
  body?: string;
}
const Collapsible = ({ title, body }: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [execute, setExecute] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const animation = useAnimation();

  const onChangeCollapsed = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    if (inView && !execute) {
      setExecute(true);
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
        },
      });
    }

    if (!inView && !execute) {
      animation.start({
        x: "-100vh",
      });
    }
    // console.log("IN VIEW", inView);
  }, [inView]);

  return (
    <div ref={ref}>
      <motion.div animate={animation}>
        <div
          onClick={onChangeCollapsed}
          className={`collapsible-container ${
            collapsed ? "m-b-1_5" : "m-b-10"
          }`}
        >
          <p className="collapsible-text">{title}</p>
          {collapsed ? <AiOutlineClose size={20} /> : <FaPlus size={20} />}
        </div>
      </motion.div>

      {collapsed && (
        <div className="collapsible-container m-t-1_5 m-b-10">
          {body ? (
            <p className="collapsible-text">{body}</p>
          ) : (
            <p className="collapsible-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              excepturi, aliquam consectetur exercitationem vel quidem a error
              ad, cumque delectus officiis? Veritatis nostrum voluptatem
              doloremque eaque ad accusamus, officiis facilis.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Collapsible;
