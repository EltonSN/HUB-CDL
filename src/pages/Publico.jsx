import BPE from "../img/BPE.png";
import SEF from "../img/SEF.png";
import TJ from "../img/TJ.png";
import CCMG from "../img/CCMG.png";

function Public() {
    return (
        <div className="Principal_H">
            <h1 id="Public">Orgão Publico</h1>
            <div className="H_01">
                <div className="foto">
                    <img src={BPE} id="Img_T" alt="Palacio" />
                </div>
                <div className="informacoes">
                    <h3 id="Titulo">Biblioteca Pública Estadual- MG</h3>
                    <p id="Descricao">
                    Fundada em 1954, a Biblioteca Pública Estadual de Minas Gerais é a principal biblioteca pública de Belo Horizonte. É popularmente chamada de "Biblioteca da Praça da Liberdade", por estar do lado da praça.
                    </p>
                </div>
            </div>
            <div className="H_01">
                <div className="foto">
                    <img src={SEF} id="Img_T" alt="Palacio" />
                </div>
                <div className="informacoes">
                    <h3 id="Titulo">Secretaria de Estado de Fazenda - EF/MG</h3>
                    <p id="Descricao">
                    Secretaria de Estado de Fazenda de Minas Gerais, órgão público mineiro que desempenha o papel de Prover e gerir os recursos financeiros do Estado para garantir o desenvolvimento econômico e a justiça fiscal em benefício da sociedade mineira.
                    </p>
                </div>
            </div>
            <div className="H_01">
                <div className="foto">
                    <img src={TJ} id="Img_T" alt="Palacio" />
                </div>
                <div className="informacoes">
                    <h3 id="Titulo">Tribunal de Justiça MG</h3>
                    <p id="Descricao">
                    O Tribunal de Justiça de Minas Gerais é o órgão superior da justiça mineira e tem sede em Belo Horizonte e jurisdição em todo o território mineiro.                    </p>
                </div>
            </div>
            <div className="H_01">
                <div className="foto">
                    <img src={CCMG} id="Img_T" alt="Palacio" />
                </div>
                <div className="informacoes">
                    <h3 id="Titulo">CCMG - Conselho de Contribuintes - MG</h3>
                    <p id="Descricao">
                    O Conselho de Contribuintes do Estado de Minas Gerais é um órgão colegiado de formação paritária, que reúne representantes da Fazenda Pública Estadual e de Entidades de Classe de Contribuintes, tendo por objetivo a revisão do lançamento fiscal.                    </p>
                </div>
            </div>
        </div>
    )
}

export default Public