import estreno1 from "../assets/img/estreno1.jpg";
import estreno2 from "../assets/img/estreno2.jpg";
import estreno3 from "../assets/img/estreno3.jpg";
import estreno4 from "../assets/img/estreno4.jpg";
import estreno5 from "../assets/img/estreno5.jpg";
import estreno6 from "../assets/img/estreno6.jpg";
function Estrenos() {
  return (
    <section className="content">
      <h2>Próximos Estrenos 2026</h2>

      <article className="cards">

        <div className="card">
          <img src={estreno1} alt="Super Mario Galaxy: La Pelicula" />
          <h4>Super Mario Galaxy: La Pelicula</h4>
          <p>Animación • Estreno: abril 2026</p>
        </div>

        <div className="card">
          <img src={estreno2} alt="Avengers: Doomsday" />
          <h4>Avengers: Doomsday</h4>
          <p>Acción • Estreno: May 2026</p>
        </div>

        <div className="card">
          <img src={estreno3} alt="The Mandalorian & Grogu" />
          <h4>The Mandalorian & Grogu</h4>
          <p>Sci-Fi • Estreno: 2026</p>
        </div>

        <div className="card">
          <img src={estreno4} alt="Toy Story 5" />
          <h4>Toy Story 5</h4>
          <p>Animación • Estreno: Jun 2026</p>
        </div>

        <div className="card">
          <img src={estreno5} alt="Spider-Man: Brand New Day" />
          <h4>Spider-Man: Brand New Day</h4>
          <p>Aventura • Estreno: Julio 2026</p>
        </div>

        <div className="card">
          <img src={estreno6} alt="Moana Live Action" />
          <h4>Moana Live Action</h4>
          <p>Aventura • Estreno: Julio 2026</p>
        </div>

      </article>
    </section>
  );
}

export default Estrenos;
