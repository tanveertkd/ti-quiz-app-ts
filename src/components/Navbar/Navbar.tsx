import { Link } from 'react-router-dom';
import { useThemeHook } from '../../hooks/useThemeHook';
import './Navbar.css';

const Navbar = () => {

    const { theme, toggleTheme } = useThemeHook();

    return (
        // <!-- Primary Navigation -->
        <nav className="nav-main">
            {/* <!-- Nav left --> */}
            <ul className="nav-main-left nav-main-ul">
                <li className="nav-main-li">
                    <Link to="/" className="nav-main-item">
                        TI
                    </Link>
                </li>
            </ul>

            {/* <!-- Nav right --> */}
            <ul className="nav-main-right nav-main-ul">

                <li className="nav-main-li">
                    {theme === 'light' ? (
                        <i
                            className="fas fa-moon nav-main-item nav-btn-login"
                            onClick={toggleTheme}
                        />
                    ) : (
                        <i
                            className="fas fa-sun nav-main-item nav-btn-login"
                            onClick={toggleTheme}
                        />
                    )}
                </li>

                {/* <li className="nav-main-li">
                    <Link to="auth" className="nav-main-item nav-btn-login">
                        Login
                    </Link>
                </li> */}
                <li className="nav-main-li">
                    <Link to="categories" className="nav-main-item">
                        Categories
                    </Link>
                </li>
                <li className="nav-main-li">
                    <Link to="rules" className="nav-main-item">
                        Rules
                    </Link>
                </li>
            </ul>
        </nav>
        // <!-- Primary Navigation Ends -->
    );
};
export { Navbar };
