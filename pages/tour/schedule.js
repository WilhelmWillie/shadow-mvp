import '../../styles/stylesheet.scss'

import Link from 'next/link'

const Schedule = () => (
  <section className="hero is-fullheight">
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title">
          Schedule a Date
        </h1>

        <Link href="/tour/host"><button className="button is-black">Select a Host</button></Link>
      </div>
    </div>
  </section>
)

export default Schedule
