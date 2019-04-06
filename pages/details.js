import '../styles/stylesheet.scss'
import '../styles/host.scss'
import '../styles/utility.scss'

import Head from '../components/head'
import NavBar from '../components/navbar'
import Host from '../components/host'
import Footer from '../components/footer'

import HostData from '../data/hosts.json'

const Details = (props) => {
  const host = HostData[props.url.query.host]

  return (
    <div>
      <Head title="Shadow - Experience what it's really like to be a college student" />

      <NavBar />

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="host has-text-centered">
                <figure className="image is-4by3 host-photo width-80">
                  <img src={`/static/hosts/${host.id}/a.jpg`} />
                </figure>

                <br/>

                <h1 className="title">{host.name}</h1>

                <p className="has-text-left">{host.bio}</p>
              </div>
            </div>

            <div className="column">
              <h2 className="title">You've selected {host.nickname}!</h2>

              <p className="is-size-5"><b>Great choice.</b> Next step is to enter your name, e-mail, and info about yourself. We'll get in contact with your selected host who will reach out to you to schedule a tour and learn more about you!</p>

              <hr/>

              <form method="POST" data-netlify="true" name="tour-signup">
                <div className="field">
                  <label className="label">Name</label>
                  <input id="fullName" name="fullName" className="input" placeholder="Name"/>
                </div>

                <div className="field">
                  <label className="label">E-Mail Address</label>
                  <input id="emailAddress" name="emailAddress" className="input" placeholder= "Email Address"/>
                </div>

                <div className="field">
                  <label className="label">About You</label>
                  <textarea id="aboutYou" name="aboutYou" className="textarea" rows="3" placeholder="Tell us about yourself!"></textarea>
                </div>

                <div className="field">
                  <input type="submit" class="button is-primary" value="Contact Host!" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Details