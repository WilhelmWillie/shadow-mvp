const Modal = (props) => {
  const modalClass = (props.isActive) ? ('modal is-active') : ('modal')
  const host = props.selectedHost

  return (
    <div className={modalClass}>
      <div className="modal-background" onClick={props.toggleModal}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{host.name}</p>
          <button className="delete" aria-label="close" onClick={props.toggleModal}></button>
        </header>
        <section className="modal-card-body">
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
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success">Book Host</button>
        </footer>
      </div>
    </div>
  )
}

export default Modal
