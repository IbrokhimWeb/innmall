//todo MUI COMPONENTS
import { Box } from "@mui/material";

//todo COMPONENTS AND STYLED COMPONENTS
import { useTranslation } from "react-i18next";
import { Description, Image, Space, Title } from "../../style";
import Conditions from "./conditions";
import Shadow from "../../assets/steponeshadow.png";

export const StepOne = () => {
  const { t } = useTranslation();

  return (
    <Box className="h-full -mr-8 max1000:-mr-3">
      <Title className="title1 text-grey-900 center_text_box text-center mb-5">
        {t("signup")}
      </Title>
      <Description className="title2 text-grey-600">{t("step")}</Description>
      <Space />
      <Box className="h-[550px] overflow-y-auto relative max900:h-[790px]">
        <Conditions />
        <Box className="sticky -bottom-1 left-0 right-0">
          <Image src={Shadow} className="w-full h-auto" />
        </Box>
      </Box>
      <Space />
    </Box>
  );
};
