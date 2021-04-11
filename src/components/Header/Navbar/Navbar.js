import SearchIcon from "../../../assets/images/search.svg";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="container">
        <div className="navigation">
          <div className="navigation left">
            <h1>Rule of thumb.</h1>
          </div>

          <div className="navigation right">
            <Router>
              <div className="navigation right links">
                <nav>
                  <ul>
                    <li>
                      <Link to="/trials">Past Trials</Link>
                    </li>
                    <li>
                      <Link to="/how">How It Works</Link>
                    </li>
                    <div className="login-group">
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                      <span>/</span>
                      <li>
                        <Link to="/signup">Sign up</Link>
                      </li>
                    </div>

                    <li>
                    <Link to="/search"><img src={SearchIcon} alt="search" /></Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </Router>
          </div>
        </div>
      </div>
    </div>
  );
};
