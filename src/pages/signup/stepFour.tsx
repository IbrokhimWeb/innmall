//todo MUI COMPONENTS
import { Box, FormControlLabel } from "@mui/material";

//todo COMPONENTS AND STYLED COMPONENTS
import { Section, Description, IOSSwitch } from "../../style";
import { useTranslation } from "react-i18next";
import YMap from "../../components/ymap";
import { formatPhoneNumber } from "../../utils/helpers";
import FileUpload from "../../components/upload";

interface CustomState {
  icon: Array<File | null>;
  inn: string;
  qqs: boolean;
  name: string;
  phone: string;
  brand: string;
  region: string;
  username: string;
  latitude: number;
  bank_mfo: string;
  password: string;
  longitude: number;
  logo: File | null;
  bank_name: string;
  last_name: string;
  main_phone: string;
  first_name: string;
  address_uz: string;
  address_ru: string;
  bank_account: string;
  installment: boolean;
  region_name: string;
  confirm_password: string;
}

interface CustomStepFourType {
  state: CustomState;
}

export const StepFour = ({ state }: CustomStepFourType) => {
  const { t } = useTranslation();
  const {
    inn,
    qqs,
    name,
    phone,
    brand,
    logo,
    icon,
    bank_mfo,
    latitude,
    username,
    bank_name,
    longitude,
    last_name,
    address_uz,
    address_ru,
    first_name,
    main_phone,
    installment,
    bank_account,
    region_name,
  } = state;

  return (
    <Section className="w-full">
      <Box className="w-full grid grid-cols-2 gap-5 mb-6 max768:grid-cols-1 min1100:grid-cols-4">
        <Box className="flex flex-col gap-2">
          <Description className="body3 text-grey-400">
            {t("surname")}
          </Description>
          <Description className="body3 text-grey-700">
            {first_name}
          </Description>
        </Box>
        <Box className="flex flex-col gap-2">
          <Description className="body3 text-grey-400">
            {t("lastname")}
          </Description>
          <Description className="body3 text-grey-700">{last_name}</Description>
        </Box>
        <Box className="flex flex-col gap-2">
          <Description className="body3 text-grey-400">
            {t("main_phone")}
          </Description>
          <Description className="body3 text-grey-700">
            {formatPhoneNumber(main_phone)}
          </Description>
        </Box>
        <Box className="flex flex-col gap-2">
          <Description className="body3 text-grey-400">
            {t("phone")}
          </Description>
          <Description className="body3 text-grey-700">
            {formatPhoneNumber(phone)}
          </Description>
        </Box>
        <Box className="flex flex-col gap-2">
          <Description className="body3 text-grey-400">
            {t("username")}
          </Description>
          <Description className="body3 text-grey-700">{username}</Description>
        </Box>
        <Box className="flex flex-col gap-2">
          <Description className="body3 text-grey-400">
            {t("password")}
          </Description>
          <Description className="body3 text-grey-700">••••••••</Description>
        </Box>
      </Box>
      <Box sx={{ borderTop: "1px solid #E7E7E9" }} className="w-full p-1"></Box>
      <Box className="w-full grid grid-cols-2 gap-5 mt-5 mb-6 max768:grid-cols-1 min1100:grid-cols-4">
        <Box className="flex flex-col gap-2 mb-5 ">
          <Description className="body3 text-grey-400">
            {t("shop_name")}
          </Description>
          <Description className="body3 text-grey-700">{name}</Description>
        </Box>
        <Box className="flex flex-col gap-2">
          <Description className="body3 text-grey-400">
            {t("brand")}
          </Description>
          <Description className="body3 text-grey-700">{brand}</Description>
        </Box>
        <Box className="flex flex-col gap-2">
          <Description className="body3 text-grey-400">
            {t("address_ru")}
          </Description>
          <Description className="body3 text-grey-700">
            {address_ru}
          </Description>
        </Box>
        <Box className="flex flex-col gap-2">
          <Description className="body3 text-grey-400">
            {t("address_uz")}
          </Description>
          <Description className="body3 text-grey-700">
            {address_uz}
          </Description>
        </Box>
        <Box className="flex flex-col gap-2">
          <Description className="body3 text-grey-400">
            {t("region")}
          </Description>
          <Description className="body3 text-grey-700">
            {region_name}
          </Description>
        </Box>
        <Box className="flex flex-col gap-2">
          <Description className="body3 text-grey-400">
            {t("bank_name")}
          </Description>
          <Description className="body3 text-grey-700">{bank_name}</Description>
        </Box>
        <Box className="flex flex-col gap-2">
          <Description className="body3 text-grey-400">
            {t("bank_account")}
          </Description>
          <Description className="body3 text-grey-700">
            {bank_account}
          </Description>
        </Box>
        <Box className="flex flex-col gap-2">
          <Description className="body3 text-grey-400">
            {t("bank_mfo")}
          </Description>
          <Description className="body3 text-grey-700">{bank_mfo}</Description>
        </Box>
        <Box className="flex flex-col gap-2">
          <Description className="body3 text-grey-400">{t("inn")}</Description>
          <Description className="body3 text-grey-700">{inn}</Description>
        </Box>
        <FormControlLabel
          control={<IOSSwitch checked={qqs} sx={{ m: 1 }} />}
          label={t("qqs")}
        />
        <FormControlLabel
          control={<IOSSwitch checked={installment} sx={{ m: 1 }} />}
          label={t("installment")}
        />
      </Box>
      <Box sx={{ borderTop: "1px solid #E7E7E9" }} className="w-full p-1"></Box>
      <Section className="grid grid-cols-2 gap-5 my-5 items-start  max768:grid-cols-1">
        <FileUpload
          file={icon[0]}
          label={t("password_image_one")}
          isUpload={true}
        />
        <FileUpload
          file={icon[1]}
          label={t("password_image_two")}
          isUpload={true}
        />
        <FileUpload file={logo} label={t("logo_label")} isUpload={true} />
        <Box>
          <Description className="body3 text-grey-700 cursor-pointer ms-[10px] mb-[10px]">
            {t("ymap_label")}
          </Description>
          <Box
            sx={{ border: "1px solid #E7E7E9" }}
            className="w-full h-[180px] rounded-[10px] overflow-hidden max768:h-[190px]"
          >
            <YMap onChange={() => {}} value={[longitude, latitude]} />
          </Box>
        </Box>
      </Section>
    </Section>
  );
};
