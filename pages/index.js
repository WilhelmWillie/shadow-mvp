import '../styles/stylesheet.scss'

import Head from '../components/head'
import Hero from '../components/hero'
import NavBar from '../components/navbar'

const Index = () => (
  <div>
    <Head title="Shadow - Experience what it is really like to be a college student" />

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
        <h2 className="title has-text-centered"><b>Featured Hosts</b></h2>

        <div className="columns">
          <div className="column">
            Featured host goes here
          </div>

          <div className="column">
            Featured host goes here
          </div>
        </div>
      </div>
    </section>

    <footer className="footer">
      <div className="container has-text-centered">
        <p>Shadow Tours &copy; 2019.</p>
      </div>
    </footer>
  </div>
)

export default Index
