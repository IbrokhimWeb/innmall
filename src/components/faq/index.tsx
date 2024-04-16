import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { SyntheticEvent, useState } from "react";

//todo Import Styled Components
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { Heading, Main, Section } from "../../style";

//todo Import Assets
import { GoPlus } from "react-icons/go";
import { BiMinus } from "react-icons/bi";

// eslint-disable-next-line
const Faq = ({ faqRef }: any) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const faqs = [
    {
      question: t("faq1_question"),
      answer: t("faq1_ansverse"),
    },
    {
      question: t("faq2_question"),
      answer: t("faq2_ansverse"),
    },
    {
      question: t("faq3_question"),
      answer: t("faq3_ansverse"),
    },
    {
      question: t("faq4_question"),
      answer: t("faq4_ansverse"),
    },
    {
      question: t("faq5_question"),
      answer: t("faq5_ansverse"),
    },
    {
      question: t("faq6_question"),
      answer: t("faq6_ansverse"),
    },
    {
      question: t("faq7_question"),
      answer: t("faq7_ansverse"),
    },
    {
      question: t("faq8_question"),
      answer: t("faq8_ansverse"),
    },
  ];

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://innmall.uz" />
        <meta
          name="keywords"
          content="Innmall faqs, innmall, inmall, innmal"
          data-rh="true"
        />
        <meta
          name="description"
          content="- Nima uchun bizning onlayn-do'konimizda telefonlar va kompyuterlarni sotib olish foydali?
          - Bizning do'konimizda siz raqobatbardosh narxlarda yuqori sifatli telefonlar va kompyuterlarning keng tanloviga ega bo'lasiz. Biz qulay sotib olish shartlari, xavfsiz to'lov usullari va tezkor etkazib berishni ta'minlaymiz, bu sizning sotib olish tajribangizni iloji boricha foydali qiladi.

          - Xaridlaringiz xavfsizligini qanday ta'minlaymiz?
          - Biz sizning har bir operatsiyangiz xavfsizligini kafolatlaymiz. Bizning saytimiz ma'lumotlarni shifrlashning ilg'or texnologiyalaridan foydalanadi va biz sizning shaxsiy ma'lumotlaringiz xavfsizligini qat'iy nazorat qilamiz. Bu sizning to'lovingiz va ma'lumotlarning maxfiyligini himoya qiladi.

          - Siz tanlagan mahsulot sizning ehtiyojlaringizga mos kelishiga qanday ishonch hosil qilishingiz mumkin?
          - Biz har bir mahsulotning batafsil tavsiflari va texnik xususiyatlarini taqdim etamiz. Bundan tashqari, bizning mutaxassislarimiz suhbat, telefon yoki elektron pochta orqali har qanday savolingizga javob berish orqali sizga tanlov qilishda yordam berishga tayyor.

          - Xaridimni qanchalik tez olaman va etkazib berish shartlari qanday?
          - Biz sizning buyurtmangiz hajmiga qarab 1 dan 3 kungacha tezkor etkazib berishni ta'minlaymiz. Yetkazib berish shartlari bizning veb-saytimizda batafsil tavsiflangan, bu erda siz buyurtmangiz holatini ham kuzatishingiz mumkin.

          - Bizning do'konimizdagi texnika kafolatdan foydalanadimi?
          - Ha, biz sotiladigan barcha jihozlarga kafolat beramiz, bu bizning mahsulotlarimizning yuqori sifatini tasdiqlaydi. Har qanday muammo bo'lsa, biz sizning savollaringizni tezda hal qilishga tayyormiz.

          - Agar biror narsa mos kelmasa, mahsulotni qaytarish yoki almashtirish imkoniyati bormi?
          - Ha, biz sotib olgandan keyin ma'lum vaqt ichida tovarlarni qaytarish yoki almashtirish imkoniyatini taqdim etamiz. Tafsilotlar veb-saytimizning 'qaytish shartlari' bo'limida aniqlanishi mumkin.

          - Uzoq muddatli mijozlarimiz uchun maxsus chegirmalar amal qiladimi?
          - Ha, bizda muntazam ravishda aktsiyalar o'tkaziladi va uzoq muddatli mijozlarimiz uchun maxsus chegirmalar mavjud. Ajoyib takliflarni o'tkazib yubormaslik uchun saytimizdagi yangiliklar va yangilanishlarni kuzatib boring.

          - Qo'llab-quvvatlash guruhimizga qanday murojaat qilish va tezkor yordam olish mumkin?
          - Siz bizning qo'llab-quvvatlash guruhimizga saytdagi Telegram bot orqali yoki bizga ko'rsatilgan raqamga qo'ng'iroq qilib murojaat qilishingiz mumkin. Biz tezkor javob berishni va har qanday savol yoki masalada sizga yordam berishga tayyorlikni kafolatlaymiz."
        />
      </Helmet>
      <Main
        ref={faqRef}
        id="faq"
        className="w-full bg-grey-900 pb-20 max900:pb-10"
      >
        <Section className="main_container">
          <Heading className="text-white center_text_box headline2  mb-10">
            {t("faq_title")}
          </Heading>
          {faqs?.map((f, i) => (
            <Accordion
              key={i}
              className="rounded-[24px] p-3 mb-5"
              expanded={expanded === String(i)}
              onChange={handleChange(String(i))}
            >
              <AccordionSummary
                expandIcon={
                  expanded === String(i) ? (
                    <BiMinus className="text-grey-500" />
                  ) : (
                    <GoPlus className="text-grey-500" />
                  )
                }
                className="text-[2em] text-grey-500"
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className="title2 text-grey-900">
                  {f?.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="body3 text-grey-400">
                  {f?.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Section>
      </Main>
    </>
  );
};

export default Faq;
