import './Footer.css';

const Footer = () => {
    // <!-- Footer -->
    return (
        <footer className="footer">
            <ul className="footer-socials-list">
                <li>
                    <a className="footer-links" href="https://www.github.com/tanveertkd" target="_blank" rel="noreferrer"><i
                        className="fab fa-github fa-lg social-icn"></i></a>
                </li>
                <li>
                    <a className="footer-links" href="https://www.linkedin.com/in/tanveer-hazarika/" target="_blank" rel="noreferrer"><i
                        className="fab fa-linkedin fa-lg social-icn"></i></a>
                </li>
                <li>
                    <a className="footer-links" href="https://twitter.com/HazarikaTanveer" target="_blank" rel="noreferrer"><i
                        className="fab fa-twitter fa-lg social-icn"></i></a>
                </li>

                <li>
                    <a className="footer-links" href="https://tanveerswebsite.netlify.app/" target="_blank" rel="noreferrer"><i
                        className="fas fa-globe fa-lg social-icn"></i></a>
                </li>
            </ul>
        </footer>
    )
    // <!-- Footer Ends-->
}

export { Footer }