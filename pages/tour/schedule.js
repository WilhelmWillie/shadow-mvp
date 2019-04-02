import '../../styles/stylesheet.scss'

import Link from 'next/link'

import Head from '../../components/head'
import NavBar from '../../components/navbar'
import Footer from '../../components/footer'

const Schedule = () => (
  <>
    <Head title="Shadow - Schedule a Date" />
    <NavBar/>

    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <img src="/static/schedule.svg" />
          </div>

          <div className="column is-three-fifths has-text-centered">
            <h1 className="title">
              Schedule a Date
            </h1>

            <p>Date selection fields will go here later</p>

            <br/>

            <Link href="/tour/book"><button className="button is-black">Book a Host</button></Link>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </>
)

export default Schedule
