import '../../styles/stylesheet.scss'

import { Component } from 'react'

import Link from 'next/link'

import Head from '../../components/head'
import NavBar from '../../components/navbar'
import Footer from '../../components/footer'

class Find extends Component {
  constructor(props) {
    super(props)

    this.state = {
      school: 'usc'
    }
  }

  selectSchool = (e) => {
    this.setState({
      school: e.target.value
    })
  }

  render() {
    const error = (this.state.school !== 'usc') ? (
      <div className="notification is-warning">
        Currently, Shadow is not available at your selected school. However, we have plans to expand to other schools in California! Check back soon.
      </div>
    ) : (undefined)

    const button = (this.state.school === 'usc') ? (
      <Link href="/tour/schedule">
        <button className="button is-black">Schedule a Date</button>
      </Link>
    ) : (
      <button className="button is-disabled" disabled>Schedule a Date</button>
    )

    return (
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
                  Select the school you're interested in visiting
                </h2>

                <div className="field">
                  <div className="select">
                    <select value={this.state.school} onChange={this.selectSchool}>
                      <option value="usc">University of Southern California</option>
                      <option value="ucla">UCLA (Coming Soon)</option>
                      <option value="stanford">Stanford (Coming Soon)</option>
                      <option value="berkeley">Berkeley (Coming Soon)</option>
                    </select>
                  </div>
                </div>

                <div className="field">
                  {button}
                </div>

                {error}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
    )
  }
}

export default Find
