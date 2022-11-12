import '../styles/componentStyles/Header.css';
import CTA from './CTA';
import NavBar from './NavBar';

const Header = () => {

    return(
      <header className="header">
        <span className="background"/>
        <div className="container">
          <NavBar />
          <CTA />
        </div>
      </header>
    );
}

export default Header;