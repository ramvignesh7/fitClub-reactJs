import './Footer.css';
import github from '../../assets/github.png';
import instagram from '../../assets/instagram.png';
import linkedIn from '../../assets/linkedin.png';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <div className='footerContainer'>
            <hr />
            <div className="footer">
                <div className="socialLinks">
                    <img src={github} />
                    <img src={instagram} />
                    <img src={linkedIn} />
                </div>
                <div className="logoF">
                    <img src={logo} />
                </div>
            </div>
            <div className="blur blurFl"></div>
            <div className="blur blurFR"></div>
        </div>
    )
}

export default Footer
