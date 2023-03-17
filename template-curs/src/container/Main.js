import { Link, Outlet, useLocation } from "react-router-dom";
import "./style.css";

const Main = () => {
    const {pathname} = useLocation();
    console.log(pathname)
    return (
        <div>
            <div className="header">
                <Link to="/Home" className="link">Home</Link>
                <Link to="/About" className="link">AboutUs</Link>
                <Link to="/Pages" className="link">Pages</Link>
                <Link to="/Blog" className="link">Blog</Link>
                <Link to="/Contact" className="link">Contact</Link>
            </div>
            <div className="main">
                {pathname !== "/" ? <div className="pagePath"><Link to="/Home"  className="homeLink">Home</Link>
                <span className="currentPath">{pathname}</span></div> : ''}
                <Outlet />
            </div>
            <div className="footer">
                footer
            </div>
        </div>
    );
}

export default Main;