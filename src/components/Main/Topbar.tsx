import { useNavigate } from "react-router-dom";
import {
  Button,
  Flex,
  Option,
  Select,
  TopBar,
} from "../../utils/styled.components";
import NetflixLogo from "../../assets/icons8-netflix.svg";

interface Props {
  logo: boolean;
  children?: JSX.Element | JSX.Element[];
}

const Topbar = ({ logo, children }: Props) => {
  const router = useNavigate();

  const onClickLogin = () => {
    router("/login");
  };

  const onCLickHome = () => {
    router("/");
  };
  return (
    <TopBar>
      <img
        onClick={onCLickHome}
        className="netlix-logo c-pointer"
        src={NetflixLogo}
        alt="Logo Netlix"
      />

      <Flex gap={1}>
        {children}
        {logo == false && (
          <>
            <Select padding={[0.4, 0.8]}>
              <Option value="esp">Espanol</Option>
              <Option value="en">Ingles</Option>
            </Select>

            <Button onClick={onClickLogin}>Iniciar sesion</Button>
          </>
        )}
      </Flex>
    </TopBar>
  );
};

export default Topbar;
