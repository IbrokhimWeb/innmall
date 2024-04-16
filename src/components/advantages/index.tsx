import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Description, Heading, Image, Main, Section } from "../../style";

//todo IMAGES
import Advantages1 from "../../assets/advantages1.svg";
import Advantages2 from "../../assets/advantages2.svg";
import Advantages3 from "../../assets/advantages3.svg";
import Advantages4 from "../../assets/advantages4.svg";
import Advantages5 from "../../assets/advantages5.svg";

// eslint-disable-next-line
const Advantages = ({ advantagesRef }: any) => {
  const { t } = useTranslation();

  const advantagesList = [
    {
      title: t("advantages1_title"),
      description: t("advantages1_dec"),
      icon: Advantages1,
    },
    {
      title: t("advantages2_title"),
      description: t("advantages2_dec"),
      icon: Advantages2,
    },
    {
      title: t("advantages3_title"),
      description: t("advantages3_dec"),
      icon: Advantages3,
    },
    {
      title: t("advantages4_title"),
      description: t("advantages4_dec"),
      icon: Advantages4,
    },
    {
      title: t("advantages5_title"),
      description: t("advantages5_dec"),
      icon: Advantages5,
    },
  ];

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://innmall.uz" />
        <meta
          name="keywords"
          content="Innmall Advantages, innmall, inmall, innmal"
          data-rh="true"
        />
        <meta
          name="description"
          content="Innmall mahsulot va xizmatlarining afzalliklarini bilib oling. Innmall'da siz yetakchi brendlarning telefon va kompyuterlarining eng yaxshi modellarini topasiz. Ajoyib emasmi?, Xarid qilish tajribangizni chinakam zavqlantiradigan eksklyuziv chegirmalar va maxsus takliflarga ega bo'ling, Biz sizning to'lovlaringiz xavfsizligini va ma'lumotlar maxfiyligini kafolatlaymiz, har bir tranzaksiyada ishonchlilikni ta'minlaymiz, Aqlli tanlov qilish uchun boshqa mijozlarning sharhlarini o'qing. Sizning fikringiz biz uchun muhim!, Biz sizning vaqtingizni qadrlaymiz. Tez yetkazib berish sizga yangi qurilmangizdan bir zumda bahramand bo'lishingizga imkon beradi."
        />
      </Helmet>
      <Main
        ref={advantagesRef}
        id="advantages"
        className="w-full bg-grey-900 py-20 max600:py-10"
      >
        <Section className="main_container pb-10">
          <Heading className="center_text_box headline2 text-white">
            {t("advantages")}
          </Heading>
          <Description className="center_text_box body2 text-grey-400 mb-20 mt-3 max600:mb-10">
            {t("advantages_dec")}
          </Description>
          <Section className="w-full grid_parent">
            {advantagesList?.map(({ title, description, icon }, i) => (
              <Section
                key={title}
                className={`flex flex-col text-center ${
                  "grid_item_" + (i + 1)
                } max600:flex-row max600:gap-6 max600:text-start`}
              >
                <Section className="flex justify-center items-start mt-1">
                  <Section className="w-[56px]  max600:w-[36px]">
                    <Image
                      src={icon}
                      className=" text-blue-900"
                      alt="advantages icon "
                    />
                  </Section>
                </Section>
                <Section className="text-white">
                  <Heading className="title1 my-4 max900:mt-0 max900:mb-2">
                    {title}
                  </Heading>
                  <Description className="w-full body3 text-grey-400">
                    {description}
                  </Description>
                </Section>
              </Section>
            ))}
          </Section>
        </Section>
      </Main>
    </>
  );
};

export default Advantages;
