import '../styles/componentStyles/NavBar.css';
import logo from '../imgs/logo.svg';
import twitter from '../imgs/twitter.svg';
import facebook from '../imgs/facebook.svg';
import linkedIn from '../imgs/linkedIn.svg';
import menu from '../imgs/menu.svg';
import close from '../imgs/close.svg';

const NavBar = () => {

    const openMenu = () => {
        let nav = document.getElementById('nav');
        let background = document.getElementById('navMenuMobile_background');
        nav.classList.add('show');
        background.classList.add('show');
    }

    const closeMenu = () => {
        let nav = document.getElementById('nav');
        let background = document.getElementById('navMenuMobile_background');
        nav.classList.remove('show');
        background.classList.remove('show');
    }

    return(
        <nav className="navBar" id="nav">
            <ul className="nav_links">
                <li>
                    <a href='/#'>Home</a>
                </li>
                <li>
                    <a href='/#'>Product</a>
                </li>
                <li>
                    <a href='/#'>Pricing</a>
                </li>
                <li>
                    <a href='/#'>About</a>
                </li>
                <li>
                    <a href='/#'>Contact</a>
                </li>
            </ul>
            <img alt="Figma Land" src={logo} className="logo"/>
            <ul className="nav_social">
                <li>
                    <a href='/#'>
                        <img alt="Twitter" src={twitter} />
                    </a>
                </li>
                <li>
                    <a href='/#'>
                        <img alt="Facebook" src={facebook}/>
                    </a>
                </li>
                <li>
                    <a href='/#'>
                        <img alt="LinkedIn" src={linkedIn}/>
                    </a>
                </li>
            </ul>
            <button aria-label="Menu" className="menu" onClick={openMenu}>
                <img alt="Menu" src={menu}/>
            </button>
            <button aria-label="Close" className="menu_close" onClick={closeMenu}>
                <img alt="Close" src={close}/>
            </button>
        </nav>
    );
}

export default NavBar;