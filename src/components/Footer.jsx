import '../styles/componentStyles/Footer.css';
import location from '../imgs/location_white.svg';
import phone from '../imgs/phone_white.svg';
import twitter from '../imgs/twitter.svg';
import facebook from '../imgs/facebook.svg';
import linkedIn from '../imgs/linkedIn.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_content">
                <div className="footer_links">
                    <h3 className="link_heading">Pages</h3>
                    <ul>
                        <li>
                            <a href="/#">Home</a>
                        </li>
                        <li>
                            <a href="/#">Product</a>
                        </li>
                        <li>
                            <a href="/#">Pricing</a>
                        </li>
                        <li>
                            <a href="/#">About</a>
                        </li>
                        <li>
                            <a href="/#">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="footer_links">
                    <h3 className="link_heading">Tomothy</h3>
                    <ul>
                        <li>
                            <a href="/#">Eleanor Edwards</a>
                        </li>
                        <li>
                            <a href="/#">Ted Robertson</a>
                        </li>
                        <li>
                            <a href="/#">Annette Russell</a>
                        </li>
                        <li>
                            <a href="/#">Jennie Mckinney</a>
                        </li>
                        <li>
                            <a href="/#">Gloria Richards</a>
                        </li>
                    </ul>
                </div>
                <div className="footer_links">
                    <h3 className="link_heading">Jane Black</h3>
                    <ul>
                        <li>
                            <a href="/#">Philip Jones</a>
                        </li>
                        <li>
                            <a href="/#">Product</a>
                        </li>
                        <li>
                            <a href="/#">Colleen Russell</a>
                        </li>
                        <li>
                            <a href="/#">Marvin Hawkins</a>
                        </li>
                        <li>
                            <a href="/#">Bruce Simmmons</a>
                        </li>
                    </ul>
                </div>
                <div className="info-socials">
                    <div className="info">
                        <img alt="Location" src={location}/>
                        <address>7480 Mockingbird Hill undefined</address>
                    </div>
                    <div className="info">
                        <img alt="Phone" src={phone}/>
                        <address>(239) 555-0108</address>
                    </div>
                    <div className="socials">
                        <a href="/#">
                            <img alt="Twitter" src={twitter} />
                        </a>
                        <a href="/#">
                            <img alt="Facebook" src={facebook} />
                        </a>
                        <a href="/#">
                            <img alt="LinkedIn" src={linkedIn} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;