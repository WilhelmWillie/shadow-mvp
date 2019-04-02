import { Component } from 'react'

import '../../styles/stylesheet.scss'
import '../../styles/book.scss'

import Head from '../../components/head'
import NavBar from '../../components/navbar'

import Hosts from '../../data/hosts.json'

import HostDetails from '../../components/hostDetails'
import Modal from '../../components/modal'

class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalActive: false,
      selectedHost: Hosts[0]
    }
  }

  selectHost = (host) => {
    this.setState({
      modalActive: true,
      selectedHost: host
    })
  }

  toggleModal = () => {
    this.setState({
      modalActive: !this.state.modalActive
    })
  }

  render() {
    const hostDetails = Hosts.map((host) => (
      <HostDetails host={host} selectHost={this.selectHost} />
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

          <div className="filter columns is-vcentered">
            <div className="field column">
              <label className="label">Major</label>

              <div className="select">
                <select>
                  <option>Filter by Major</option>
                  <option>Business Administration</option>
                  <option>Computer Science</option>
                  <option>Art and Design</option>
                </select>
              </div>
            </div>

            <div className="field column">
              <label className="label">Class</label>

              <div className="select">
                <select>
                  <option>Filter by Class</option>
                  <option>Senior</option>
                  <option>Junior</option>
                  <option>Sophomore</option>
                </select>
              </div>
            </div>

            <div className="field column">
              <div className="control">
                <label className="checkbox">
                  <input type="checkbox"/> Greek
                </label>
              </div>
            </div>

            <div className="field column">
              <div className="control">
                <label className="checkbox">
                  <input type="checkbox"/> International
                </label>
              </div>
            </div>
          </div>

          <div className="columns is-multiline">
            {hostDetails}
          </div>
        </div>

        <Modal
          isActive={this.state.modalActive}
          toggleModal={this.toggleModal}
          selectedHost={this.state.selectedHost}
        />
      </>
    )
  }
}

export default Book
