import '../styles/host.scss'

import Link from 'next/link'

const Host = (props) => (
  <div className="host">
    <h2 className="headline is-size-2">{props.host.headline}</h2>

    <div className="columns">
      <div className="column">
        <figure className="image is-4by3 host-photo">
          <img src={`/static/hosts/${props.host.id}/a.jpg`} />
        </figure>
      </div>

      <div className="column">
        <figure className="image is-4by3 host-photo">
          <img src={`/static/hosts/${props.host.id}/b.jpg`} />
        </figure>
      </div>

      <div className="column">
        <figure className="image is-4by3 host-photo">
          <img src={`/static/hosts/${props.host.id}/c.jpg`} />
        </figure>
      </div>
    </div>

    <div className="columns host-details has-text-centered">
      <div className="column">
        <p>
          <span className="icon">
            <i className="fas fa-university"></i>
          </span>

          {props.host.details.university}
        </p>
      </div>

      <div className="column">
        <p>
          <span className="icon">
            <i className="fas fa-book"></i>
          </span>

          {props.host.details.major}
        </p>
      </div>

      <div className="column">
        <p>
          <span className="icon">
            <i className="fas fa-graduation-cap"></i>
          </span>

          {props.host.details.class}
        </p>
      </div>

      <div className="column">
        <p>
          <span className="icon">
            <i className="fas fa-home"></i>
          </span>

          {props.host.details.hometown}
        </p>
      </div>
    </div>

    <div className="columns is-vcentered">
      <div className="column">
        <p className="host-bio">
          {props.host.bio}
        </p>
      </div>

      <div className="column is-one-fifth has-text-centered">
        <Link href="/details?host=willie">
          <button className="button is-large is-primary host-meet-button">Meet {props.host.nickname}</button>
        </Link>

        <p className="host-price"><span className="host-price-strike">$50/hour</span> $0</p>
      </div>
    </div>
  </div>
)

export default Host
