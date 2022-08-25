import { FaPlus, FaPlay, FaCircle } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import BackPeli from "../../assets/back-peli.png";

interface Props {
  fixear: boolean;
}
const InfoPeliculaBack = ({ fixear }: Props) => {
  return (
    <div className={`info-background ${fixear && "fix-info"}`}>
      <div>
        <div>
          <img className="info-background-pelicula" src={BackPeli} alt="" />
        </div>

        <div className="detail-pelicula hidden">
          <p>
            En su graduación universitaria, la vida de Natalie se divide en dos
            realidades paralelas tras realizar una prueba de embarazo. ¿Qué le
            deparará el futuro?
          </p>
        </div>

        <div className="info-list">
          <p>Sensual</p>
          <FaCircle size={4} color="737373" className="circle-info" />
          <p>Comedia</p>
          <FaCircle size={4} color="737373" className="circle-info" />
          <p>Drama</p>
          <FaCircle size={4} color="737373" className="circle-info" />
          <p>Romantico</p>
          <FaCircle size={4} color="737373" className="circle-info" />
          <p>Intimo</p>
        </div>

        <div className="info-buttons">
          <div className="info-icon-text hidden-btn-list">
            <FaPlus size={20} />
            <span>Mi lista</span>
          </div>

          <div>
            <button className="info-button-text">
              <FaPlay size={15} color="black" />
              <span>Reproducir</span>
            </button>
          </div>

          <div className="info-icon-text convert-btn-info">
            <AiOutlineInfoCircle size={20} />
            <span>Informacion</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPeliculaBack;
