import { Link } from "react-router-dom";
import AlimentacaoImg from "../img/Alimentacao.png";
import Historico from "../img/Historico.png";
import Ponto from "../img/ponto.png";
import Publico from "../img/publico.png";

export function NavigationBar() {
  return (
    <aside>
      <div className='iconFuncoes'>
          <div className='Pontos'>
              <Link to="/bus"><img src={Ponto} title='Pontos de Ônibus'/></Link>
              <p>Ponto de Ônibus</p>
          </div>
          <div className='Publico'>
              <Link to="/public"><img src={Publico} title='Orgão Publico'/></Link>
              <p>Orgão Publico</p>
          </div>
          <div className='P-Historico'>
              <Link to="/patri"><img src={Historico} title='Patrimônio Histórico'/></Link>
              <p>Histórico</p>
          </div>
          <div className='Alimentacao'>
              <Link to="/food"><img src={AlimentacaoImg} title='Alimentação'/></Link>
              <p>Alimentação</p>
          </div>
      </div>
    </aside>
  )
}
