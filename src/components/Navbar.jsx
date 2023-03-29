import logo from '../images/logo.png';
import '../styles/Navbar.css';
import About from './About';
import Installation from './Installation';
import Contact from './Contact';
import App from './App'

function Navbar() {
    return (
        <div id="footer" >
            <div>
            <a href={<App />}>
            <img src={logo} id="logo" alt="logo"/>
            </a>
            </div>
            
            <div tabIndex="0" className="menu">
                <h1 id="explore" className="flex flex-wrap p-4 mt-4 rounded-full y">Explore</h1>
                <div className="menu-dropdown">
                    <a href="./About">About</a>
                    <a href={<Installation />}>Installation</a>
                    <a href={<Contact />}>Contact</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;