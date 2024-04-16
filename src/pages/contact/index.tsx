import { Link } from "react-router-dom";
import Contact from "../../components/contact";
import { Main, MyButton, Section } from "../../style";
import { TiArrowLeft } from "react-icons/ti";

const ContactPage = () => {
  return (
    <Main className="w-full h-screen flex flex-col items-start justify-start bg-grey-900">
      <Section className="w-full h-[20vh] flex items-end px-20">
        <Link to="/">
          <MyButton>
            <TiArrowLeft />
          </MyButton>
        </Link>
      </Section>
      <Contact />
    </Main>
  );
};

export default ContactPage;
