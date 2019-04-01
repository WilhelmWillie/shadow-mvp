import '../../styles/stylesheet.scss'
import '../../styles/book.scss'

import Head from '../../components/head'
import NavBar from '../../components/navbar'

import Hosts from '../../data/hosts.json'
import HostDetails from '../../components/hostDetails'

const Book = () => {
  const hostDetails = Hosts.map((host) => (
    <HostDetails host={host} />
  ))
  return (
    <>
      <Head title="Shadow - Select a Host" />
      <NavBar/>

      <div className="container">
        <div className="card">
          <div className="card-content tour-details">
            <h1 className="title">Your Tour</h1>
            <h2 className="subtitle">Monday, April 28, 2019 at 2:00 PM</h2>
          </div>
        </div>

        <div className="columns is-multiline">
          {hostDetails}
        </div>
      </div>
    </>
  )
}

export default Book
