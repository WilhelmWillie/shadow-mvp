import '../styles/stylesheet.scss'
import '../styles/utility.scss'

import Head from '../components/head'
import Hero from '../components/hero'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

import Link from 'next/link'

const About = () => (
  <div>
    <Head title="Shadow - About Us" />

    <NavBar />

    <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-two-thirds">
            <h1 className="title is-size-2">About Shadow</h1>

            <p className="is-size-5">College campus tours are impersonal, general, cookie-cutter, and don’t provide prospective students with a valuable experience they can use to make their best college decision. Shadow fixes this by allowing students to go on personalized, one-on-one campus tours with actual college students as their guide. Shadow tours are not affiliated with the university in any way so you know you will get an unbiased, transparent, and truly valuable campus tour experience.</p>
          </div>
        </div>

        <div className="columns is-centered">
          <div className="column is-two-thirds">
            <h1 className="title is-size-3">For Prospective Students</h1>
            <p className="is-size-5">Select “Take a Tour” and select your university and when you want to go on your tour. View a selection of actual students who are available to give you a personalized campus tour. Once you find the student you want to be your guide, book the tour.</p>

            <br/>

            <h2 className="title is-size-3">For Hosts</h2>
            <p className="is-size-5">Select “Host a Tour” and enter your email. We’ll keep you updated on how you can make great money in your free time by showing off your school.</p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
)

export default About
