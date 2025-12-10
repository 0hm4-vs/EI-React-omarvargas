function Acceso(){
    return(
        <>
        <aside className="search-wrap">

            <div className="search">
                <label htmlFor="search">
                    <i className="bi bi-search" style={{ fontSize: "1.5rem", color: "#ffdf59" }}></i>
                    <input type="text" id="search" />
                </label>
            </div>

            <div className="user-actions">
                <button><i className="bi bi-person-add" style={{ fontSize: "1.5rem", color: "#ffdf59" }}></i></button>
                <button><i className="bi bi-person" style={{ fontSize: "1.5rem", color: "#ffdf59" }}></i></button>
                <button><i className="bi bi-box-arrow-right" style={{ fontSize: "1.5rem", color: "#ffdf59" }}></i></button>
            </div>

        </aside>
        </>
    )
}
export default Acceso;