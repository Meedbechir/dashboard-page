
const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand fs-3" href="/">Architect</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Mega Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/produits">Settings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Projects</a>
            </li>
            <li className="nav-item ms-5">
              <a className="nav-link" href="/contact">Alina Mclourd</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
