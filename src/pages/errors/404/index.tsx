import { Description, Image, Main, Title } from "../../../style";

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Image404 from "../../../assets/404.png";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <Main className="w-full h-screen flex flex-col items-center justify-center bg-white">
      <Image
        src={Image404}
        alt="image"
        className="w-[25em] mb-10 max450:w-[18em]"
      />
      <Title className="w-full text-center text-[2.2em] max450:text-[2em]">
        404: Siz qidirayotgan sahifa bu yerda emas
      </Title>
      <Description className="w-full text-center px-10">
        Siz yo noaniq yo'lni sinab ko'rdingiz yoki bu erga noto'g'ri keldingiz.
        Qaysi biri bo'lishidan qat'iy nazar, navigatsiyadan foydalanib ko'ring.
      </Description>
      <Button
        color="info"
        className="px-10 mt-12 font-bold"
        onClick={() => navigate("/")}
      >
        Ortga qaytish
      </Button>
    </Main>
  );
};

export default Error404;
