//import "../assets/js/script";
import React, { useEffect } from "react";
import Menu from './Menu';
import Publico from "../img/publico.png"
import Logo from "../img/cdl.png"
import Historico from "../img/Historico.png"
import Ponto from "../img/ponto.png"
import Alimentacao from "../img/Alimentacao.png"
import Una from "../img/una.png"
import Site from "../img/site.png"
import Insta from "../img/instagram.png"
import Linkedin from "../img/linkedin.png"
import Youtube from "../img/youtube.png"

function Home() {
    useEffect(() => {
        const openMenu = document.getElementById("openMenu");
        const closeMenu = document.getElementById("closeMenu");
        const menu = document.getElementById("menu");
    
        openMenu.addEventListener("click", () => {
          menu.style.display = "flex";
          menu.style.right = menu.offsetWidth * -1 + "px";
    
          setTimeout(() => {
            menu.style.opacity = "1";
            menu.style.right = "0";
            openMenu.style.display = "none";
          }, 10);
        });
    
        closeMenu.addEventListener("click", () => {
          menu.style.opacity = "0";
          menu.style.right = menu.offsetWidth * -1 + "px";
    
          setTimeout(() => {
            menu.removeAttribute("style");
            openMenu.removeAttribute("style");
          }, 200);
        });
    
        // Certifique-se de remover os ouvintes de eventos quando o componente for desmontado.
        return () => {
          openMenu.removeEventListener("click", () => {});
          closeMenu.removeEventListener("click", () => {});
        };
      }, []);
      const imgMain = 'https://1.bp.blogspot.com/-WZJK08-0koM/XswuNYveYjI/AAAAAAAAB3w/Vje5NDmfN10hn4lo7dx1Jn72RYmu3523ACLcBGAsYHQ/s1600/WhatsApp%2BImage%2B2020-05-23%2Bat%2B10.23.12_Easy-Resize.com.jpg';
    return (
    <div>
        <header>
            <img src={Logo} id="logo" alt="Logo" />
            <button id="openMenu">&#9776;</button>
            <nav id="menu">

                <button id="closeMenu">X</button>
                <Menu />
            </nav>
            
        </header>

        <aside>
            <div className='iconFuncoes'>
                <div className='Pontos'>
                    <img src={Ponto} title='Pontos de Ônibus'/>
                    <p>Ponto de Ônibus</p>
                </div>
                <div className='Publico'>
                    <img src={Publico} title='Orgão Publico'/>
                    <p>Orgão Publico</p>
                </div>
                <div className='P-Historico'>
                    <img src={Historico} title='Patrimônio Histórico'/>
                    <p>Histórico</p>
                </div>
                <div className='Alimentacao'>
                    <img src={Alimentacao} title='Alimentação'/>
                    <p>Alimentação</p>
                </div>
            </div>
        </aside>
        <main>
            <img src={imgMain} alt="Liberdade" id='liberdade' />
            <div className="MenuCentral">
                
            </div>
        </main>
        <footer>
            <div className="Una">
                <img src={Una} />
            </div>
            <div className="Redes">
                <a href="https://www.cdlbh.com.br" target="_blank"><img src={Site} width="25" alt="Site" /></a>
                <a href="https://www.instagram.com/cdlbh/" target="_blank" ><img src={Insta} width="20" alt="Instagram" /></a>
                <a href="https://www.linkedin.com/company/cdlbh/" target="_blank" ><img src={Linkedin} width="20" alt="Linkedin" /></a>
                <a href="https://www.youtube.com/user/cdlbh" target="_blank" ><img src={Youtube} width="25" alt="YouTube" /></a>
            </div>
        </footer>
    </div>
    )
}

export default Home