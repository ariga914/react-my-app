import { NavLink } from "react-router-dom";
import Button from "../UI/Button/Button";

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
                    <NavLink to="/signup">Signup</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/manage">Manage</NavLink>
                </li>
                <li>
                    <Button>login</Button>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
