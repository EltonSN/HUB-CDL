import UNA from "../img/UNA2.png";
import CDL from "../img/CDL2.png";
import UEMG from "../img/UEMG.png";
import UNACINE from "../img/UNACINE.png";

function Historic() {
    return (
        <div className="Principal_H">
            <h1 id="Historic2">Estabelecimentos</h1>
            <div className="H_01">
                <div className="foto">
                    <img src={UNA} id="Img_T" alt="Palacio" />
                </div>
                <div className="informacoes">
                    <h3 id="Titulo">Cidade Universitária Una Aimorés</h3>
                    <p id="Descricao">
                    
Localizado próximo ao circuito cultural da Praça da Liberdade, a Una Aimorés abriga diversos cursos de graduação. Além dos cursos de Engenharia, a Una Aimorés também conta com os tradicionais e reconhecidos cursos de Administração, Ciências Contábeis, Ciências Econômicas e Direito. 
Rua dos Aimorés, 1451 - Lourdes, Belo Horizonte - MG | 30140-071
                    </p>
                </div>
            </div>
            <div className="H_01">
                <div className="foto">
                    <img src={CDL} id="Img_T" alt="Palacio" />
                </div>
                <div className="informacoes">
                    <h3 id="Titulo">CDL - Belo Horizonte</h3>
                    <p id="Descricao">
                    
Ao longo de seus mais de 60 anos, a CDL/BH fez a sua história e teve papel importante nos destinos da Capital, contribuindo diretamente para o seu desenvolvimento. O edifício conta ainda com o Ponto Cultural CDL, um espaço de exposição que trata do comércio e de sua relação com a cidade de Belo Horizonte. Traz a história da capital mineira a partir do desenvolvimento do comércio, desde sua fundação até os dias atuais, de uma forma original, interativa e inovadora.                    
Av. João Pinheiro, 495 - Boa Viagem, Belo Horizonte – MG | 30130-185
                    </p>
                </div>
            </div>
            <div className="H_01">
                <div className="foto">
                    <img src={UEMG} id="Img_T" alt="Palacio" />
                </div>
                <div className="informacoes">
                    <h3 id="Titulo">Escola de Design – UEMG</h3>
                    <p id="Descricao">
                    
Com uma história intimamente ligada ao desenvolvimento do Design no país, a Escola de Design da Universidade do Estado de Minas Gerais foi criada em 1955 com o nome de Escola de Artes Plásticas. A instalação da Escola de Design da UEMG na Praça da Liberdade significou oferecer ao conjunto dos equipamentos culturais ali reunidos, uma instituição que ao longo de seus mais de 65 anos de existência desenha a história do design e da arte em nosso Estado.
Rua Gonçalves Dias, 1434 – Lourdes, Belo Horizonte - MG | 30.140-091
                    </p>
                </div>
            </div>
            <div className="H_01">
                <div className="foto">
                    <img src={UNACINE} id="Img_T" alt="Palacio" />
                </div>
                <div className="informacoes">
                    <h3 id="Titulo">UNA – Cine Belas Artes</h3>
                    <p id="Descricao">
                    
Tradicional reduto de cinema de arte da cidade, o UNA - Cine Belas Artes, principal cinema de rua da cidade, oferece uma programação que prioriza filmes independentes e busca apresentar diversidade cultural na tela, com títulos que não fazem parte do circuito comercial. Pré-estreias de filmes, debates e mostras de cinema brasileiro e internacional estão sempre em exibição nas três salas do cinema. O local conta ainda com café e livraria.
Rua Gonçalves Dias, 1581 – Lourdes, Belo Horizonte - MG | 30.140-091
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Historic