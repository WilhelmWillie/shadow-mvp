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
      selectedHost: Hosts[0],
      filter: {
        major: undefined,
        class: undefined,
        onlyGreek: 0,
        onlyInternational: 0
      }
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

  filterMajor = (event) => {
    const value = event.target.value
    const filter = this.state.filter

    if (value === '') {
      filter.major = undefined;
    } else {
      filter.major = value;
    }

    this.setState({
      filter
    })
  }

  filterClass = (event) => {
    const value = event.target.value
    const filter = this.state.filter

    if (value === '') {
      filter.class = undefined;
    } else {
      filter.class = value;
    }

    this.setState({
      filter
    })
  }

  toggleGreek = () => {
    const filter = this.state.filter
    filter.onlyGreek = !filter.onlyGreek
    this.setState({filter})
  }

  toggleInternational = () => {
    const filter = this.state.filter
    filter.onlyInternational = !filter.onlyInternational
    this.setState({filter})
  }

  resetFilters = () => {
    this.setState({
      filter: {
        major: undefined,
        class: undefined,
        onlyGreek: 0,
        onlyInternational: 0
      }
    })
  }

  render() {
    const filter = this.state.filter
    const filteredHosts = Hosts.filter((host) => {
      let majorMatch = true
      if (filter.major !== undefined) {
        majorMatch = (host.major === filter.major)
      }

      let classMatch = true
      if (filter.class !== undefined) {
        classMatch = (host.class === filter.class)
      }

      let greekMatch = true
      if (filter.onlyGreek) {
        greekMatch = (host.details.greek) ?  (1) : (0)
      }

      let internationalMatch = true
      if (filter.onlyInternational) {
        internationalMatch = (host.details.international) ?  (1) : (0)
      }

      return (majorMatch && classMatch && greekMatch && internationalMatch)
    })

    const hostDetails = filteredHosts.map((host) => (
      <HostDetails host={host} selectHost={this.selectHost} />
    ))

    const greekFilterClass = (this.state.filter.onlyGreek) ? ('button is-success') : ('button')
    const internationalFilterClass = this.state.filter.onlyInternational ? ('button is-success') : ('button')
    const resetFilterClass = (
      this.state.filter.major !== undefined ||
      this.state.filter.class !== undefined ||
      this.state.filter.onlyGreek ||
      this.state.filter.onlyInternational
    ) ? ('button is-info') : ('button')

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

          <div className="filter columns">
            <div className="field column has-text-centered">
              <div className="select">
                <select onChange={this.filterMajor} value={filter.major}>
                  <option value="">Filter by Major</option>
                  <option>Art</option>
                  <option>Business Administration</option>
                  <option>Communications</option>
                  <option>Computer Science</option>
                </select>
              </div>
            </div>

            <div className="field column has-text-centered">
              <div className="select">
                <select onChange={this.filterClass} value={filter.class}>
                  <option value="">Filter by Class</option>
                  <option>Senior</option>
                  <option>Junior</option>
                  <option>Sophomore</option>
                </select>
              </div>
            </div>

            <div className="field column has-text-centered">
              <button className={greekFilterClass} onClick={this.toggleGreek}>Only Greek</button>
            </div>

            <div className="field column has-text-centered">
              <button className={internationalFilterClass} onClick={this.toggleInternational}>Only International</button>
            </div>

            <div className="field column has-text-centered">
              <button className={resetFilterClass} onClick={this.resetFilters}>Reset Filters</button>
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
