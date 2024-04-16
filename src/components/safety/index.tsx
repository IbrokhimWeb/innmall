import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

// todo Styled Components
import { Box } from "@mui/material";
import { Description, Heading, Image, Section } from "../../style";

//todo ASSETS
import SafetlyIcon1 from "../../assets/safetlyicon1.svg";
import SafetlyIcon2 from "../../assets/safetlyicon2.svg";
import SafetlyIcon3 from "../../assets/safetlyicon3.svg";
import Safetly1 from "../../assets/safetly1.png";
import Safetly2 from "../../assets/safetly2.png";
import Safetly3 from "../../assets/safetly3.png";

// eslint-disable-next-line
const Safety = ({ safetyRef }: any) => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://innmall.uz" />
        <meta
          name="keywords"
          content="innmall security, innmall xavfsizlik, innmall maxfiylik, innmall, inmall, innmal"
          data-rh="true"
        />
        <meta
          name="description"
          content="Online platformamizda sizning xavfsizlik va maxfiyligingiz biz uchun ham muhimdir. Innmall’da barcha ma’lumotlaringiz xavfsiz va maxfiy bo’lishi ta’minlanadi, Shaxsiy va moliyaviy ma’lumotlar shifrlanadi, undan boshqa shaxslar foydalanmasligiga kafolat beriladi, Ikki bosqichli autentifikatsiya orqali qo'shimcha xavfsizlik darajasini ta'minlash, bu sizga to'liq nazoratni taqdim etadi, Bizning jamoamiz xavfsizlik chora-tadbirlarini doimiy tekshirib, mumkin bo'lgan xavfni oldini olish uchun ulardan foydalanadi."
        />
      </Helmet>
      <Section
        ref={safetyRef}
        id="safety"
        className="main_container py-10 max600:pt-0 max600:pb-10"
      >
        <Heading className="center_text_box headline2 text-grey-900">
          {t("safety_title")}
        </Heading>
        <Description className="center_text_box body2 text-grey-400 mt-3  mb-10">
          {t("safety_dec")}
        </Description>
        <Section className="w-full grid grid-cols-2 gap-5 max600:grid-cols-1">
          <Box className="flex flex-col justify-center order-1 max600:flex-row max600:order-2 max1100:gap-3 min1100:gap-5">
            <Box>
              <Box className="w-[80px] h-[80px] flex items-center justify-center rounded-[24px] bg-[#09a4e20c] p-[16px] text-blue-500 max600:w-[56px] max600:h-[56px] max600:rounded-[16px]">
                <Image src={SafetlyIcon1} alt="Icon" className="w-full" />
              </Box>
            </Box>
            <Box className="flex flex-col max1100:gap-1 min1100:gap-2">
              <Heading className="title1 text-grey-900">
                {t("safety1_title")}
              </Heading>
              <Description className="body3 text-grey-400">
                {t("safety1_dec")}
              </Description>
            </Box>
          </Box>
          <Box className="flex items-center justify-start order-2 ps-20 max768:justify-center max600:order-1 max768:ps-0">
            <Image
              src={Safetly1}
              alt="Icon"
              className="w-[60%] max600:w-[80%]"
            />
          </Box>
          <Box className="flex items-center justify-end pr-20 order-3 max768:justify-center max768:pr-0">
            <Image
              src={Safetly2}
              alt="Icon"
              className="w-[60%] max600:w-[80%]"
            />
          </Box>
          <Box className="flex flex-col justify-center order-4 max600:flex-row max600:order-3 max1100:gap-3 min1100:gap-5">
            <Box>
              <Box className="w-[80px] h-[80px] flex items-center justify-center rounded-[24px] bg-[#09a4e20c] p-[16px] text-blue-500 max600:w-[56px] max600:h-[56px] max600:rounded-[16px]">
                <Image src={SafetlyIcon2} alt="Icon" className="w-full" />
              </Box>
            </Box>
            <Box className="flex flex-col max1100:gap-1 min1100:gap-2">
              <Heading className="title1 text-grey-900">
                {t("safety2_title")}
              </Heading>
              <Description className="body3 text-grey-400">
                {t("safety2_dec")}
              </Description>
            </Box>
          </Box>
          <Box className="flex flex-col justify-center gap-10 order-5 max600:order-6 max600:flex-row max1100:gap-3 min1100:gap-5">
            <Box>
              <Box className="w-[80px] h-[80px] flex items-center justify-center rounded-[24px] bg-[#09a4e20c] p-[16px] text-blue-500 max600:w-[56px] max600:h-[56px] max600:rounded-[16px]">
                <Image src={SafetlyIcon3} alt="Icon" className="w-full" />
              </Box>
            </Box>
            <Box className="flex flex-col max1100:gap-1 min1100:gap-2">
              <Heading className="title1 text-grey-900">
                {t("safety3_title")}
              </Heading>
              <Description className="body3 text-grey-400">
                {t("safety3_dec")}
              </Description>
            </Box>
          </Box>
          <Box className="flex items-center justify-start order-6 ps-20 max768:justify-center max600:order-5 max768:ps-0">
            <Image
              src={Safetly3}
              alt="Icon"
              className="w-[60%] max600:w-[80%]"
            />
          </Box>
        </Section>
        <Box className="flex gap"></Box>
      </Section>
    </>
  );
};

export default Safety;
