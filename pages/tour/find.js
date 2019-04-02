import '../../styles/stylesheet.scss'

import Link from 'next/link'

import Head from '../../components/head'
import NavBar from '../../components/navbar'
import Footer from '../../components/footer'

const Find = () => (
  <>
    <Head title="Shadow - Find Your School" />
    <NavBar />

    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <img src="/static/school.svg" />
          </div>

          <div className="column is-three-fifths has-text-centered">
            <h1 className="title">
              Find Your School
            </h1>
            <h2 className="subtitle">
              Select the school you're interested in visiting.
            </h2>

            <div className="select">
              <select>
                <option value="usc">University of Southern California</option>
                <option value="unavailable">UCLA (Coming Soon)</option>
                <option value="unavailable">UCSD (Coming Soon)</option>
                <option value="unavailable">Stanford (Coming Soon)</option>
                <option value="unavailable">Berkeley (Coming Soon)</option>
              </select>
            </div>

            <br/><br/>

            <Link href="/tour/schedule"><button className="button is-black">Schedule a Date</button></Link>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </>
)

export default Find
