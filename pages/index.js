// Used for animations
import "animate.css/animate.min.css";

import {
  Benefits,
  CTA,
  DismissableBanner,
  Footer,
  Head,
  Header,
  Hero,
  Process
} from "../components";

const Landing = () => (
  <>
    <Head title="Shadow - Real students, real voices, real experiences" />
    <Header />
    <Hero />
    <Benefits />
    <Process />
    <CTA />
    <Footer />
    <DismissableBanner />
  </>
);

export default Landing;
