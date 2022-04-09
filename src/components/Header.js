import { useState } from "react";
import {StyledHeader} from "../styles/Header.styled";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(state => !state)
  }
  return (
    <StyledHeader>
      <nav>
        <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="" />
        <div className="hamburger" onClick={handleMenu}>
          <div className="top"></div>
          <div className="mid"></div>
          <div className="bottom"></div>
        </div>
        <div className={`menu ${showMenu && 'show-menu'}`}>
            <ul className="details">
              <li>Features</li>
              <li>Pricing</li>
              <li>Resources</li>
            </ul>
            <ul className="user-action">
              <li>Login</li>
              <li className="btn-sec">Sign Up</li>
            </ul>
        </div>
      </nav>
      <div className="illustration-container">
        <div className="img-container">
          <img src={`${process.env.PUBLIC_URL}/images/illustration-working.svg`} alt="" />
        </div>
        <div className="get-started">
          <h1>More than just shorter links</h1>
          <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
          <button className="btn-sec">Get Started</button>
        </div>
      </div>
    </StyledHeader>
  )
}

export default Header;