import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

//todo MUI COMPONENTS
import { Box, TextField, FormControlLabel, Autocomplete } from "@mui/material";

//todo COMPONENTS AND STYLED COMPONENTS
import FileUpload from "../../components/upload";
import { useTranslation } from "react-i18next";
import {
  Description,
  HelperText,
  IOSSwitch,
  Input,
  Label,
  Section,
} from "../../style";
import YMap from "../../components/ymap";
import axios from "axios";
import LogoNotImage from "../../assets/logo_not_image.png";
import { CustomError } from "../../utils/types";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

interface CustomStep {
  state: CustomState;
  setState: Dispatch<SetStateAction<CustomState>>;
  setNext: Dispatch<SetStateAction<boolean>>;
}

interface CustomRegion {
  name: string;
  guid: string;
}

interface CustomDataType {
  region: CustomRegion | null;
  regionInputVal: string;
}

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

const sx = {
  ".MuiFormControl-root > div": {
    width: "100%",
    display: "flex",
    gap: "10px",
    fontSize: "16px",
    background: "#f5f6f8",
    borderRadius: "16px",
    color: "#858991",
  },

  ".MuiFormControl-root input": {
    padding: "10px 12px !important",
    color: "#3d4250 !important",

    "&::placeholder": {
      color: " #858991 !important",
      opacity: "100%",
      fontSize: "16px !important",
    },
  },

  ".MuiInputBase-root": {
    border: "none !important",
  },

  ".MuiOutlinedInput-notchedOutline": {
    border: "1px solid transparent !important",
  },
};

