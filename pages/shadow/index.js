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
      title="Experience what it's really like to be a college student"
      subtitle="Get matched with a student for a personalized college tour. Enter in your e-mail so we can reach out to you!"
    />
    <Benefits />
    <Process />
    <Footer />
  </>
);

export default Shadow;
