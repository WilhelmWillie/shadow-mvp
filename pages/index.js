import '../styles/stylesheet.scss'
import '../styles/utility.scss'

import Head from '../components/head'
import Hero from '../components/hero'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

import Link from 'next/link'

const Index = () => (
  <div>
    <Head title="Shadow - Experience what it's really like to be a college student" />

    <Hero />

    <section className="section has-background-dark">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h3 className="subtitle has-text-white"><b>Real students. Real perspective</b></h3>
            <p className="has-text-light">Get past the cookie cutter, filtered perspective of campus tour guides. Our student hosts can provide more real perspectives on the school and can make sure you see what you really need to see as a prospective student</p>
          </div>

          <div className="column">
            <h3 className="subtitle has-text-white"><b>Personalized, just for you</b></h3>
            <p className="has-text-light">Match with hosts who can give you a better perspective in-line with what you want out of college. Interested in Greek Life and want to study Biology? We can match you up with a host who matches that.</p>
          </div>

          <div className="column">
            <h3 className="subtitle has-text-white"><b>Credible students</b></h3>
            <p className="has-text-light">Student hosts are reviewed and verified before they can be listed on our platform. We make sure to provide you with quality hosts that can provide you the best experience possible.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h3 className="title has-text-centered">How Shadow Works</h3>

        <br/>

        <div className="columns is-centered">
          <div className="column is-two-fifths has-text-centered">
            <img src="/static/select.svg" className="width-80"/>
          </div>

          <div className="column is-two-fifths">
            <h4 className="title is-size-4">1) Select a host</h4>

            <p className="is-size-5">Browse through our selection of qualified hosts and select one that best matches your interests. Our hosts cover a variety of different majors and backgrounds and we're continuously expanding our selection to ensure you can find a perfect match.</p>
          </div>
        </div>

        <br/>

        <div className="columns is-centered reverse-row-order">
          <div className="column is-two-fifths has-text-centered">
            <img src="/static/schedule.svg" className="width-80"/>
          </div>

          <div className="column is-two-fifths">
            <h4 className="title is-size-4">2) Schedule a tour</h4>

            <p className="is-size-5">After submitting your info, your selected host will reach out and schedule a tour. Let your host know what you're interested in and where your priorities lie. Behind the scenes, your host will work on a personalized and custom itinerary to ensure the best experience possible.</p>
          </div>
        </div>

        <br/>

        <div className="columns is-centered">
          <div className="column is-two-fifths has-text-centered">
            <img src="/static/school.svg" className="width-80"/>
          </div>

          <div className="column is-two-fifths">
            <h4 className="title is-size-4">3) Visit campus</h4>

            <p className="is-size-5">Once a date is set, meet up with your host on campus and enjoy your campus experience! Ask questions and engage with your host to get the most out of your college tour</p>
          </div>
        </div>

        <hr/>

        <br/>
        <div className="columns">
          <div className="column has-text-centered">
            <p className="is-size-4"><strong>Interested? </strong> Browse through our hosts now!</p>

            <br/>

            <Link href="/book">
              <button className="button is-large is-primary">Book a Tour</button>
            </Link>
          </div>
        </div>
        <br/>

      </div>
    </section>

    <Footer />
  </div>
)

export default Index
