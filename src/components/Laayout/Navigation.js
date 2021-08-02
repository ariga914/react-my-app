import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" exact>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/manage">Manage</NavLink>
                </li>
                <li>
                    <button>Logout</button>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
