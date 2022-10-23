import './navbar.css';
function Navbar(){
    return(
        <div className="navbar shadow p-3 mb-5 bg-white rounded">
            <img src="airbnb.jpg" className="logo"/>
            <h2 className="brand-name">airbnb</h2>
        </div>
    )
}
export default Navbar;