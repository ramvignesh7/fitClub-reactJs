import './Header.css';
import logo from '../../assets/logo.png';
import bars from '../../assets/bars.png';
import { useState } from 'react';
import { Link } from 'react-scroll';
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const onToggleMenu = () => {
    toggle ? setToggle(false) : setToggle(true);
  }
  const hideMenu = () => {
    setToggle(false);
  }
  return (
    <div className='header'>
      <img src={logo} className='logo' />
      <ul className={`headerMenu ${toggle ? "" : "headerMenuHide"}`}>
        <li><Link onClick={hideMenu} to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link onClick={hideMenu} to='programs' smooth={true} offset={-20} duration={500}>Programs</Link></li>
        <li><Link onClick={hideMenu} to='reason' smooth={true} offset={-20} duration={500}>Why us</Link></li>
        <li><Link onClick={hideMenu} to='plansContainer' smooth={true} offset={0} duration={500}>Plans</Link></li>
        <li><Link onClick={hideMenu} to='testimonial' smooth={true} offset={-20} duration={500}>Testimonials</Link></li>
      </ul>
      <div className='bars'>
        <img src={bars} className='barsImg' onClick={onToggleMenu} />
      </div>
    </div>
  )
}

export default Header;
