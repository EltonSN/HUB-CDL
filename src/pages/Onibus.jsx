import BusLogo from "../img/ponto.png";
import Sinc from "../img/sincronizar.png";
function Onibus() {
    return (
        <div className="Principal" >
            <h1 id="P_onibus_t">Ponto de Ônibus</h1>
            <h3 id="paradas">Seu destino</h3>
            <div className="BoxProximas">
                <div className="Destino">
                    <input type="text" className="Bus_endereco" placeholder="R. Sapucaí, 469 - Floresta" />
                    <button className="endereco_but" type="submit">Buscar</button>
                </div>
                <div className="opcoes">
                    <h3>Salvar Endereço</h3><img src={Sinc}/>
                </div>
            </div>
            <h3 id="sugestoes">Sugestões</h3>
            <div className="BoxSugestoes" >
                <div className="ponto">
                    <h5 id="Numero_bus"><img src={BusLogo} />408A-10</h5><h5 id="Passagem">R$ 4,50</h5><h2 id="Estima">41<p>min</p></h2>
                    <h7 id="DescT" >A cada 15 - 16 min</h7><p id="DescD">de "local de saída"</p>
                </div>
                <div className="ponto">
                    <h5 id="Numero_bus"><img src={BusLogo} />408A-10</h5><h5 id="Passagem">R$ 4,50</h5><h2 id="Estima">41<p>min</p></h2>
                    <h7 id="DescT" >A cada 15 - 16 min</h7><p id="DescD">de "local de saída"</p>
                </div>
                <div className="ponto">
                    <h5 id="Numero_bus"><img src={BusLogo} />408A-10</h5><h5 id="Passagem">R$ 4,50</h5><h2 id="Estima">41<p>min</p></h2>
                    <h7 id="DescT" >A cada 15 - 16 min</h7><p id="DescD">de "local de saída"</p>
                </div>
                <div className="ponto">
                    <h5 id="Numero_bus"><img src={BusLogo} />408A-10</h5><h5 id="Passagem">R$ 4,50</h5><h2 id="Estima">41<p>min</p></h2>
                    <h7 id="DescT" >A cada 15 - 16 min</h7><p id="DescD">de "local de saída"</p>
                </div>
            </div>
        </div>
    )
}

export default Onibus