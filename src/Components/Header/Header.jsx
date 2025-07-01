import { useDispatch } from "react-redux";
import { searchContact } from "../../redux/actions";
import { Link } from "react-router";
import './Header.scss'

export default function Header() {
  const dispatch = useDispatch();

  return (
    <header className="container rounded shadow-lg mb-3 mt-3 ">
      <div className="row">
        <div className="col-12">
          <nav className="navbar">
            <div className="container-fluid">
              <div className="navbar-brand">
                <Link className="navbar-brand" to="/">
                  Contact List
                </Link>
                <Link className="navbar-brand" to="/add-contact">
                  Add Contact
                </Link>
                <Link className="navbar-brand" to="/contact-statuss">
                  Statuss
                </Link>
              </div>

              <form className="d-flex" role="search">
                <input
                  onChange={(e) => dispatch(searchContact(e.target.value))}
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
