import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { NavigationBar } from "../components/NavigationBar";
import Logo from "../img/cdl.png";
import Insta from "../img/instagram.png";
import Linkedin from "../img/linkedin.png";
import Lupa from "../img/lupa.png";
import Site from "../img/site.png";
import Una from "../img/una.png";
import Youtube from "../img/youtube.png";
import Menu from './Menu';


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
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <header>
            
            <img src={Logo} id="logo" alt="Logo" />
            <div className="Pesquisa2">
                <input type="text" className="search-input" placeholder="Pesquisar..." />
                <button className="search-button" type="submit"><img src={Lupa} alt="Pesquisar" /></button>
            </div>
            <button id="openMenu">&#9776;</button>
            <nav id="menu">

                <button id="closeMenu">X</button>
                <Menu />
               
            </nav>
        </header>

        <NavigationBar />

        <main>
            <img src={imgMain} alt="Liberdade" id='liberdade' />
            <div className="MenuCentral">
                    <Outlet />
            </div>
        </main>
        <footer>
            <div className="Una">
                <img src={Una} />
            </div>
            <div className="Redes">
                <a href="https://www.cdlbh.com.br" target="_blank" rel="noreferrer"><img src={Site} width="25" alt="Site" /></a>
                <a href="https://www.instagram.com/cdlbh/" target="_blank" rel="noreferrer" ><img src={Insta} width="20" alt="Instagram" /></a>
                <a href="https://www.linkedin.com/company/cdlbh/" target="_blank" rel="noreferrer" ><img src={Linkedin} width="20" alt="Linkedin" /></a>
                <a href="https://www.youtube.com/user/cdlbh" target="_blank" rel="noreferrer" ><img src={Youtube} width="25" alt="YouTube" /></a>
            </div>
        </footer>
    </div>
    )
}

export default Home
