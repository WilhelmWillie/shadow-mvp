import '../styles/navbar.scss'

import Link from 'next/link'

const NavBar = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="/static/shadow.png" alt="Shadow"/>
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <Link href="/about">About</Link>
          </div>

          <div className="navbar-item">
            <Link href="/host"><button className="button is-dark">Become a Host</button></Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default NavBar
