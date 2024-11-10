import {Outlet, Link} from "react-router-dom";
import {useState} from "react";
import Header from "./components/Header";
import "./css/Layout.css"

const Layout = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return(
        <>
            <Header />
            <div className="hamburger" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <nav id="main-nav" className={menuOpen?"show":"hide"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/player-college">Player History</Link></li>
                <li><Link to="/coach-team">Coach % Team History</Link></li>
                <li><Link to="/add-delete">Add & Delete Player</Link></li>
                <li><Link to="/about">About & Contact Us</Link></li>
            </nav>

            <Outlet />

            <div class = "footer">
                <p>&copy; mattlarsen13</p>
            </div>
        </>
    );
};

export default Layout;