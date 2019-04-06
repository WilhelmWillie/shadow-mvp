import '../styles/stylesheet.scss'
import '../styles/hostSignup.scss'

import Head from '../components/head'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

const HostSignup = () => (
  <>
    <Head title="Shadow - Become a Host" />

    <NavBar />

    <section className="hero is-primary is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <img src="/static/hero_img_c.svg" alt="Hosts" className="hero-img" />
            </div>

            <div className="column is-half">
              <h1 className="title">Become a Host</h1>
              <p className="subtitle">
                Join the team at Shadow and help show prospective students the real college experience. Set your own schedule, engage in personal conversations, and get paid for your time!
              </p>

              <form action="/host" data-netlify="true" name="host-signup">
                <div className="field">
                  <label className="label has-text-white">Name</label>
                  <input id="fullName" name="fullName" className="input" placeholder="Name"/>
                </div>

                <div className="field">
                  <label className="label has-text-white">E-Mail Address</label>
                  <input id="emailAddress" name="emailAddress" className="input" placeholder= "Email Address"/>
                </div>

                <div className="field">
                  <input type="submit" class="button is-dark" value="Sign Up!" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default HostSignup
