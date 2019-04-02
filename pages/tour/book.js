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
