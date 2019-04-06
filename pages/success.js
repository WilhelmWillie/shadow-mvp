import '../styles/stylesheet.scss'
import '../styles/utility.scss'

import Head from '../components/head'
import Hero from '../components/hero'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

import Link from 'next/link'

const About = () => (
  <div>
    <Head title="Shadow - Success" />

    <NavBar />

    <section className="hero is-fullheight-with-navbar is-success">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-two-thirds has-text-centered">
              <h1 className="title is-size-2">Success!</h1>

              <p className="is-size-4">We received your information. We'll be in contact with you soon :)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-foot">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half has-text-centered">
              <p className="is-size-5" style={{marginTop: '1rem', marginBottom: '1rem'}}>Shadow &copy; 2019</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default About
