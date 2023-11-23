import { faCartShopping, faMugSaucer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
    return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
            <div className="logo col-4">
                <FontAwesomeIcon icon={faMugSaucer} className="icon" />
                <h2>Coffee<span>Hub</span></h2>
            </div>
            <div className="col-8">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="content collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav links">
                        <li className="nav-item active">Home</li>
                        <li className="nav-item">Store</li>
                        <li className="nav-item">About</li>
                        <li className="nav-item">Support</li>
                    </ul>
                    <ul className="navbar-nav user-side">
                        <li className="nav-item active btn">Login</li>
                        <li className="nav-item btn">Register</li>
                        <span className="icon position-relative">
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">2</span>
                        </span>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    );
}

export default Navbar;