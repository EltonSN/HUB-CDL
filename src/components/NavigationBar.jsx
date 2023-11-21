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
              <img src={Ponto} title='Pontos de Ônibus'/>
              <Link to="/bus"><p>Ponto de Ônibus</p></Link>
          </div>
          <div className='Publico'>
              <img src={Publico} title='Orgão Publico'/>
              <Link to="/public"><p>Orgão Publico</p></Link>
          </div>
          <div className='P-Historico'>
              <img src={Historico} title='Patrimônio Histórico'/>
              <Link to="/patri"><p>Histórico</p></Link>
          </div>
          <div className='Alimentacao'>
              <Link to="/food"><img src={AlimentacaoImg} title='Alimentação'/></Link>
              <p>Alimentação</p>
          </div>
      </div>
    </aside>
  )
}
