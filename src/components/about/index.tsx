import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Description, Heading, Image, Section } from "../../style";

//todo IMAGES
import About1 from "../../assets/about1.png";
import About1_1 from "../../assets/about1.1.png";
import About2 from "../../assets/about2.png";
import About2_2 from "../../assets/about2.2.png";
import About3 from "../../assets/about3.png";
import About3_3 from "../../assets/about3.3.png";
import About4 from "../../assets/about4.png";
import About4_4 from "../../assets/about4.4.png";
import { Helmet } from "react-helmet-async";

// eslint-disable-next-line
const About = ({ aboutRef }: any) => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://innmall.uz" />
        <meta
          name="keywords"
          content="innmall nima, innmall nima?, innmall, inmall, innmal"
          data-rh="true"
        />
        <meta
          name="description"
          content="InnMall - Bu marketplace sotuvchi va xaridor uchrashadigan, mahsulot va xizmatlar oldi sotdisi amalga oshiriladigan qulay marketplace. Unda siz istalgan mahsulot yoki xizmatingizni sotishingiz yoki sotib olishingiz mumkin"
        />
      </Helmet>
      <Section
        ref={aboutRef}
        id="about_us"
        className="main_container py-20 tablet:bg-red-400 max768:mt-24"
      >
        <Heading className="center_text_box headline2 text-grey-900">
          {t("about_us")}
        </Heading>
        <Description className="center_text_box body2 text-grey-400 mt-3 mb-10">
          {t("about_dec")}
        </Description>
        <Section>
          <Box className="bg-blue-900 rounded-[24px] grid grid-cols-2 overflow-hidden max600:grid-cols-1">
            <Box className="p-10 max1000:p-5">
              <Heading className=" text-white pb-5 headline2 max600:pb-2">
                {t("about1_title")}
              </Heading>
              <Description className=" text-blue-200 body2">
                {t("about1_dec")}
              </Description>
            </Box>
            <Box className="flex justify-end h-full  max600:justify-center">
              <Image
                src={About1}
                alt="karzinka"
                className=" h-full object-fill text-right mix-blend-luminosity  max600:hidden"
              />
              <Image
                src={About1_1}
                alt="karzinka"
                className="object-fill text-right mix-blend-luminosity -mt-20 hidden w-full max600:block"
              />
            </Box>
          </Box>
          <Box className="grid gap-5 pt-5 overflow-hidden min600:grid-cols-2 max600:grid-cols-1 min1100:grid-cols-5">
            <Image
              src={About2}
              alt="image"
              className="w-full h-full object-cover rounded-[24px] row-span-12 col-span-3 max1100:col-span-1"
            />
            <Box className=" bg-blue-900 rounded-[24px] text-white p-10 relative max1100:col-span-1 max1000:p-5 col-span-2 row-span-12">
              <Heading className="headline3 ">{t("about2_title_main")}</Heading>
              <Heading className="title3 my-5 max600:my-2">
                {t("about2_title")}
              </Heading>
              <Description className=" body3 text-blue-200 ">
                {t("about2_dec")}
              </Description>
              <Image
                src={About2_2}
                alt="image"
                className="absolute right-5 -bottom-5 mix-blend-luminosity  w-[60%] max1000:-right-20 "
              />
            </Box>
          </Box>
          <Box className="grid gap-5 pt-5 overflow-hidden min600:grid-cols-2 max600:grid-cols-1 min1100:grid-cols-3">
            <Box className="col-span-1 bg-blue-900 text-white rounded-[24px] p-10 row-span-12 overflow-hidden relative  max1100:col-span-1 max600:p-5 max600:order-last ">
              <Heading className="headline3 ">{t("about3_title")}</Heading>
              <Heading className="title3 my-5 max600:my-2">
                {t("about3_title_main")}
              </Heading>
              <Description className="body3 text-blue-200 ">
                {t("about3_dec")}
              </Description>
              <Image
                src={About3_3}
                alt="image"
                className="object-cover absolute right-0 -bottom-0 mix-blend-luminosity max600:-right-20 max600:-bottom-7"
              />
            </Box>
            <Image
              src={About3}
              alt="image"
              className="w-full h-full col-span-2 rounded-[24px] overflow-hidden object-cover row-span-12  max1100:col-span-1 "
            />
          </Box>
          <Box className="grid gap-5 pt-5 overflow-hidden min600:grid-cols-2 max600:grid-cols-1 min1100:grid-cols-11">
            <Image
              src={About4}
              alt="image"
              className="w-full h-full col-span-5 row-span-12 max1100:col-span-1"
            />
            <Box className="col-span-6 row-span-12 text-white bg-blue-900 rounded-[24px] p-10 relative overflow-hidden max1100:col-span-1 max1000:p-5">
              <Heading className="headline3 ">{t("about4_title")}</Heading>
              <Heading className="title3 font-normal my-5 max600:my-2">
                {t("about4_title_main")}
              </Heading>
              <Description className="body3 text-blue-200 w-[75%]  max600:w-full">
                {t("about4_dec")}
              </Description>
              <Image
                src={About4_4}
                alt="image"
                className="absolute right-2 bottom-0 mix-blend-luminosity max600:-bottom-16 max600:-right-5"
              />
            </Box>
          </Box>
        </Section>
      </Section>
    </>
  );
};

export default About;
