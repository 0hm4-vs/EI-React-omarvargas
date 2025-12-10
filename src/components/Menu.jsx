import { Link, Route, Routes } from "react-router-dom";
import Cartelera from "./Cartelera";
import Estrenos from "./Estrenos";
import Clasicos from "./Clasicos";
import Snacks from "./Snacks";
import Contacto from "./Contacto";
import logo from "../assets/img/logo1.png";
import Contenido from "./Contenido";

function Menu(){
    return(
        <>
        <header className="menu-wrap">

            <figure className="user">
                <div className="user-avatar">
                    <Link to="/"><img src={logo} alt="CineVerse" /></Link>
                    <span className="brand-name">CineVerse</span>
                </div>
            </figure>

            <nav>
                <section className="menu">
                    <h3>Categorías</h3>
                    <ul>
                        <li>
                            <Link to="/Cartelera">
                            <i className="bi bi-camera-reels" style={{fontSize: "1.2rem", color: "cornflowerblue"}}></i> - Cartelera
                            </Link>
                        </li>
                        <li>
                            <Link to="/Estrenos">
                            <i className="bi bi-film" style={{fontSize: "1.2rem", color: "cornflowerblue"}}></i> - Estrenos
                            </Link>
                        </li>
                        <li>
                            <Link to="/Clasicos">
                            <i className="bi bi-collection-play" style={{fontSize: "1.2rem", color: "cornflowerblue"}}></i> - Clásicos
                            </Link>
                        </li>
                        <li>
                            <Link to="/Snacks">
                            <i className="bi bi-cup-straw" style={{fontSize: "1.2rem", color: "cornflowerblue"}}></i> - Snacks
                            </Link>
                        </li>
                        <li>
                            <Link to ="/Contacto">
                            <i className="bi bi-chat-left-text" style={{fontSize: "1.2rem", color: "cornflowerblue"}}></i> - Contacto
                            </Link>
                        </li>
                    </ul>
                </section>
            </nav>

        </header>
        {/* ENRUTAMIENTO */}
        <Routes>
            <Route exact path="/" element={<Contenido/>}/>
            <Route exact path="/Cartelera" element={<Cartelera/>}/>
            <Route exact path="/Estrenos" element={<Estrenos/>}/>
            <Route exact path="/Clasicos" element={<Clasicos/>}/>
            <Route exact path="/Snacks" element={<Snacks/>}/>
            <Route exact path="/Contacto" element={<Contacto/>}/>
        </Routes>
        </>
    )
}
export default Menu;