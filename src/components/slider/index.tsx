/* eslint-disable @typescript-eslint/no-explicit-any */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Description, Heading, Main } from "../../style";
import { useTranslation } from "react-i18next";
import { Avatar, Box } from "@mui/material";
interface CustomCards {
  dec: string;
  icon: string;
  name: string;
  job: string;
}

const SimpleSlider = ({ reviewsRef }: any) => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    speed: 500,
    infinite: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    centerMode: true,
    slidesToScroll: 1,
    centerPadding: "400px",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          centerPadding: "200px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "0",
        },
      },
    ],
  };
  const cards: CustomCards[] = [
    {
      dec: "Это приложение - настоящий находка для тех, кто, как и я, ценит удобство и качество в онлайн-покупках техники. Редко можно встретить такой разнообразный ассортимент смартфонов и компьютеров, как здесь.",
      icon: "/images/slider2.png",
      name: "Шахриёр Темиров",
      job: "Преподаватель физики",
    },
    {
      dec: "Я в восторге от опыта использования Inmall! Недавно приобрел компьютер через это приложение, и результаты меня поразили. Веб-разработчиком быть требует от меня постоянного обновления оборудования, и ваше приложение сделало это процесс простым и удобным.",
      icon: "",
      name: "Мурад Алишеров",
      job: "Веб-разработчик",
    },
    {
      dec: "Биоинженерам требуется высокопроизводительное оборудование, и Inmall  предоставило мне идеальные инструменты для выбора подходящего компьютера.",
      icon: "",
      name: "Малика Абдуллаева",
      job: "Биоинженер",
    },
  ];

  return (
    <Main
      ref={reviewsRef}
      id="reviews"
      className="py-20 bg-[#F5F6F8] overflow-x-hidden"
    >
      <Heading className="center_text_box hero_heading mb-10">
        {t("slider_title")}
      </Heading>
      <Slider {...settings} className="flex items-center justify-center">
        {cards?.map((c: CustomCards, index: number) => (
          <Box key={index} className="carousel-item-wrapper overflow-hidden">
            <Box className="carousel-item py-10 px-20 text-center border rounded-2xl flex flex-col items-center justify-center">
              <Description className="hero_description text-[#666D80]">
                {c?.dec}
              </Description>
              <Box className="slider_card_image">
                <Avatar
                  alt={c?.name}
                  src={c?.icon}
                  sx={{ width: 56, height: 56 }}
                />
              </Box>
              <Description className="item_title font-bold">
                {c?.name}
              </Description>
              <Description className="item_description text-[16px]">
                {c?.job}
              </Description>
            </Box>
          </Box>
        ))}
      </Slider>
    </Main>
  );
};

export default SimpleSlider;
