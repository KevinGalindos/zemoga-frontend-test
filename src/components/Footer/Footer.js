import { BrowserRouter as Router, Link } from "react-router-dom";

import Facebook from "../../assets/images/facebook.svg";
import Twitter from "../../assets/images/twitter.svg";

export const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="Footer content">
          <div className="Footer content_links">
            <Router>
              <div className="left">
                <nav>
                  <ul>
                    <li>
                      <Link to="/terms">Terms and Conditions</Link>
                    </li>
                    <li>
                      <Link to="/policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </Router>
          </div>

          <div className="Footer content_social-media">
            <div className="icon-group">
              <p>Follow us</p>
              <a href="Facebook">
                <img src={Facebook} alt="Facebook" />
              </a>
              <a href="Twitter">
                <img src={Twitter} alt="Twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
