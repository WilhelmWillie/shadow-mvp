// Used for animations
import "animate.css/animate.min.css";

import {
  Benefits,
  Footer,
  Head,
  Header,
  Process,
  SignUpHero
} from "../../components";

const Shadow = () => (
  <>
    <Head title="Shadow - Real students, real voices, real experiences" />
    <Header />
    <SignUpHero
      title="Sign up for a tour, via Shadow"
      subtitle="Enter in your e-mail so our Shadow team can reach out to you and find you a match."
    />
    <Benefits />
    <Process />
    <Footer />
  </>
);

export default Shadow;
