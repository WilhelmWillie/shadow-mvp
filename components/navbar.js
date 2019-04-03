import '../styles/navbar.scss'

import Link from 'next/link'

const NavBar = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="/static/shadow.png" alt="Shadow"/>
        </a>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <Link href="#">About</Link>
          </div>

          <div className="navbar-item">
            <Link href="#"><button className="button is-dark">Host a Tour</button></Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default NavBar
