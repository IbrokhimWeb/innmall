//todo REACT
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

//todo STYLED COMPONENT
import { Box } from "@mui/material";
import { Description, Heading, Image, Section } from "../../style";

//todo IMAGES
import Shadow from "../../assets/shadow.png";
import Mainimg from "../../assets/mainimg.png";
import AppStoreButton from "../../assets/app_store_button.svg";
import GooglePlayButton from "../../assets/google_play_button.svg";

// eslint-disable-next-line
const Main = ({ mainRef }: any) => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://innmall.uz" />
        <meta
          name="keywords"
          content="inmal, innmal, inmol, innmol, innmall, online shop, online dokon, online, online do'kon, marketplace in tashkent, tashkent marketplace, marketplace"
          data-rh="true"
        />
        <meta
          name="description"
          content="Orzular texnologiyasi olamiga xush kelibsiz!. Yangi smartfon, kuchli kompyuter - siz topishni orzu qilgan hamma narsa hozir sizning qo'lingizda."
        />
      </Helmet>
      <Box ref={mainRef} id="home" className="w-full pt-[150px] relative bg">
        <Section className="main_container h-full max450:p-1">
          <Heading className="center_text_box  text-grey-900 headline1">
            {t("main_heading")}
          </Heading>
          <Description className="center_text_box body1 text-grey-400 mb-10 mt-5 max600:px-6">
            {t("main_dec")}
          </Description>
          <Box className="w-full flex flex-col items-center justify-center p-0">
            <Box>
              <Image src={Mainimg} alt="bacground image" />
            </Box>
            <Box className="absolute bottom-0 left-0 right-0">
              <Image src={Shadow} alt="shaddow" className="w-full h-auto" />
            </Box>
            <Box className="z-10 flex items-center justify-center gap-10 absolute left-0 right-0 bottom-20 max768:-bottom-16 max768:gap-5 max380:gap-1">
              <a
                aria-label="App Store"
                href="https://apps.apple.com/uz/app/innmall/id1660757988"
                target="_blank"
                className="w-auto cursor-pointer max450:w-[40%]"
              >
                <Image src={AppStoreButton} alt="App Store" />
              </a>
              <a
                aria-label="Play Market"
                href="https://play.google.com/store/apps/details?id=uz.innmall"
                target="_blank"
                className="w-auto cursor-pointer max450:w-[40%]"
              >
                <Image src={GooglePlayButton} alt="Play Market" />
              </a>
            </Box>
          </Box>
        </Section>
      </Box>
    </>
  );
};

export default Main;
