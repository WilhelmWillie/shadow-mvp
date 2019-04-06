import '../styles/hero.scss'

import Link from 'next/link'

import NavBar from './navbar'
import HeroImg from './heroImg'

const Hero = () => (
  <section className="hero">
    <div className="hero-head">
      <NavBar />
    </div>

    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column">
            <h1 className="title">
              Real students. Real voices. Real experiences.
            </h1>
            <h2 className="subtitle">
              Experience what it's really like to be a college student.
            </h2>

            <Link href="/book">
              <button className="button is-primary is-medium">Book a Tour</button>
            </Link>
          </div>

          <HeroImg />
        </div>
      </div>
    </div>
  </section>
)

export default Hero
