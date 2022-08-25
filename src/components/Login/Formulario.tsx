import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../utils/styled.components";
import Input from "../Main/Input";

const Formulario = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const router = useNavigate();

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;

    if (email != "") {
      setError({
        ...error,
        email: "",
      });

      setEmail(email);
    } else {
      setError({
        ...error,
        email: "Ingresa un email o un número de teléfono válido.",
      });
      setEmail(email);
    }
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;

    if (password != "") {
      setError({
        ...error,
        password: "",
      });

      setPassword(password);
    } else {
      setError({
        ...error,
        password: "La contraseña debe tener entre 4 y 60 caracteres",
      });
      setPassword(password);
    }
  };

  const handleSubmit = () => {
    if (email.length > 0 && password.length > 0) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        router("/catalog");
      }, 2000);
      return;
    }

    if (email.length == 0) {
      setError({
        ...error,
        email: "Ingresa un email o un número de teléfono válido.",
      });
      return;
    }

    if (password.length == 0) {
      setError({
        ...error,
        password: "La contraseña debe tener entre 4 y 60 caracteres",
      });
    }
  };

  return (
    <div className="login-form">
      <div className="overlay"></div>

      <form className="login-input">
        <h3 className="login-title">Inicia Sesion</h3>
        <Input
          placeholder="Email o numero de telefeno"
          value={email}
          onChange={onChangeEmail}
          error={error.email}
        />

        <Input
          placeholder="Contraseña"
          value={password}
          onChange={onChangePassword}
          error={error.password}
          type="password"
        />

        <div className="margin-t-3">
          <Button
            onClick={handleSubmit}
            type="button"
            fullWidth
            padding={[1.6, 1.6]}
          >
            {loading ? <span className="loader"></span> : "Iniciar sesion"}

            {/* <span className="loader"></span> */}
          </Button>
        </div>

        <div className="login-helpers">
          <div className="login-checkbox">
            <input className="checkbox-input" type="checkbox" name="" id="" />
            <a className="login-checkbox-text">Recuerdame</a>
          </div>

          <a className="login-helpers-text">¿Necesitas ayuda?</a>
        </div>

        <div className="login-footer">
          <p className="login-footer-text-1">
            ¿Primera vez en Netflix?<span> Suscríbete ahora.</span>
          </p>
          <p className="login-footer-text-2">
            Esta página está protegida por Google reCAPTCHA para comprobar que
            no eres un robot. <span>Más info.</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
