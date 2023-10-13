import Home from "../img/home.svg"
import Perfil from "../img/perfil.svg"
import Comentario from "../img/comentario.svg"
import Config from "../img/config.svg"
import Sobre from "../img/sobre.svg"
import Lupa from "../img/lupa.png"

function Menu() {
    return (
        <div>
            <div className="Menu">
                <a href="/"><img src={Home} />Home</a>
                <a href="/perfil"><img src={Perfil} />Perfil</a>
                <a href="/comentarios"><img src={Comentario} />Comentários</a>
                <a href="/configuracao"><img src={Config} />Configuração</a>
                <a href="#"><img src={Sobre} />Sobre</a>
            </div>
            <div className="Pesquisa">
            <input type="text" class="search-input" placeholder="Pesquisar..." />
                <button class="search-button" type="submit"><img src={Lupa} alt="Pesquisar" /></button>
            </div>
        </div>
    )
}

export default Menu