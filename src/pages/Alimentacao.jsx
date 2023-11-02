import Avaliacao from "../img/estrela.png"
import Localizacao from "../img/localizacao.png"

function Alimentacao() {
    return (
        <div className="Informacoes">      
            <table>
                <tr>
                    <th className="Estabelecimento" colSpan="2">Restaurante Italiano Maurizio Gallo</th>
                </tr>
                <tr>
                    <td>
                        <td className="Avaliacao"><img src={Avaliacao} alt="Avaliação" />4.3</td>
                        <td className="Distancia"><img src={Localizacao} alt="Localização" />0.7 KM</td>
                    </td>
                </tr>
                <tr>
                    <th className="Estabelecimento" colSpan="2">Boteco Nada Contra</th>
                </tr>
                <tr>
                    <td>
                        <td className="Avaliacao"><img src={Avaliacao} alt="Avaliação" />4.6</td>
                        <td className="Distancia"><img src={Localizacao} alt="Localização" />1.2 KM</td>
                    </td>
                </tr>
                <tr>
                    <th className="Estabelecimento" colSpan="2">Clube De Quem Bebe</th>
                </tr>
                <tr>
                    <td>
                        <td className="Avaliacao"><img src={Avaliacao} alt="Avaliação" />4.4</td>
                        <td className="Distancia"><img src={Localizacao} alt="Localização" />0.6 KM</td>
                    </td>
                </tr>
                <tr>
                    <th className="Estabelecimento" colSpan="2">Restaurante Roast</th>
                </tr>
                <tr>
                    <td>
                        <td className="Avaliacao"><img src={Avaliacao} alt="Avaliação" />4.1</td>
                        <td className="Distancia"><img src={Localizacao} alt="Localização" />0.5 KM</td>
                    </td>
                </tr>
                <tr>
                    <th className="Estabelecimento" colSpan="2">Bar da Esquina</th>
                </tr>
                <tr>
                    <td>
                        <td className="Avaliacao"><img src={Avaliacao} alt="Avaliação" />4.5</td>
                        <td className="Distancia"><img src={Localizacao} alt="Localização" />1.5 KM</td>
                    </td>
                </tr>
                <tr>
                    <th className="Estabelecimento" colSpan="2">Cream Berry Açaí e Gelatos de fruta</th>
                </tr>
                <tr>
                    <td>
                        <td className="Avaliacao"><img src={Avaliacao} alt="Avaliação" />4.0</td>
                        <td className="Distancia"><img src={Localizacao} alt="Localização" />2.3 KM</td>
                    </td>
                </tr>
                <tr>
                    <th className="Estabelecimento" colSpan="2">Subway</th>
                </tr>
                <tr>
                    <td>
                        <td className="Avaliacao"><img src={Avaliacao} alt="Avaliação" />4.5</td>
                        <td className="Distancia"><img src={Localizacao} alt="Localização" />1.8 KM</td>
                    </td>
                </tr>
                <tr>
                    <th className="Estabelecimento" colSpan="2">Dom Manoel Gourmet</th>
                </tr>
                <tr>
                    <td>
                        <td className="Avaliacao"><img src={Avaliacao} alt="Avaliação" />3.9</td>
                        <td className="Distancia"><img src={Localizacao} alt="Localização" />0.9 KM</td>
                    </td>
                </tr>
                <tr>
                    <th className="Estabelecimento" colSpan="2">Xodó</th>
                </tr>
                <tr>
                    <td>
                        <td className="Avaliacao"><img src={Avaliacao} alt="Avaliação" />4.9</td>
                        <td className="Distancia"><img src={Localizacao} alt="Localização" />0.2 KM</td>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Alimentacao