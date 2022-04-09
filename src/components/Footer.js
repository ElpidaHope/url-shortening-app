import { FooterStyle } from "../styles/Footer.style"

const Footer = () => {
  return (
    <FooterStyle>
      <div className="boost">
        <h1>Boost your links today</h1>
        <button>Get Started</button>
      </div>
      <footer>
        <img src={`${process.env.PUBLIC_URL}/images/logo-footer.svg`} alt="" />
        <div>

          <ul className="list">
            <li className="top-list">Features</li>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
          <ul className="list">
            <li className="top-list">Resources</li>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
          <ul className="list">
            <li className="top-list">Company</li>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
          </ul>

          <ul className="social-links">
            <li>
              <img src={`${process.env.PUBLIC_URL}/images/icon-facebook.svg`} alt="" />
            </li>
            <li>
              <img src={`${process.env.PUBLIC_URL}/images/icon-twitter.svg`} alt="" />
            </li>
            <li>
              <img src={`${process.env.PUBLIC_URL}/images/icon-pinterest.svg`} alt="" />
            </li>
            <li>
              <img src={`${process.env.PUBLIC_URL}/images/icon-instagram.svg`} alt="" />
            </li>
          </ul>
        </div>
      </footer>
    </FooterStyle>
  )
}

export default Footer