import Link from 'next/link'

const Hero = () => (
  <section className="hero is-fullheight">
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title">
          Shadow
        </h1>
        <h2 className="subtitle">
          Experience what it's really like to be a college student.
        </h2>

        <Link href="/tour/find"><button className="button is-black">Take a Tour</button></Link>
      </div>
    </div>
  </section>
)

export default Hero
