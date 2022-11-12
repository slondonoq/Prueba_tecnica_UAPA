import '../styles/componentStyles/NavBar.css';
import logo from '../imgs/logo.svg';
import twitter from '../imgs/twitter.svg';
import facebook from '../imgs/facebook.svg';
import linkedIn from '../imgs/linkedIn.svg';

const NavBar = () => {
    return(
        <nav className="navBar">
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
        </nav>
    );
}

export default NavBar;