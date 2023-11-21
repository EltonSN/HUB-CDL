import BusLogo from "../img/ponto.png";

function Onibus() {
    return (
        <div className="Principal" >
            <h1 id="P_onibus_t">Ponto de Ônibus</h1>
            <h3 id="paradas">Paradas Próximas</h3>
            <div className="BoxProximas">

            </div>
            <h3 id="sugestoes">Sugestões</h3>
            <div className="BoxSugestoes" >
                <div className="ponto">
                    <h5 id="Numero_bus"><img src={BusLogo} />408A-10</h5><h5 id="Passagem">R$ 4,50</h5><h2 id="Estima">41<p>min</p></h2>
                    <h7 id="DescT" >A cada 15 - 16 min</h7><p id="DescD">de "local de saída"</p>
                </div>
                <div className="ponto">
                    <h5>408A</h5><h5>R$ 4,50</h5><h2>41</h2><p>min</p>
                    <p>A cada 15 - 16 min</p>
                </div>
                <div className="ponto">
                    <h5>408A</h5><h5>R$ 4,50</h5><h2>41</h2><p>min</p>
                    <p>A cada 15 - 16 min</p>
                </div>
                <div className="ponto">
                    <h5 id="Numero_bus">408A</h5><h5>R$ 4,50</h5><h2>41</h2><p>min</p>
                    <p>A cada 15 - 16 min</p>
                </div>
            </div>
        </div>
    )
}

export default Onibus