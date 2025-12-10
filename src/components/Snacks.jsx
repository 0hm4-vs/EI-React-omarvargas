import hotdog from "../assets/img/hot-dog.jpg"
import popcornCaramelo from "../assets/img/popcorn-caramelo.jpg"
import popcornClasico from "../assets/img/popcorn.jpg"
import nachos from "../assets/img/nachos.jpg"
import gaseosa from "../assets/img/vasogaseosa.jpg"
import combopareja from "../assets/img/combo-pareja.jpg"
function Snacks() {
  return (
    <section className="content">
      <h2>Snacks</h2>

      <div className="cards snacks">

        <div className="card">
          <img src={popcornClasico} alt="Popcorn Clásico" />
          <h4>Popcorn Clásico</h4>
          <p>Mantequilla • S/ 12.00</p>
        </div>

        <div className="card">
          <img src={popcornCaramelo} alt="Caramelo" />
          <h4>Popcorn Caramelo</h4>
          <p>Dulce • S/ 14.00</p>
        </div>

        <div className="card">
          <img src={nachos} alt="Nachos" />
          <h4>Nachos con Queso</h4>
          <p>Salsa Cheddar • S/ 18.00</p>
        </div>

        <div className="card">
          <img src={hotdog} alt="Hot Dog" />
          <h4>Hot Dog</h4>
          <p>Clásico Americano • S/ 10.00</p>
        </div>

        <div className="card">
          <img src={gaseosa} alt="Gaseosa" />
          <h4>Gaseosa Grande</h4>
          <p>Coca-Cola • S/ 9.00</p>
        </div>

        <div className="card">
          <img src={combopareja} alt="Combo Pareja" />
          <h4>Combo Pareja</h4>
          <p>1 Popcorn + 2 Gaseosas • S/ 25.00</p>
        </div>

      </div>
    </section>
  );
}

export default Snacks;
