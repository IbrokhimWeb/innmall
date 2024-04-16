import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

//todo MUI COMPONENTS
import Step from "@mui/material/Step";
import Stepper from "@mui/material/Stepper";
import StepLabel from "@mui/material/StepLabel";
import { Box, Card, Button, FormControlLabel, Checkbox } from "@mui/material";

//todo COMPONENTS AND STYLED COMPONENTS
import Lang from "../../components/lang";
import {
  Description,
  Image,
  Main,
  MyButton,
  QontoConnector,
  QontoStepIconRoot,
  Section,
} from "../../style";

//todo ICONS
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import Logo from "../../assets/logo.svg";

//todo STEPS
import { StepOne } from "./stepOne";
import { StepTwo } from "./stepTwo";
import { StepFour } from "./stepFour";
import { StepThree } from "./stepThree";
import { CustomError } from "../../utils/types";
import { handleValidationData } from "../../utils/helpers";

interface CustomStepIcon {
  icon: number;
  active: boolean;
  className: string;
  completed: boolean;
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

const SignUp = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [next, setNext] = useState<boolean>(true);
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [agree, setAgree] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [state, setState] = useState<CustomState>({
    inn: "",
    icon: [],
    name: "",
    brand: "",
    phone: "",
    logo: null,
    qqs: false,
    region: "",
    username: "",
    bank_mfo: "",
    password: "",
    last_name: "",
    bank_name: "",
    first_name: "",
    main_phone: "",
    address_uz: "",
    address_ru: "",
    region_name: "",
    bank_account: "",
    installment: false,
    confirm_password: "",
    latitude: 69.290191829,
    longitude: 41.318643834,
  });

  const steps: Array<string> = [
    t("steps1"),
    t("steps2"),
    t("steps3"),
    t("steps4"),
  ];

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("firm_name", state?.brand);
    formData.append("phone", state?.main_phone);
    formData.append("icon", state?.logo as File);
    formData.append("address_uz", state?.address_uz);
    formData.append("address_ru", state?.address_ru);
    formData.append("latitude", state?.latitude?.toFixed(9).toString());
    formData.append("longitude", state?.longitude?.toFixed(9).toString());
    formData.append("username", state?.username);
    formData.append("password", state?.password);
    formData.append("name", state?.name);
    formData.append("inn", state?.inn);
    formData.append("firm_bank", state?.bank_name);
    formData.append("mfo", state?.bank_mfo);
    formData.append("firm_bank_account", state?.bank_account);
    formData.append("second_phone", state?.phone);
    formData.append("first_name", state?.first_name);
    formData.append("last_name", state?.last_name);
    state?.icon?.forEach((e) => e && formData.append("docs", e));
    formData.append("has_vat", state?.qqs.toString());
    formData.append("deferred_payments", state?.installment.toString());
    formData.append("region", state?.region.toString());

