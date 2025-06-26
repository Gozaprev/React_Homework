import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    return (
        <nav>
            <div className="nav-links">
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                    Home
                </Link>
                <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
                    About
                </Link>
            </div>
            <span className="title">My Personal Blog</span>
        </nav>
    );
};

export default Navbar;



// With Tailwind

// import { Link, useLocation } from "react-router-dom";

// const Navbar = () => {
//     const location = useLocation();
//     return (
//         <nav className="bg-blue-600 px-6 py-4 flex items-center justify-between shadow">
//             <div className="flex items-center gap-6">
//                 <Link
//                     to="/"
//                     className={`text-white font-semibold text-lg hover:underline ${location.pathname === "/" ? "underline" : ""
//                         }`}
//                 >
//                     Home
//                 </Link>
//                 <Link
//                     to="/about"
//                     className={`text-white font-semibold text-lg hover:underline ${location.pathname === "/about" ? "underline" : ""
//                         }`}
//                 >
//                     About
//                 </Link>
//             </div>
//             <span className="text-blue-200 font-mono">My Personal Blog</span>
//         </nav>
//     );
// };

// export default Navbar;
