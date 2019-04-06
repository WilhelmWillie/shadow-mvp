import '../styles/stylesheet.scss'

import Head from '../components/head'
import NavBar from '../components/navbar'
import Host from '../components/host'
import Footer from '../components/footer'

import HostData from '../data/hosts.json'

const Book = () => {
  const hosts = Object.keys(HostData).map(function(key, index) {
    const host = HostData[key]

    return (
      <Host host={host} key={host} />
    )
  });

  return (
    <div>
      <Head title="Shadow - Experience what it's really like to be a college student" />

      <NavBar />

      <section className="section">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <img src="/static/hero_img_c.svg" alt="Hosts" />
            </div>

            <div className="column is-three-fifths">
              <h1 className="title">Meet Our Hosts</h1>
              <p className="subtitle">
                Preview the college experience by meeting one of our wonderful hosts. After matching with a host, they'll reach out to you to
                design a personalized and custom experience that fits your interests and desires.
              </p>
            </div>
          </div>

          <hr/>

          <div className="notification is-success">
            <strong>Limited Time Offer! </strong>


            For a limited time, book one of our hosts for a 100% discount. Book a personalized, custom tour now!
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          {hosts}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Book
