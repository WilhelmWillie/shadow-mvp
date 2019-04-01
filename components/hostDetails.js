const HostDetails = (props) => (
  <div className="column is-one-third" key={props.host.id}>
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src="//placehold.it/640x480" alt="Placeholder image" />
        </figure>
      </div>

      <div className="card-content">
        <p>
          <span className="icon">
            <i className="fas fa-user"></i>
          </span>
          {props.host.name}
        </p>

        <p>
          <span className="icon">
            <i className="fas fa-graduation-cap"></i>
          </span>
          {props.host.class}
        </p>

        <p>
          <span className="icon">
            <i className="fas fa-book"></i>
          </span>
          {props.host.major}
        </p>

        <p>
          <span className="icon">
            <i className="fas fa-home"></i>
          </span>
          {props.host.hometown}
        </p>
      </div>

      <footer className="card-footer">
        <a href="#" className="card-footer-item">Book Now</a>
      </footer>
    </div>
  </div>
)

export default HostDetails
