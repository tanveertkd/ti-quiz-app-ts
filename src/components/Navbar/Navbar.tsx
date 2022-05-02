import './Navbar.css';

const Navbar = () => {
    return (
        // <!-- Primary Navigation -->
        <nav className="nav-main">
            {/* <!-- Nav left --> */}
            <ul className="nav-main-left nav-main-ul">
                <li className="nav-main-li">
                    <a href="./index.html" className="nav-main-item">TI</a>
                </li>
            </ul>

            {/* <!-- Nav right --> */}
            <ul className="nav-main-right nav-main-ul">
                <li className="nav-main-li">
                    <a href="./routes/login.html" className="nav-main-item nav-btn-login">Login</a>
                </li>
                <li className="nav-main-li">
                    <a href="./routes/categories.html" className="nav-main-item">Categories</a>
                </li>
                <li className="nav-main-li">
                    <a href="./routes/rules.html" className="nav-main-item">Rules</a>
                </li>
            </ul>
        </nav>
        // <!-- Primary Navigation Ends -->
    )
}
export { Navbar }