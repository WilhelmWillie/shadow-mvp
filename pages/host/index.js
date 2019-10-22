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

const Host = () => (
  <>
    <Head title="Shadow - Real students, real voices, real experiences" />
    <Header />
    <SignUpHero
      title="Sign up to host tours, via Shadow"
      subtitle="Enter in your e-mail so our Shadow team can reach out to you as a prospective host."
    />
    <Benefits />
    <Process />
    <Footer />
  </>
);

export default Host;
