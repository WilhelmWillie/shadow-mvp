import Link from 'next/link'

const Hero = () => (
  <section className="hero is-fullheight">
  <div className="hero-head">
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo"/>
          </a>
          <span className="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item is-active">
              About
            </a>
            <a className="navbar-item">
              Host a Tour
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>

    <div className="hero-body">
      <div className="container">
        <h1 className="title has-text-centered">
          Shadow
        </h1>
        <h2 className="subtitle has-text-centered">
          Experience what it's really like to be a college student.
        </h2>
      </div>
    </div>
  </section>
)

export default Hero
