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
    <Header shadowLink />
    <SignUpHero
      title="Become a host and earn some cash"
      subtitle="Turn your knowledge of your school into a side hustle. Enter in your e-mail so we can get you set up as a Shadow host"
      formName="host-emails"
    />
    <Benefits />
    <Process />
    <Footer />
  </>
);

export default Host;
