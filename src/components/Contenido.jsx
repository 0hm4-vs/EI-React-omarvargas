import Cartelera from "./Cartelera.jsx";
import Estrenos from "./Estrenos.jsx";
import Clasicos from "./Clasicos.jsx";
import Contacto from "./Contacto.jsx";
import Snacks from "./Snacks.jsx";
// ESTE COMPONENTE CONSUME A LOS DEMAS COMPONENTES QUE RENDERIZAN EL CONTENIDO PRINCIPAL DE LA PAGINA
function Contenido(){   
    return(
        <>
         <main className="content-wrap">
            <Cartelera/>
            <Estrenos/>
            <Clasicos/>
            <Snacks/>
            <Contacto/>
        </main>
        </>
    )
}
export default Contenido;