import '../styles/stylesheet.scss'

import Head from '../components/head'
import NavBar from '../components/navbar'
import Host from '../components/host'
import Footer from '../components/footer'

const Details = () => (
  <div>
    <Head title="Shadow - Experience what it's really like to be a college student" />

    <NavBar />

    <section className="section">
      <div className="container">
        <Host />
      </div>
    </section>

    <Footer />
  </div>
)

export default Details
