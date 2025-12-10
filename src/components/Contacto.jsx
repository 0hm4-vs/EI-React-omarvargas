function Contacto(){
    return(
        <>
        <section className="content contacto">
          <h2>Contacto</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="nombre">Nombre completo</label>
              <input type="text" id="nombre" placeholder="Ingresa tu nombre" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input type="email" id="email" placeholder="ejemplo@correo.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" rows="4" placeholder="¿En qué podemos ayudarte?" required></textarea>
            </div>
            <button type="submit" className="btn-send">
              <i className="bi bi-send"></i> Enviar mensaje
            </button>
          </form>
        </section>


        </>
    )
}
export default Contacto;