import Palacio from "../img/palacio_liberade.jpg";
import Cultural from "../img/Centro_cultural.png";
import Espaco from "../img/espaco.png";
import Vale from "../img/vale.png";

function Historic() {
    return (
        <div className="Principal_H">
            <h1 id="Historic">Histórico</h1>
            <div className="H_01">
                <div className="foto">
                    <img src={Palacio} id="Img_T" alt="Palacio" />
                </div>
                <div className="informacoes">
                    <h3 id="Titulo">Palácio da Liberade</h3>
                    <p id="Descricao">
                    A Praça da Liberdade foi fundada juntamente com a capital, sua razão inicial era abrigar a sede do poder mineiro. Hoje, com a construção da Cidade Administrativa projetada por Oscar Niemeyer, os prédios no seu entorno tornaram-se importantes centros culturais e formam o Circuito Cultural Praça da Liberdade.
                    </p>
                </div>
            </div>
            <div className="H_01">
                <div className="foto">
                    <img src={Cultural} id="Img_T" alt="Palacio" />
                </div>
                <div className="informacoes">
                    <h3 id="Titulo">Centro Cultural Banco do Brasil</h3>
                    <p id="Descricao">
                    Centro cultural em um grande edifício da década de 1920 com exposições de arte, filmes, peças de teatro, um café e uma livraria.                    
                    </p>
                </div>
            </div>
            <div className="H_01">
                <div className="foto">
                    <img src={Espaco} id="Img_T" alt="Palacio" />
                </div>
                <div className="informacoes">
                    <h3 id="Titulo">Espaço do Conhecimento - UFMG</h3>
                    <p id="Descricao">
                    Espaço cultural diferenciado, que conjuga cultura, ciência e arte.
                    </p>
                </div>
            </div>
            <div className="H_01">
                <div className="foto">
                    <img src={Vale} id="Img_T" alt="Palacio" />
                </div>
                <div className="informacoes">
                    <h3 id="Titulo">Memorial Minas Gerais Vale</h3>
                    <p id="Descricao">
                    Museu com exposições interativas sobre a história e cultura mineira do estado de Minas Gerais.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Historic