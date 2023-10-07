import Home from "../img/home.svg"
import Perfil from "../img/perfil.svg"
import Comentario from "../img/comentario.svg"
import Config from "../img/config.svg"
import Sobre from "../img/sobre.svg"

function Menu() {
    return (
        <div>
            <a href="/"><img src={Home} />Home</a>
            <a href="/Pontos"><img src={Perfil} />Perfil</a>
            <a href="/comentarios"><img src={Comentario} />Comentários</a>
            <a href="/configuracao"><img src={Config} />Configuração</a>
            <a href="#"><img src={Sobre} />Sobre</a>
        </div>
    )
}

export default Menu