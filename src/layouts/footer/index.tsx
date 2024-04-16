import { Box } from "@mui/material";
import { Description, Image, Main, Section } from "../../style";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/logo.svg";
import { Helmet } from "react-helmet-async";
import { CustomRef } from "../../utils/types";

// eslint-disable-next-line
const Footer = (props: any) => {
  const { t } = useTranslation();

  const {
    faqRef,
    mainRef,
    aboutRef,
    safetyRef,
    contactRef,
    howitworksRef,
    advantagesRef,
  } = props;

  const navs = [
    { name: t("main"), ref: mainRef },
    { name: t("about_us"), ref: aboutRef },
    { name: t("safety"), ref: safetyRef },
    { name: t("how_it_works"), ref: howitworksRef },
    { name: t("advantages"), ref: advantagesRef },
    { name: t("faq"), ref: faqRef },
    { name: t("contact"), ref: contactRef },
  ];

  const handleScroll = (ref: CustomRef) => {
    const element = ref.current;
    const elementPosition = element.offsetTop - 100;
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
    const scrollListener = () => {
      if (
        window.scrollY >= elementPosition &&
        window.scrollY <= elementPosition + element.offsetHeight
      ) {
        window.scrollTo({
          top: elementPosition,
          behavior: "auto",
        });
        window.removeEventListener("scroll", scrollListener);
      }
    };
    window.addEventListener("scroll", scrollListener);
  };

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://innmall.uz" />
        <meta
          name="keywords"
          content="Innmall, innmall, inmall, innmal"
          data-rh="true"
        />
        <meta
          name="description"
          content={`2023-${new Date().getFullYear()} Copyright InnMall. All rights reserved.`}
        />
      </Helmet>
      <Main className="w-full bg-grey-900">
        <Section className="main_container pt-20 pb-10 max600:pt-10">
          <Box className="flex justify-center mb-8 max1000:justify-start">
            <Image src={Logo} alt="logo" />
          </Box>
          <Section className="flex items-start justify-center gap-5 mb-10 max1000:gap-20 max1000:justify-start">
            <Box className="flex justify-center gap-5 max1000:flex-col">
              {navs?.map(({ name, ref }, i) =>
                i < 4 ? (
                  <Description
                    key={name}
                    onClick={() => handleScroll(ref)}
                    className="cursor-pointer body3 text-grey-100"
                  >
                    {name}
                  </Description>
                ) : null,
              )}
            </Box>
            <Box className="flex justify-center gap-5 max1000:flex-col">
              {navs?.map(({ name, ref }, i) =>
                i > 3 ? (
                  <Description
                    key={name}
                    onClick={() => handleScroll(ref)}
                    className="cursor-pointer body3 text-grey-100"
                  >
                    {name}
                  </Description>
                ) : null,
              )}
            </Box>
          </Section>
          <Description className="text-white opacity-50 text-center mt-5 text-[14px]">
            2023-{new Date().getFullYear()} Copyright InnMall. All rights
            reserved.
          </Description>
        </Section>
      </Main>
    </>
  );
};

export default Footer;
