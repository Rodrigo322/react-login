import logoImg from "../../assets/logo.svg";
import arrowImg from "../../assets/arrow.svg";

import "./styles.css";

export function Login() {
  return (
    <div className="container">
      <header className="header">
        <img src={logoImg} alt="Workflow" className="logoImg" />
        <span>Por favor digite suas informações de login</span>
      </header>

      <form>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="johndoe@gmail.com"
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********************"
          />
        </div>

        <a href="#">Esqueceu sua senha ?</a>

        <button className="button">
          Entrar <img src={arrowImg} alt="->" />
        </button>
        <div className="footer">
          <p>Você não tem uma conta?</p>
          <a href="#">Crie a sua conta aqui</a>
        </div>
      </form>
    </div>
  );
}
