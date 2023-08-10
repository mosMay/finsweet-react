import './Navbar.css'
import logo from '../Images/navbar-logo.png'


const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="navbar logo"/>
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">About us</a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Features</a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Pricing</a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">FAQ</a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Blog</a>
            </li>

          </ul>

          <button className="navbar-btn">Contact us</button>

        </div>
      </div>
    </nav>

  </div>
  )
}

export default Navbar