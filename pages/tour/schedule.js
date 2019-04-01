import '../../styles/stylesheet.scss'

import Link from 'next/link'

import Head from '../../components/head'
import NavBar from '../../components/navbar'

const Schedule = () => (
  <>
    <Head title="Shadow - Schedule a Date" />
    <NavBar/>

    <div className="container has-text-centered">
      <h1 className="title">
        Schedule a Date
      </h1>

      <p>Date selection fields will go here later</p>

      <br/>

      <Link href="/tour/book"><button className="button is-black">Book a Host</button></Link>
    </div>
  </>
)

export default Schedule
