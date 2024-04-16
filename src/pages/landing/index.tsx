import { useEffect, useRef, useState } from "react";

//todo Import Styled Components and Static Components
import { Box } from "@mui/material";
import Faq from "../../components/faq";
import Main from "../../components/main";
import Header from "../../layouts/header";
import Footer from "../../layouts/footer";
import About from "../../components/about";
import Safety from "../../components/safety";
import Contact from "../../components/contact";
import HowItWorks from "../../components/howItWorks";
import Advantages from "../../components/advantages";
// import SimpleSlider from "../../components/slider";

//todo Import Assets
import { FaChevronLeft } from "react-icons/fa6";

const Landing = () => {
  const faqRef = useRef(null);
  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const safetyRef = useRef(null);
  const reviewsRef = useRef(null);
  const contactRef = useRef(null);
  const howitworksRef = useRef(null);
  const advantagesRef = useRef(null);

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight / 2) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header />
      <Main mainRef={mainRef} />
      <About aboutRef={aboutRef} />
      <Safety safetyRef={safetyRef} />
      <HowItWorks howitworksRef={howitworksRef} />
      <Advantages advantagesRef={advantagesRef} />
      <Faq faqRef={faqRef} />
      {/* <SimpleSlider reviewsRef={reviewsRef} /> */}
      <Contact contactRef={contactRef} />
      <Footer
        mainRef={mainRef}
        aboutRef={aboutRef}
        safetyRef={safetyRef}
        howitworksRef={howitworksRef}
        advantagesRef={advantagesRef}
        faqRef={faqRef}
        reviewsRef={reviewsRef}
        contactRef={contactRef}
      />
      {showButton && (
        <Box
          onClick={scrollToTop}
          style={{ transform: "rotate(90deg)" }}
          className="fixed bottom-5 right-5 cursor-pointer w-[50px] h-[50px] rounded-full flex justify-center items-center bg-blue-900 text-white max768:bottom-1 max768:right-1"
        >
          <FaChevronLeft />
        </Box>
      )}
    </>
  );
};

export default Landing;
