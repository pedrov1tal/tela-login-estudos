import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import "./Login.css";

// 🔗 IMPORTANDO A API
import { loginUser } from "../services/api";

const Login = () => {

  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // 🔗 CHAMADA DA API
    const users = await loginUser(userName, password);

    if (users.length > 0) {
      alert("Login realizado com sucesso!");
    } else {
      alert("Email ou senha inválidos");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>

        <div className="input-field">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <FaUser className="icon" />
        </div>

        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FaLock className="icon" />
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="#">Esqueceu a senha?</a>
        </div>

        <button type="submit">Entrar</button>

        <div className="signup-link">
          <p>
            Não tem uma conta ? <a href="#">Registrar</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
