import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

//todo Import styled Components
import { Box } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import { Description, Heading, Main, Section, Title } from "../../style";

// eslint-disable-next-line
const HowItWorks = ({ howitworksRef }: any) => {
  const { t } = useTranslation();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
    };
  }, []);

  const howItWorksList = [
    { title: "howItWorks1_title", dec: "howItWorks1_dec" },
    { title: "howItWorks2_title", dec: "howItWorks2_dec" },
    { title: "howItWorks3_title", dec: "howItWorks3_dec" },
    { title: "howItWorks4_title", dec: "howItWorks4_dec" },
    { title: "howItWorks5_title", dec: "howItWorks5_dec" },
    { title: "howItWorks6_title", dec: "howItWorks6_dec" },
  ];

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://innmall.uz" />
        <meta
          name="keywords"
          content="How does it work Innmall, innmall, inmall, innmal"
          data-rh="true"
        />
        <meta
          name="description"
          content="Innmall bilan insonlarning hayotini birgalikda yengillashtiramiz. Innmallni oching va kerakli turkumni tanlang: telefonlar yoki kompyuterlar, Qulay qidiruv va filtrlardan foydalanib, mahsulotlar assortimentidan maksimal foydalaning, Tanlangan mahsulotni savatga qo'shing. Agar kerak bo'lsa, boshqa mahsulotlarni qo'shing, Savatchaga o'ting, buyurtmangizni tekshiring va xaridni amalga oshiring. Qulay to'lov usulini tanlang, Buyurtmangizni tezkor yetkazib berish bizning asosiy vazifalarimizdan biridir. Yetkazib berish holatini ilovada kuzating, Mahsulotingizni olgandan so'ng, unga baho bering va fikrlaringizni sharh qiling. Sizning fikrlaringiz biz uchun muhim."
        />
      </Helmet>
      <Main ref={howitworksRef} id="how_it_works" className="w-full bg-grey-0">
        <Section
          className={`py-20 howitworks_container max900:px-0 max900:py-10`}
        >
          <Heading className="center_text_box headline2 text-grey-900">
            {t("howItWorks_title")}
          </Heading>
          <Description className="center_text_box body2 text-grey-400 mt-3 mb-10">
            {t("howItWorks_dec")}
          </Description>
          <Box className="w-full">
            <Timeline
              sx={
                windowWidth < 900
                  ? {
                      [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                      },
                    }
                  : {}
              }
              position={windowWidth < 900 ? "right" : "alternate-reverse"}
            >
              {howItWorksList?.map(({ title, dec }, i) => (
                <TimelineItem key={title + dec + i}>
                  <TimelineSeparator>
                    {i === 0 ? (
                      <TimelineConnector
                        sx={{
                          background: "#fff",
                          backgroundImage:
                            " linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(12,146,207,1) 100%)",
                          width: "1px",
                        }}
                      />
                    ) : null}

                    <TimelineDot
                      sx={{
                        backgroundColor: "#099ee2",
                        padding: "0px !important",
                        width: "8px !important",
                        height: "8px !important",
                        boxShadow: "none !important",
                      }}
                    />
                    <TimelineConnector
                      sx={
                        i === 5
                          ? {
                              background: "#fff",
                              backgroundImage:
                                "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(12,146,207,1) 0%, rgba(255,255,255,1) 100%)",
                              width: "1px",
                              boxShadow: "none !important",
                            }
                          : {
                              boxShadow: "none !important",
                              backgroundColor: "#0C92CF",
                              width: "1px",
                            }
                      }
                    />
                  </TimelineSeparator>
                  <TimelineContent className="pb-10">
                    <Box
                      className={`flex gap-5 ${
                        i === 0
                          ? "items-end mt-5  max900:pb-5 max900:mt-[85px] max900:items-start"
                          : "items-start -mt-5 "
                      } max900:gap-2 max900:-mt-2`}
                    >
                      <Box
                        className={`${
                          (i + 1) % 2 === 0 ? "" : "hidden max900:block"
                        }`}
                      >
                        <Box className="flex items-center justify-center w-[64px] h-[64px] text-blue-900 bg-blue-100  rounded-[24px] max900:w-[38px] max900:h-[38px] max900:rounded-[12px]">
                          <Title className="font-[700] text-[24px] leading-[32px] max900:font-[600] max900:text-[16px] max900:leading-[23.68px]">
                            {i + 1}
                          </Title>
                        </Box>
                      </Box>
                      <Box className={`${i === 0 ? "-mb-[18px]" : ""}`}>
                        <Heading className="mb-3 title1 text-grey-900 max900:mb-1">
                          {t(title)}
                        </Heading>
                        <Description className="body3 text-grey-400">
                          {t(dec)}
                        </Description>
                      </Box>
                      <Box
                        className={`${
                          (i + 1) % 2 === 0 ? "hidden" : "max900:hidden"
                        }`}
                      >
                        <Box className="flex items-center justify-center w-[64px] h-[64px] text-blue-900 bg-blue-100  rounded-[24px] max900:w-[38px] max900:h-[38px] max900:rounded-[12px]">
                          <Title className="font-[700] text-[24px] leading-[32px] max900:font-[600] max900:text-[16px] max900:leading-[23.68px]">
                            {i + 1}
                          </Title>
                        </Box>
                      </Box>
                    </Box>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Box>
        </Section>
      </Main>
    </>
  );
};

export default HowItWorks;
