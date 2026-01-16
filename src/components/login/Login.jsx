import { FaUser, FaLock } from "react-icons/fa"
import { useState } from "react"
import "./Login.css"

const Login = () => {

    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Enviando os dados" + userName + " - " + password )
    }

  return (
   <div className="container">
    <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>
        <div>
        <input type="email" placeholder='email' onChange={(e) => setUsername(e.target.value)}/>  
        <FaUser className="icon"></FaUser>
        </div>
        <div>
        <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
        <FaLock className="icon"></FaLock>
        </div>

        <div className="recall-forget">
            <label>
                <input type="checkbox" />
                Lembre de mim
            </label>
            <a href="">Esqueceu a senha? </a>
        </div>
        <button>Entrar</button>

        <div className="signup-link">
            <p>
                Não tem uma conta ? <a href="#">Registrar</a>
            </p>
        </div>
    </form>
   </div>
  )
}

export default Login
