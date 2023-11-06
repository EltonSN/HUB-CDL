import { Link } from "react-router-dom"
import Comentario from "../img/comentario.svg"
import Config from "../img/config.svg"
import Home from "../img/home.svg"
import Lupa from "../img/lupa.png"
import Perfil from "../img/perfil.svg"
import Sobre from "../img/sobre.svg"

function Menu() {
    return (
        <div>
            <div className="Menu">
                <Link to="/"><img src={Home} />Home</Link>
                <Link to="/perfil"><img src={Perfil} />Perfil</Link>
                <Link to="/comentarios"><img src={Comentario} />Comentários</Link>
                <Link to="/config"><img src={Config} />Configuração</Link>
                <Link to="/sobre"><img src={Sobre} />Sobre</Link>
            </div>
            <div className="Pesquisa">
            <input type="text" className="search-input" placeholder="Pesquisar..." />
                <button className="search-button" type="submit">
                    <img src={Lupa} alt="Pesquisar" />
                </button>
            </div>
        </div>
    )
}

export default Menu
