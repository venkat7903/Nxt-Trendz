// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <>
    <nav className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="nav-logo"
      />
      <div className="nav-options-container">
        <ul className="nav-links-desktop-container">
          <Link to="/" className="nav-link">
            <li className="nav-link-item">Home</li>
          </Link>
          <Link to="/products" className="nav-link">
            <li className="nav-link-item">Products</li>
          </Link>
          <Link to="/cart" className="nav-link">
            <li className="nav-link-item">Cart</li>
          </Link>
        </ul>
        <button type="button" className="desktop-logout-btn">
          Logout
        </button>
        <button type="button" className="mobile-logout-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="logout"
            className="logout-img"
          />
        </button>
      </div>
    </nav>
    <ul className="nav-links-mobile-container">
      <Link to="/" className="nav-link">
        <li className="nav-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="nav-img"
          />
        </li>
      </Link>
      <Link to="/products" className="nav-link">
        <li className="nav-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="nav-img"
          />
        </li>
      </Link>
      <Link to="/cart" className="nav-link">
        <li className="nav-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="nav-img"
          />
        </li>
      </Link>
    </ul>
  </>
)

export default Header
