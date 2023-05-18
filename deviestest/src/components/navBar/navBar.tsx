import { useNavigate } from "react-router-dom";
import "./navBar.css";

function NavBar() {

    const navigate = useNavigate();

    return (
        <div id="nav-bar" onClick={() => navigate("/")}>
            <h1>Devies SPA</h1>
            <h2><a href="/about">About</a></h2>
        </div>
    );
}

export default NavBar;