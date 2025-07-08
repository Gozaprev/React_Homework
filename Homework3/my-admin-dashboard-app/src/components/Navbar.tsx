import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-brand">Webstore Admin</Link>
            <Link to="/products/new" className="nav-link">Add Product</Link>
        </nav>
    );
}
