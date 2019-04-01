import '../styles/stylesheet.scss'

import Link from 'next/link'

const Index = () => (
  <div>
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://live.hacksc.com">
            <img src={logo} width="112"/>
          </a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <a className="is-primary">
                <strong>Live</strong>
              </a>
            </div>

            <div className="navbar-item">
              <a>
                API Directory
              </a>
            </div>

            <div className="navbar-item">
              <a>
                Resources
              </a>
            </div>

            <div className="navbar-item">
              <a>
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
)

export default Index
