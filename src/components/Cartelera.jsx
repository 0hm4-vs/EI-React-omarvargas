import Peli1 from "../assets/img/Peli1.jpg";
import Peli2 from "../assets/img/Peli2.jpg";
import Peli3 from "../assets/img/Peli3.jpg";
import Peli4 from "../assets/img/Peli4.jpg";
import Peli5 from "../assets/img/Peli5.jpg";
import Peli6 from "../assets/img/Peli6.jpg";

function Cartelera() {
    return (
        <section className="content">
            <h2>Cartelera</h2>

            <article className="cards">

                <div className="card">
                    <img src={Peli1} alt="Peli1" />
                    <h4>Capitán América: Brave New World</h4>
                    <p>Acción • 2h 06min</p>
                    <button className="btn-watch">Ver película</button>
                </div>

                <div className="card">
                    <img src={Peli2} alt="Peli2" />
                    <h4>The Running Man</h4>
                    <p>Accion • 2h 00min</p>
                    <button className="btn-watch">Ver película</button>
                </div>

                <div className="card">
                    <img src={Peli3} alt="Peli3" />
                    <h4>M3GAN 2.0</h4>
                    <p>Terror • 2h 00min</p>
                    <button className="btn-watch">Ver película</button>
                </div>

                <div className="card">
                    <img src={Peli4} alt="Peli4"/>
                    <h4>Blue Moon</h4>
                    <p>Comedia • 1h 40min</p>
                    <button className="btn-watch">Ver película</button>
                </div>

                <div className="card">
                    <img src={Peli5} alt="Peli5" />
                    <h4>The Running Man</h4>
                    <p>Distopía • 2h 13min</p>
                    <button className="btn-watch">Ver película</button>
                </div>

                <div className="card">
                    <img src={Peli6} alt="Peli6" />
                    <h4>Avatar: Fire and Ash</h4>
                    <p>Sci-Fi • 3h 15min</p>
                    <button className="btn-watch">Ver película</button>
                </div>

            </article>
        </section>
    );
}

export default Cartelera;