import { styled } from "@mui/material/styles";
import {
  StepConnector,
  Switch,
  SwitchProps,
  stepConnectorClasses,
} from "@mui/material";
import { Link } from "react-router-dom";

export const Main = styled("main")(() => ({}));

export const Section = styled("section")(() => ({}));

export const Image = styled("img")(() => ({}));

export const Input = styled("input")`
  width: 100%;
  display: flex;
  gap: 10px;
  font-size: 16px;
  font-weight: 400;
  padding: 14px 16px;
  border-radius: 16px;
  color: #3d4250;
  background: #f5f6f8;
  border: 1px solid transparent;

  &::placeholder {
    color: #858991;
  }
`;

export const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#099EE2",
      background: "red",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#099EE2",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#E7E7E9",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

export const QontoStepIconRoot = styled("div")(() => ({
  color: "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  "& .QontoStepIcon-completedIcon": {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

export const NavbarItem = styled(Link)(() => ({
  textDecoration: "none",
  cursor: "pointer",
}));

export const MyButton = styled("button")(({ disabled }) => ({
  height: "64px",
  width: "64px",
  cursor: disabled ? "not-allowed" : "pointer",
  border: "1px solid #E7E7E9",
  borderRadius: "24px",
  background: disabled ? "#ffffff" : "#ffffff",
  color: disabled ? "#B6B8BD" : "#000000",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  ":hover": {
    background: disabled ? "#ffffff" : "#099EE2",
    color: disabled ? "#B6B8BD" : "#ffffff",
  },
  "@media (max-width: 768px)": {
    height: "48px",
    width: "48px",
    borderRadius: "16px",
  },
}));

export const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(() => ({
  width: 50,
  height: 24,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(26px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#099EE2",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#E7E7E9",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: "#000",
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 20,
    height: 20,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E7E7E9",
    opacity: 1,
  },
}));

export const Label = styled("label")(() => ({
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "23.2px",
  marginLeft: "10px",
  color: "#3D4250",
  "@media (max-width: 768px)": {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
  },
}));

export const HelperText = styled("p")(() => ({
  color: "#fa1d1d",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "23.2px",
  marginLeft: "10px",
  "@media (max-width: 768px)": {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
  },
}));

export const Space = styled("div")(() => ({
  width: "100%",
  height: "20px",
}));

export const Form = styled("form")(() => ({}));

export const Title = styled("h1")(() => ({
  fontSize: "1.4993rem",
  fontWeight: 600,
  letterSpacing: "0.18px",
}));

export const Heading = styled("h1")(() => ({}));

export const Description = styled("p")(() => ({}));
