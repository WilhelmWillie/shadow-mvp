import '../../styles/stylesheet.scss'
import '../../styles/book.scss'

import Head from '../../components/head'
import NavBar from '../../components/navbar'

import Hosts from '../../data/hosts.json'

const Book = () => {
  const hostDetails = Hosts.map((host) => (
    <div className="column is-one-third" key={host.id}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="http://placehold.it/640x480" alt="Placeholder image" />
          </figure>
        </div>

        <div className="card-content">
          <p>
            <span className="icon">
              <i className="fas fa-user"></i>
            </span>
            {host.name}
          </p>

          <p>
            <span className="icon">
              <i className="fas fa-graduation-cap"></i>
            </span>
            {host.class}
          </p>

          <p>
            <span className="icon">
              <i className="fas fa-book"></i>
            </span>
            {host.major}
          </p>

          <p>
            <span className="icon">
              <i className="fas fa-home"></i>
            </span>
            {host.hometown}
          </p>
        </div>

        <footer className="card-footer">
          <a href="#" className="card-footer-item">Book Now</a>
        </footer>
      </div>
    </div>
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