export const StepThree = (props: CustomStep) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { state, setNext, setState } = props;

  const [regions, setRegions] = useState<Array<CustomRegion>>([]);
  const [data, setData] = useState<CustomDataType>({
    region: null,
    regionInputVal: "",
  });

  useEffect(() => {
    const handleFetchRegions = async () => {
      try {
        const resp = await axios.get(
          `https://api.staging.innmall.uz/api/v1/marketplace/zone/regions/`,
          {
            headers: {
              "Accept-Language": localStorage.getItem("i18nextLng") || "uz",
            },
          },
        );

        setRegions(resp?.data?.data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          const customError = err as unknown as CustomError;

          if (customError.response.status === 500) {
            navigate("/500");
            enqueueSnackbar(t("500_error"), { variant: "error" });
          }
          if (!customError.response?.data?.success) {
            customError.response?.data?.errors?.map(
              ({ message, field }: { message: string; field: string }) =>
                enqueueSnackbar(`${message} ${field || ""}`, {
                  variant: "error",
                }),
            );
          } else {
            enqueueSnackbar(t("res_message_error"), { variant: "error" });
          }
        }
      }
    };
    handleFetchRegions();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setData((prev) => ({
      ...prev,
      region: { guid: state?.region, name: state?.region_name },
    }));
  }, [state]);

  function uploadFile(files: File[]) {
    if (files) {
      setState((prev: CustomState) => ({ ...prev, logo: files[0] }));
    }
  }

  const handleChange = ({ name, value }: { name: string; value: string }) => {
    if (name === "inn" || name === "bank_account" || name === "bank_mfo") {
      setState((prev: CustomState) => ({
        ...prev,
        [name]: value.replace(/[^0-9]+/g, ""),
      }));
    } else {
      setState((prev: CustomState) => ({ ...prev, [name]: value }));
    }
  };
  const handleLogoDelete = () => {
    setState((prev: CustomState) => ({ ...prev, logo: null }));
  };

  const {
    qqs,
    inn,
    name,
    logo,
    brand,
    latitude,
    bank_mfo,
    bank_name,
    longitude,
    address_uz,
    address_ru,
    installment,
    bank_account,
    region,
  } = state;

  setNext(
    !(
      logo &&
      region &&
      latitude !== 0 &&
      longitude !== 0 &&
      inn.length === 9 &&
      name.length >= 3 &&
      brand.length >= 3 &&
      name.length <= 36 &&
      brand.length <= 36 &&
      Boolean(Number(inn)) &&
      bank_mfo.length === 5 &&
      bank_name.length >= 3 &&
      bank_name.length <= 36 &&
      address_ru.length >= 3 &&
      address_uz.length >= 3 &&
      address_uz.length <= 200 &&
      address_ru.length <= 200 &&
      Boolean(Number(bank_mfo)) &&
      bank_account.length === 20 &&
      Boolean(Number(bank_account))
    ),
  );

  console.log(regions);

  return (
    <Section className="h-full">
      <Box className="grid grid-cols-2 gap-5 pt-2 max768:grid-cols-1">
        <Box className="flex flex-col gap-2">
          <Label htmlFor="brand">{t("brand")}</Label>
          <Input
            required
            id="brand"
            type="text"
            name="brand"
            value={brand}
            placeholder={`OOO "INNMALL"`}
            className={`${
              brand.length < 3 && brand.length !== 0
                ? "inputHoverError"
                : "inputHoverSuccess"
            }`}
            onChange={(
              e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => (e.target.value.length <= 37 ? handleChange(e.target) : null)}
          />
          <HelperText>
            {brand.length < 3 && brand.length !== 0
              ? t("min3")
              : brand.length == 37
                ? t("max36")
                : ""}
          </HelperText>
        </Box>
        <Box className="flex flex-col gap-2">
          <Label htmlFor="name">{t("shop_name")}</Label>
          <Input
            required
            id="name"
            type="text"
            name="name"
            value={name}
            placeholder="INNMALL"
            className={`${
              name.length < 3 && name.length !== 0
                ? "inputHoverError"
                : "inputHoverSuccess"
            }`}
            onChange={(
              e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => (e.target.value.length <= 37 ? handleChange(e.target) : null)}
          />
          <HelperText>
            {name.length < 3 && name.length !== 0
              ? t("min3")
              : name.length == 37
                ? t("max36")
                : ""}
          </HelperText>
        </Box>
        <Box className="flex flex-col gap-2">
          <Label htmlFor="address_uz">{t("address_uz")}</Label>
          <Input
            required
            id="name"
            type="text"
            name="address_uz"
            value={address_uz}
            placeholder={t("address_plh")}
            className={`${
              address_uz.length < 3 && address_uz.length !== 0
                ? "inputHoverError"
                : "inputHoverSuccess"
            }`}
            onChange={(
              e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => (e.target.value.length <= 201 ? handleChange(e.target) : null)}
          />
          <HelperText>
            {address_uz.length < 3 && address_uz.length !== 0
              ? t("min3")
              : address_uz.length == 201
                ? t("max200")
                : ""}
          </HelperText>
        </Box>
        <Box className="flex flex-col gap-2">
          <Label htmlFor="address_ru">{t("address_ru")}</Label>
          <Input
            required
            id="name"
            type="text"
            name="address_ru"
            value={address_ru}
            placeholder={t("address_plh")}
            className={`${
              address_ru.length < 3 && address_ru.length !== 0
                ? "inputHoverError"
                : "inputHoverSuccess"
            }`}
            onChange={(
              e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => (e.target.value.length <= 201 ? handleChange(e.target) : null)}
          />
          <HelperText>
            {address_ru.length < 3 && address_ru.length !== 0
              ? t("min3")
              : address_ru.length == 201
                ? t("max200")
                : ""}
          </HelperText>
        </Box>

        <Box className="flex flex-col gap-2">
          <Label htmlFor="region">{t("region")}</Label>

          <Autocomplete
            sx={sx}
            fullWidth
            size="small"
            options={regions}
            value={data?.region}
            inputValue={data?.regionInputVal}
            getOptionLabel={(option: CustomRegion) => option?.name}
            onChange={(_, newValue) => {
              if (newValue) {
                setData((prev) => ({ ...prev, region: null }));
                setState((prev: CustomState) => ({
                  ...prev,
                  region: newValue?.guid,
                  region_name: newValue?.name,
                }));
              }
            }}
            onInputChange={(_, newInputValue) => {
              setData((prev) => ({
                ...prev,
                regionInputVal: newInputValue || "",
              }));
            }}
            renderInput={(params) => (
              <TextField {...params} placeholder={t("region_plh")} />
            )}
          />
        </Box>
        <Box className="flex flex-col gap-2">
          <Label htmlFor="bank_name">{t("bank_name")}</Label>
          <Input
            required
            id="bank_name"
            type="text"
            name="bank_name"
            value={bank_name}
            placeholder={t("bank_name_plh")}
            className={`${
              bank_name.length < 3 && bank_name.length !== 0
                ? "inputHoverError"
                : "inputHoverSuccess"
            }`}
            onChange={(
              e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => (e.target.value.length <= 37 ? handleChange(e.target) : null)}
          />
          <HelperText>
            {bank_name.length < 3 && bank_name.length !== 0
              ? t("min3")
              : bank_name.length == 37
                ? t("max36")
                : ""}
          </HelperText>
        </Box>
        <Box className="flex flex-col gap-2">
          <Label htmlFor="bank_account">{t("bank_account")}</Label>
          <Input
            required
            id="bank_account"
            type="text"
            name="bank_account"
            value={bank_account}
            placeholder={t("bank_account_plh")}
            className={`${
              (bank_account.length < 20 && bank_account.length !== 0) ||
              (!bank_account && bank_account.length !== 0)
                ? "inputHoverError"
                : "inputHoverSuccess"
            }`}
            onChange={(
              e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => (e.target.value.length <= 20 ? handleChange(e.target) : null)}
          />
          <HelperText>
            {bank_account.length !== 20 && bank_account.length !== 0
              ? t("bank_account_validate1")
              : !Number(bank_account) && bank_account.length !== 0
                ? t("bank_account_validate2")
                : ""}
          </HelperText>
        </Box>
        <Box className="flex flex-col gap-2">
          <Label htmlFor="bank_mfo">{t("bank_mfo")}</Label>
          <Input
            required
            id="bank_mfo"
            type="text"
            name="bank_mfo"
            value={bank_mfo}
            placeholder={t("bank_mfo_plh")}
            className={`${
              (bank_mfo.length < 5 && bank_mfo.length !== 0) ||
              (!bank_mfo && bank_mfo.length !== 0)
                ? "inputHoverError"
                : "inputHoverSuccess"
            }`}
            onChange={(
              e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => (e.target.value.length <= 5 ? handleChange(e.target) : null)}
          />
          <HelperText>
            {bank_mfo.length !== 5 && bank_mfo.length !== 0
              ? t("bank_mfo_validate1")
              : !Number(bank_mfo) && bank_mfo.length !== 0
                ? t("bank_mfo_validate2")
                : ""}
          </HelperText>
        </Box>
        <Box className="flex flex-col gap-2">
          <Label htmlFor="inn">{t("inn")}</Label>
          <Input
            required
            id="inn"
            type="text"
            name="inn"
            value={inn}
            placeholder={t("inn_plh")}
            className={`${
              (inn.length < 9 && inn.length !== 0) || (!inn && inn.length !== 0)
                ? "inputHoverError"
                : "inputHoverSuccess"
            }`}
            onChange={(
              e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) =>
              e.target.value.replace(/[^0-9]+/g, "").length <= 9
                ? handleChange(e.target)
                : null
            }
          />
          <HelperText>
            {inn.length !== 9 && inn.length !== 0
              ? t("inn_validate1")
              : !Number(inn) && inn.length !== 0
                ? t("inn_validate2")
                : ""}
          </HelperText>
        </Box>
        <Box className="flex items-end pb-4 max768:pb-0">
          <FormControlLabel
            control={
              <IOSSwitch
                checked={qqs}
                sx={{ m: 1 }}
                onChange={() =>
                  setState((prev: CustomState) => ({
                    ...prev,
                    qqs: !qqs,
                  }))
                }
              />
            }
            label={t("qqs")}
            style={{ fontSize: "16px", color: "#0C1324" }}
          />
          <FormControlLabel
            control={
              <IOSSwitch
                checked={installment}
                sx={{ m: 1 }}
                onChange={() => {
                  setState((prev: CustomState) => ({
                    ...prev,
                    installment: !installment,
                  }));
                }}
              />
            }
            label={t("installment")}
            sx={{ fontSize: "16px !important", color: "#0C1324" }}
          />
        </Box>
      </Box>
      <Box className="grid grid-cols-2 gap-5 pt-5 mb-5 max768:grid-cols-1">
        <Box className="w-full">
          <FileUpload
            onDrop={uploadFile}
            file={logo}
            label={t("logo_label")}
            defaultImg={LogoNotImage}
            handleDelete={handleLogoDelete}
          />
        </Box>
        <Box>
          <Description className="body3 text-grey-700 cursor-pointer ms-[10px] mb-[10px]">
            {t("ymap_label")}
          </Description>
          <Box
            sx={{ border: "1px solid #E7E7E9" }}
            className="w-full h-[180px] rounded-[10px] overflow-hidden max768:h-[190px]"
          >
            <YMap
              onChange={([longitude, latitude]: number[]) =>
                setState((prev: CustomState) => ({
                  ...prev,
                  latitude,
                  longitude,
                }))
              }
              value={[+state.longitude, +state.latitude]}
            />
          </Box>
        </Box>
      </Box>
    </Section>
  );
};
