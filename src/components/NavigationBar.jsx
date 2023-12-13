import { Link } from "react-router-dom";
import AlimentacaoImg from "../img/Alimentacao.png";
import Historico from "../img/Historico.png";
import Ponto from "../img/ponto.png";
import Publico from "../img/publico.png";
import Empresa from "../img/empresa.png";

export function NavigationBar() {
  return (
    <aside>
      <div className='iconFuncoes'>
          <div className='Pontos'>
          <Link to="/bus"><img src={Ponto} title='Pontos de Ônibus'/></Link>
          <Link to="/bus"><p>Ponto de Ônibus</p></Link>
          </div>
          <div className='Publico'>
          <Link to="/public"><img src={Publico} title='Orgão Publico'/></Link>
              <Link to="/public"><p>Orgão Publico</p></Link>
          </div>
          <div className='P-Historico'>
          <Link to="/patri"><img src={Historico} title='Patrimônio Histórico'/></Link>
              <Link to="/patri"><p>Histórico</p></Link>
          </div>
          <div className='P-Historico'>
          <Link to="/est"><img src={Empresa} title='Patrimônio Histórico'/></Link>
              <Link to="/est"><p>Estabelecimentos</p></Link>
          </div>
          <div className='Alimentacao'>
          <Link to="/food"><img src={AlimentacaoImg} title='Alimentação'/></Link>
             <Link to="/food"><p>Alimentação</p></Link>
          </div>
      </div>
    </aside>
  )
}
