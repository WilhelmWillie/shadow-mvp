import '../../styles/stylesheet.scss'

import { Component } from 'react'

import Link from 'next/link'

import Head from '../../components/head'
import NavBar from '../../components/navbar'
import Footer from '../../components/footer'

// AirBNB's date picker
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import '../../styles/datePickerOverride.scss'
import moment from 'moment'

class Schedule extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: new moment(),
      focused: false,
      hour: '01',
      minute: '00',
      period: 'PM'
    }
  }

  render() {
    return (
      <>
        <Head title="Shadow - Schedule a Date" />
        <NavBar/>

        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <img src="/static/schedule.svg" />
              </div>

              <div className="column is-three-fifths has-text-centered">
                <h1 className="title">
                  Schedule a Date
                </h1>

                <h2 className="subtitle">
                  Let us know when you're available
                </h2>

                <div className="field">
                  <label className="label">Select a Day</label>

                  <SingleDatePicker
                    date={this.state.date}
                    onDateChange={date => this.setState({ date })}
                    focused={this.state.focused}
                    onFocusChange={({ focused }) => this.setState({ focused })}
                    id="select-date"
                    numberOfMonths={1}
                  />
                </div>

                <label className="label">Select a Time</label>

                <div className="field is-grouped is-grouped-centered">
                  <div className="control">
                    <div className="select">
                      <select
                        value={this.state.hour}
                        onChange={(e) => this.setState({hour: e.target.value})}
                      >
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        <option>06</option>
                        <option>07</option>
                        <option>08</option>
                        <option>09</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                      </select>
                    </div>
                  </div>

                  <div className="control">
                    <div className="select">
                      <select
                        value={this.state.minute}
                        onChange={(e) => this.setState({minute: e.target.value})}
                      >
                        <option>00</option>
                        <option>15</option>
                        <option>30</option>
                        <option>45</option>
                      </select>
                    </div>
                  </div>

                  <div className="control">
                    <div className="select">
                      <select
                        value={this.state.period}
                        onChange={(e) => this.setState({period: e.target.value})}
                      >
                        <option>PM</option>
                        <option>AM</option>
                      </select>
                    </div>
                  </div>
                </div>

                <Link href="/tour/book"><button className="button is-black">Book a Host</button></Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
    )
  }
}

export default Schedule
