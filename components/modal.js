const Modal = (props) => {
  const modalClass = (props.isActive) ? ('modal is-active') : ('modal')
  const host = props.selectedHost

  const experience = host.details.experience.join(", ")
  const interests = host.details.interests.join(", ")

  return (
    <div className={modalClass}>
      <div className="modal-background" onClick={props.toggleModal}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{host.name}</p>
          <button className="delete" aria-label="close" onClick={props.toggleModal}></button>
        </header>
        <section className="modal-card-body">
          <div className="columns">
            <div className="column">
              <figure className="image is-4by3">
                <img src={host.photo} alt={host.name} style = {{objectFit: 'cover'}}/>
              </figure>
            </div>

            <div className="column">
              <p>
                <b>
                  <span className="icon">
                    <i className="fas fa-graduation-cap"></i>
                  </span>

                  Class
                </b> <br/>

                {host.class}
              </p>

              <p>
                <b>
                  <span className="icon">
                    <i className="fas fa-book"></i>
                  </span>

                  Major
                </b> <br/>

                {host.major}
              </p>

              <p>
                <b>
                  <span className="icon">
                    <i className="fas fa-chalkboard"></i>
                  </span>

                  Minor
                </b> <br/>

                {host.details.minor}
              </p>

              <p>
                <b>
                  <span className="icon">
                    <i className="fas fa-home"></i>
                  </span>

                  Hometown
                </b> <br/>

                {host.hometown}
              </p>
            </div>
          </div>

          <hr/>

          <p><b>About your host:</b> {host.details.biography}</p>

          <hr/>

          <p>
            <b>Clubs/Organizations: </b> {host.details.involvements}
          </p>

          <p>
            <b>Interests: </b> {interests}
          </p>

          <p>
            <b>Dream Job: </b> {host.details.dreamJob}
          </p>

          <p>
            <b>Internships/Experience: </b> {experience}
          </p>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success">Book Host</button>
        </footer>
      </div>
    </div>
  )
}

export default Modal
