import { Link, useLocation, useNavigate } from 'react-router-dom'
import './footer.css'

const portfolioLinks = [
{ label: 'Portraits', path: '/portfolio?category=portraits' },
{ label: 'Pre Weddings', path: '/portfolio?category=pre' },
{ label: 'Tamil Weddings', path: '/portfolio?category=tamil' },
{ label: 'Telugu Weddings', path: '/portfolio?category=telugu' },
{ label: 'Brahmin Weddings', path: '/portfolio?category=brahmin' },
{ label: 'Christian Weddings', path: '/portfolio?category=christian' },
{ label: 'Muslim Weddings', path: '/portfolio?category=muslim' },
{ label: 'Engagement', path: '/portfolio?category=engage' },
]

export default function Footer() {
const location = useLocation()
const navigate = useNavigate()

const handleSectionClick = (e, targetId) => {
e.preventDefault()


if (location.pathname !== '/') {
  navigate('/')

  setTimeout(() => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, 100)
} else {
  const element = document.getElementById(targetId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}


}

return ( <footer className="footer"> <div className="footer__top">


  {/* Logo */}

<Link
  to="/"
  className="footer__logo"
  aria-label="Srimathi Photography — Home"
>
  <span className="footer__logo-text">
    AJ
    <small>PHOTOGRAPHY</small>
  </span>
</Link>


    {/* Navigation */}
    <nav className="footer__nav" aria-label="Footer navigation">

      <ul className="footer__nav-col">
        <li>
          <Link to="/" className="footer__link">
            Home
          </Link>
        </li>

        <li>
          <a
            href="#about"
            className="footer__link"
            onClick={(e) => handleSectionClick(e, 'about')}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#gallery"
            className="footer__link"
            onClick={(e) => handleSectionClick(e, 'gallery')}
          >
            Wedding Films
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="footer__link"
            onClick={(e) => handleSectionClick(e, 'contact')}
          >
            Contact
          </a>
        </li>

        <li>
          <Link to="/privacy-policy" className="footer__link">
            Privacy Policy
          </Link>
        </li>
      </ul>

      <ul className="footer__nav-col">
        {portfolioLinks.map(({ label, path }) => (
          <li key={label}>
            <Link to={path} className="footer__link">
              {label}
            </Link>
          </li>
        ))}
      </ul>

    </nav>

    {/* Social + Contact */}
    <div className="footer__social">
      <p className="footer__social-label">Connect with us</p>

      <div className="footer__social-icons">

        {/* Facebook */}
        <a
          href="https://www.facebook.com/ajphotographyMALAYSIA"
          className="footer__social-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/aj_photography_malaysia/"
          className="footer__social-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>

        {/* YouTube */}
       
      </div>

      <a href="tel:+60176212001" className="footer__phone">
        +60 17-621 2001
      </a>

      <a
        href="https://wa.me/60176212001"
        className="footer__whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp us"
      >
        WhatsApp
      </a>
    </div>

  </div>

  <div className="footer__bottom">
    <p className="footer__copyright">
      © 2026 AJ PHOTOGRAPHY
    </p>
  </div>
</footer>


)
}
