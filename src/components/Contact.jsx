import '../styles/componentStyles/Contact.css';
import location from '../imgs/location.svg';
import phone from '../imgs/phone.svg';
import mail from '../imgs/mail.svg';
import twitter from '../imgs/twitter_blue.svg'
import facebook from '../imgs/facebook_blue.svg';
import linkedIn from '../imgs/linkedIn_blue.svg';
import Button from './Button';

const Contact = () => {
    return (
      <section className="contact container">
        <div className="heading">
            <h2>Contact Us</h2>
            <h4>Most calendars are designed for teams. Slate is designed for freelancers</h4>
        </div>
        <form className="signup_form">
            <h3>Contact Us</h3>
            <input placeholder="Your Name"/>
            <input placeholder="Your Email" />
            <textarea placeholder="Your Message" />
            <Button text="Send"/>
        </form>
        <div className="details">
            <div className='info'>
                <span className="data">
                    <img alt="Location" src={location} />
                    <address>6386 Spring St undefined Anchorage, Georgia 12473 United States</address>
                </span>
                <span className="data">
                    <img alt="Phone" src={phone} />
                    <address>(843) 555-0130</address>
                </span>
                <span className="data">
                    <img alt="Email" src={mail} />
                    <address>willie.jennings@example.com</address>
                </span>
            </div>
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe title="embedded map" id="gmap_canvas" src="https://maps.google.com/maps?q=San%20Francisco%20City%20Hall&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no"></iframe>
                    <br />
                    <a href="https://www.embedgooglemap.net">
                    </a>
                </div>
            </div>
            <div className="social">
                <a href="/#">
                    <img alt="Twitter" src={twitter}/>
                </a>
                <a href="/#">
                    <img alt="Facebook" src={facebook}/>
                </a>
                <a href="/#">
                    <img alt="LinkedIn" src={linkedIn}/>
                </a>
            </div>
        </div>
      </section>
    );
}

export default Contact;