    try {
      const resp = await axios.post(
        `https://api.innmall.uz/api/v1/marketplace/dashboard/shop-register-detail/metadata/`,
        formData,
        {
          headers: {
            "Accept-Language": localStorage.getItem("i18nextLng") || "uz",
          },
        },
      );

      if (resp?.data?.success) {
        enqueueSnackbar(t("res_message_success"), { variant: "success" });
        handleValidationData(state);

        navigate("/");
      }
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

  const handleNext = () => {
    let newSkipped = skipped;
    if (skipped.has(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 1);
  };

  const Steps = {
    "0": <StepOne />,
    "1": <StepTwo state={state} setState={setState} setNext={setNext} />,
    "2": <StepThree state={state} setState={setState} setNext={setNext} />,
    "3": <StepFour state={state} />,
  };

  return (
    <Main className="step_main_bg">
      <Section className="w-full bg-white fixed top-0 z-50 border-b border-solid border-grey-50 ">
        <Section className="header_container h-[88px] flex items-center justify-between max1280:h-[60px]">
          <Image
            src={Logo}
            alt="logo"
            onClick={() => {
              navigate("/");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="cursor-pointer"
          />
          <Lang anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
        </Section>
      </Section>
      {activeStep === steps.length ? null : (
        <Box className="relative pt-[150px] pb-[50px] max1280:pt-[90px] max768:pb-[70px]">
          <Stepper
            sx={{
              width: "100%",
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 1em",
            }}
            alternativeLabel
            activeStep={activeStep}
            connector={<QontoConnector />}
            className="pb-10 w-full max768:pb-5"
          >
            {steps.map((label: string, index: number) => (
              <Step key={label}>
                <StepLabel
                  StepIconComponent={QontoStepIcon}
                  className="max768:hidden"
                >
                  {label}
                </StepLabel>
                <StepLabel
                  StepIconComponent={QontoStepIcon}
                  className="hidden max768:block"
                >
                  {index === activeStep ? label : null}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box className="step_container">
            <Card
              className={`w-full bg-white  min-h-[70vh] max-h-auto flex flex-col rounded-[24px] p-10 max1000:p-5`}
              style={{
                boxShadow: "1px 1px 16px 0px #0000000D",
                border: "1px solid #E7E7E9",
              }}
            >
              <Box>{Steps[activeStep as never]}</Box>
              <Box
                className={`flex justify-between items-center  gap-5 ${
                  activeStep === 0 ? "max768:flex-col" : "max768:justify-center"
                }`}
              >
                {activeStep === 0 ? (
                  <Box className="max768:flex max768:justify-start w-full">
                    <FormControlLabel
                      required
                      control={
                        <Checkbox
                          checked={agree}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setAgree(e.target.checked)
                          }
                        />
                      }
                      label={t("signup_check")}
                    />
                  </Box>
                ) : (
                  <Box>
                    <MyButton
                      onClick={() => {
                        setActiveStep((prevActiveStep) => prevActiveStep - 1);
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      <FaArrowLeft className="text-sm" />
                    </MyButton>
                  </Box>
                )}

                {activeStep === 0 ? (
                  <Box className="flex justify-end w-full">
                    <MyButton onClick={handleNext} disabled={!agree}>
                      <FaArrowRight className="text-sm" />
                    </MyButton>
                  </Box>
                ) : activeStep === steps.length - 1 ? (
                  <Box className="max768:w-full">
                    <Button
                      onClick={handleSubmit}
                      variant="contained"
                      className="rounded-[24px] bg-blue-900 p-[20px] w-full title3 capitalize max768:p-[10px]"
                      endIcon={<FaArrowRight className="text-sm" />}
                    >
                      {t("save")}
                    </Button>
                  </Box>
                ) : (
                  <Box>
                    <MyButton onClick={handleNext} disabled={next}>
                      <FaArrowRight className="text-sm" />
                    </MyButton>
                  </Box>
                )}
              </Box>
            </Card>
          </Box>
        </Box>
      )}
    </Main>
  );
};

const QontoStepIcon = (props: CustomStepIcon) => {
  const { active, completed, className, icon } = props;

  return (
    <QontoStepIconRoot className={className}>
      {completed ? (
        <Box
          sx={{ border: "1.5px solid #099EE2", backgroundColor: "white" }}
          className="w-[45px] h-[45px] rounded-full flex justify-center items-center text-blue-900 bg-white z-10 max768:w-[28px] max768:h-[28px]"
        >
          <FaCheck />
        </Box>
      ) : active ? (
        <Box
          sx={{
            borderRadius: "32px 32px 4px 32px",
            rotate: "45deg",
          }}
          className="w-[45px] h-[45px] flex justify-center items-center bg-blue-900 overflow-hidden text-white z-10 max768:w-[28px] max768:h-[28px]"
        >
          <Description
            sx={{
              rotate: "-45deg",
            }}
          >
            {icon}
          </Description>
        </Box>
      ) : (
        <Box
          sx={{
            border: "1px solid #E7E7E9",
            backgroundColor: "white",
            margin: "0 auto",
          }}
          className="w-[45px] h-[45px] rounded-full flex justify-center items-center text-grey-500 bg-white z-10 max768:w-[28px] max768:h-[28px]"
        >
          <Description>{icon}</Description>
        </Box>
      )}
    </QontoStepIconRoot>
  );
};

export default SignUp;
