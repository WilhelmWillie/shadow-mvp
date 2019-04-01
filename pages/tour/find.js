import '../../styles/stylesheet.scss'

import Link from 'next/link'

const Find = () => (
  <section className="hero is-fullheight">
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title">
          Find Your School
        </h1>
        <h2 className="subtitle">
          Select the school(s) you're interested in.
        </h2>

        <div className="select">
          <select>
            <option value="usc">University of Southern California</option>
            <option value="ucla">University of California, Los Angeles</option>
            <option value="ucsd">University of California, San Diego</option>
            <option value="stanford">Stanford University</option>
            <option value="ucb">University of California, Berkeley</option>
          </select>
        </div>

        <br/><br/>

        <Link href="/tour/schedule"><button className="button is-black">Schedule a Date</button></Link>
      </div>
    </div>
  </section>
)

export default Find
