function Clasicos(){
    return(
        <>
        <section className="content">
            <h2>Clásicos en Tabla</h2>

            <table className="cine-table">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Año</th>
                        <th>Género</th>
                        <th>Duración</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Forrest Gump</td>
                        <td>1994</td>
                        <td>Drama</td>
                        <td>2h 22min</td>
                        <td>
                            <button className="btn-watch">Ver película</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Volver al Futuro</td>
                        <td>1985</td>
                        <td>Sci-Fi</td>
                        <td>1h 56min</td>
                        <td>
                            <button className="btn-watch">Ver película</button>
                        </td>
                    </tr>
                    <tr>
                        <td>El Padrino</td>
                        <td>1972</td>
                        <td>Crimen</td>
                        <td>2h 55min</td>
                        <td>
                            <button className="btn-watch">Ver película</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>

        </>
    )
}
export default Clasicos;