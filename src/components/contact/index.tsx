import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

//todo Import Styled Components
import { Box, Button } from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { Description, Form, Heading, Main, Section } from "../../style";

//todo Import Assets
import { FaFacebook } from "react-icons/fa6";
import { AiOutlineUser } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";

//todo Import Helpers
import { formatPhoneNumber } from "../../utils/helpers";
import { Link } from "react-router-dom";

// eslint-disable-next-line
const Contact = ({ contactRef }: any) => {
  const { t } = useTranslation();

  const [state, setState] = useState({
    name: "",
    phone: "",
    dec: "",
  });

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://innmall.uz" />
        <meta
          name="keywords"
          content="Contact Innmall, Innmall Contact, innmall, inmall, innmal"
          data-rh="true"
        />
        <meta
          name="description"
          content="Sizning fikringizni qadrlaymiz va barcha savollaringizga javob berishga tayyormiz. Iltimos, bizning aloqa formasidan foydalaning va yaqinda siz bilan bog'lanamiz."
        />
      </Helmet>
      <Main
        ref={contactRef}
        id="contact"
        className="w-full pt-20 pb-10 max600:pt-10 bg-grey-900"
      >
        <Section className="main_container">
          <Box className="grid grid-cols-2 gap-20 p-20 rounded-[24px] bg-blue-900 max1000:p-5 max600:grid-cols-1 max600:gap-10">
            <Box className="flex flex-col justify-between">
              <Box>
                <Heading className="headline2 text-white">
                  {t("contact_heading")}
                </Heading>
                <Description className="my-5 body2 text-blue-200">
                  {t("contact_item")}
                </Description>
              </Box>
              <Box className="text-white">
                <Description className="text-blue-200 body3">
                  <Link
                    target="_blank"
                    aria-label="Innmall Mail Address"
                    to={"mailto:" + import.meta.env.VITE_MAIL}
                  >
                    {import.meta.env.VITE_MAIL}
                  </Link>
                </Description>
                <Description className="my-1 title1">
                  <Link
                    target="_blank"
                    aria-label="Innmall Phone Number"
                    to={"tel:" + import.meta.env.VITE_PHONE}
                  >
                    {import.meta.env.VITE_PHONE}
                  </Link>
                </Description>
                <Box className="flex gap-5 mt-3 items-center text-[24px] ">
                  <Link
                    aria-label="instagram"
                    target="_blank"
                    to={import.meta.env.VITE_INSTAGRAM}
                  >
                    <SlSocialInstagram />
                  </Link>
                  <Link
                    aria-label="telegram"
                    target="_blank"
                    to={import.meta.env.VITE_TELEGRAM}
                  >
                    <FaTelegramPlane />
                  </Link>
                  <Link
                    aria-label="facebook"
                    target="_blank"
                    to={import.meta.env.VITE_FACEBOOK}
                  >
                    <FaFacebook />
                  </Link>
                </Box>
              </Box>
            </Box>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                const { name, phone, dec } = state;

                let post = `--- INNMALL LANDING PAGE --- %0A%0A`;
                post += `👨‍💼 Mijoz: <b> ${name}</b> %0A`;
                post += `📞 Raqam: <b> ${phone}</b> %0A`;
                post += `💭 Xabar: <b> ${dec}</b> %0A`;

                const api = new XMLHttpRequest();

                api.open(
                  "GET",
                  `https://api.telegram.org/bot${
                    import.meta.env.VITE_TOKEN
                  }/sendMessage?chat_id=${
                    import.meta.env.VITE_CHATID
                  }&text=${post}&parse_mode=html`,
                  true,
                );
                api.send();
                setState({
                  name: "",
                  phone: "",
                  dec: "",
                });
              }}
              className="flex flex-col gap-6 text-white"
            >
              <Box className="flex flex-col gap-1">
                <label
                  htmlFor="name"
                  className="cursor-pointer body3 text-blue-100 ms-3"
                >
                  {t("contact_name")}
                </label>
                <label htmlFor="name" className="input text-grey-700">
                  <input
                    required
                    id="name"
                    type="text"
                    name="name"
                    value={state.name}
                    placeholder={t("contact_name_plh")}
                    onChange={(e) => {
                      setState((prev) => ({ ...prev, name: e.target.value }));
                    }}
                  />
                  <AiOutlineUser className="text-[1.7rem] text-grey-400" />
                </label>
              </Box>
              <Box className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="cursor-pointer body3 text-blue-100 ms-3"
                >
                  {t("contact_phone")}
                </label>
                <label htmlFor="phone" className="input text-grey-700">
                  <input
                    required
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formatPhoneNumber(state?.phone)}
                    placeholder={t("contact_phone_plh")}
                    onChange={(e) => {
                      setState((prev) => ({
                        ...prev,
                        phone:
                          e.target.value.replace(/[^0-9]+/g, "") == "998"
                            ? ""
                            : e.target.value
                                .replace(/[^0-9]+/g, "")
                                .substring(0, 12),
                      }));
                    }}
                  />
                  <IoCallOutline className="text-[1.7rem] text-grey-400" />
                </label>
              </Box>
              <Box className="flex flex-col gap-2">
                <label
                  htmlFor="description"
                  className="cursor-pointer body3 text-blue-100 ms-3"
                >
                  {t("contact_commentary1")}
                </label>
                <TextareaAutosize
                  required
                  id="description"
                  name="description"
                  aria-label="Your message"
                  minRows={7}
                  maxRows={100}
                  placeholder={t("contact_commentary2")}
                  className="input text-grey-700 rounded-[16px] text-[15px] placeholder:text-[15px] placeholder:text-brand-900 placeholder:opacity-50"
                  value={state.dec}
                  onChange={(e) => {
                    setState((prev) => ({ ...prev, dec: e.target.value }));
                  }}
                />
              </Box>
              <Button
                size="large"
                variant="contained"
                className="bg-grey-900 rounded-[48px] capitalize title3"
                type="submit"
              >
                {t("submit")}
              </Button>
            </Form>
          </Box>
        </Section>
      </Main>
    </>
  );
};

export default Contact;
