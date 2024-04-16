import { useTranslation } from "react-i18next";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

//todo MUI COMPONENTS
import { Box, IconButton } from "@mui/material";

//todo COMPONENTS AND STYLED COMPONENTS
import { HelperText, Input, Label, Section, Space } from "../../style";

//todo UTILS
import FileUpload from "../../components/upload";
import Passport1 from "../../assets/passport1.png";
import Passport2 from "../../assets/passport2.png";
import { formatPhoneNumber } from "../../utils/helpers";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

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

interface CustomProps {
  state: CustomState;
  setState: Dispatch<SetStateAction<CustomState>>;
  setNext: Dispatch<SetStateAction<boolean>>;
}

type CustomPassword = "password" | "confirm_password" | false;

export const StepTwo = ({ state, setNext, setState }: CustomProps) => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState<CustomPassword>(false);

  const uploadFile = (file: File, item: number) => {
    if (file) {
      if (item) {
        setState((prev: CustomState) => ({
          ...prev,
          icon: [prev.icon[0], file],
        }));
      } else {
        setState((prev: CustomState) => ({
          ...prev,
          icon: [file, prev.icon[1]],
        }));
      }
    }
  };

  const handleChange = ({ name, value }: { name: string; value: string }) => {
    setState((prev: CustomState) => ({ ...prev, [name]: value }));
  };
  const handleDeleteOne = () => {
    setState((prev: CustomState) => ({ ...prev, icon: [null, prev.icon[1]] }));
  };
  const handleDeleteTwo = () => {
    setState((prev: CustomState) => ({ ...prev, icon: [prev.icon[0], null] }));
  };

  const {
    icon,
    phone,
    password,
    username,
    last_name,
    first_name,
    main_phone,
    confirm_password,
  } = state;

  setNext(
    !(
      icon[0] &&
      icon[1] &&
      phone.length === 12 &&
      username.length >= 3 &&
      username.length <= 36 &&
      password.length >= 8 &&
      password.length <= 50 &&
      first_name.length >= 3 &&
      first_name.length <= 36 &&
      last_name.length >= 3 &&
      last_name.length <= 36 &&
      main_phone.length === 12 &&
      confirm_password.length > 3 &&
      confirm_password.length < 50 &&
      password === confirm_password
    ),
  );

  return (
    <Section className="h-full">
      <Box className="grid grid-cols-2 gap-7 pt-2 max768:grid-cols-1">
        <Box className="flex flex-col gap-2">
          <Label htmlFor="last_name">{t("lastname")}</Label>
          <Input
            required
            id="last_name"
            type="text"
            name="last_name"
            value={last_name}
            className={`${
              (last_name.length < 3 && last_name.length !== 0) ||
              last_name.length == 37
                ? "inputHoverError"
                : "inputHoverSuccess"
            } `}
            placeholder={t("lastname_plh")}
            onChange={(
              e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => (e.target.value.length <= 37 ? handleChange(e.target) : null)}
          />
          <HelperText>
            {last_name.length < 3 && last_name.length !== 0
              ? t("min3")
              : last_name.length == 37
                ? t("max36")
                : ""}
          </HelperText>
        </Box>
        <Box className="flex flex-col gap-2">
          <Label htmlFor="first_name">{t("surname")}</Label>
          <Input
            required
            id="first_name"
            type="text"
            name="first_name"
            value={first_name}
            className={`${
              (first_name.length < 3 && first_name.length !== 0) ||
              first_name.length == 37
                ? "inputHoverError"
                : "inputHoverSuccess"
            }`}
            placeholder={t("surname_plh")}
            onChange={(
              e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => (e.target.value.length <= 37 ? handleChange(e.target) : null)}
          />
          <HelperText>
            {first_name.length < 3 && first_name.length !== 0
              ? t("min3")
              : first_name.length == 37
                ? t("max36")
                : ""}
          </HelperText>
        </Box>
        <Box className="flex flex-col gap-2">
          <Label htmlFor="main_phone">{t("main_phone")}</Label>
          <Input
            required
            id="main_phone"
            type="text"
            name="main_phone"
            value={formatPhoneNumber(main_phone)}
            className={`${
              main_phone.length !== 12 && main_phone.length > 0
                ? "inputHoverError"
                : "inputHoverSuccess"
            }`}
            placeholder={t("phone_plh")}
            onChange={(e) => {
              setState((prev: CustomState) => ({
                ...prev,
                main_phone:
                  e.target.value.replace(/[^0-9]+/g, "") == "998"
                    ? ""
                    : e.target.value.replace(/[^0-9]+/g, "").substring(0, 12),
              }));
            }}
          />
          <HelperText>
            {main_phone.length !== 12 && main_phone.length > 0
              ? t("phone_validate")
              : ""}
          </HelperText>
        </Box>
        <Box className="flex flex-col gap-2">
          <Label htmlFor="phone">{t("phone")}</Label>
          <Input
            required
            id="phone"
            type="text"
            name="phone"
            value={formatPhoneNumber(phone)}
            className={`${
              phone.length !== 12 && phone.length > 0
                ? "inputHoverError"
                : "inputHoverSuccess"
            }`}
            placeholder={t("phone_plh")}
            onChange={(e) => {
              setState((prev: CustomState) => ({
                ...prev,
                phone:
                  e.target.value.replace(/[^0-9]+/g, "") == "998"
                    ? ""
                    : e.target.value.replace(/[^0-9]+/g, "").substring(0, 12),
              }));
            }}
          />
          <HelperText>
            {phone.length !== 12 && phone.length > 0 ? t("phone_validate") : ""}
          </HelperText>
        </Box>
        <Box className="flex flex-col gap-2">
          <Label htmlFor="username">{t("username")}</Label>
          <Input
            id="username"
            type="text"
            name="username"
            value={username}
            onChange={(
              e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => (e.target.value.length <= 21 ? handleChange(e.target) : null)}
            required
            className={`${
              (username.length < 3 && username.length !== 0) ||
              username.length == 21
                ? "inputHoverError"
                : "inputHoverSuccess"
            }`}
            placeholder={t("username")}
          />
          <HelperText>
            {username.length < 3 && username.length !== 0
              ? t("min3")
              : username.length == 21
                ? t("max20")
                : ""}
          </HelperText>
        </Box>
        <Box className="cursor-pointer flex flex-col justify-end mb-2">
          <Label
            htmlFor="username"
            className=" text-[#333333] text-[14px] font-[400] leading-[24px]"
          >
            {t("username_label1")}
          </Label>
          <Label
            htmlFor="username"
            className="font-[400] text-[#154E60] text-[14px] leading-[16.71px] opacity-50"
          >
            {t("username_label2")}
          </Label>
        </Box>
        <Box className="flex flex-col gap-2">
          <Label htmlFor="password">{t("password")}</Label>
          <label
            htmlFor="password"
            className={`password_input ${
              password.length < 8 && password.length > 0
                ? "inputHoverError"
                : "inputHoverSuccess"
            }`}
          >
            <input
              required
              id="password"
              type={showPassword === "password" ? "text" : "password"}
              value={password}
              name="password"
              placeholder={t("password_plh")}
              onChange={(
                e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
              ) =>
                e.target.value.length <= 50 ? handleChange(e.target) : null
              }
            />
            <IconButton
              onClick={() =>
                setShowPassword((prev) =>
                  prev === "password" ? false : "password",
                )
              }
            >
              {showPassword === "password" ? (
                <AiOutlineEye />
              ) : (
                <AiOutlineEyeInvisible />
              )}
            </IconButton>
          </label>
          <HelperText>
            {password.length < 8 && password.length !== 0
              ? t("min8")
              : password.length == 51
                ? t("max50")
                : ""}
          </HelperText>
        </Box>
        <Box className="flex flex-col gap-2">
          <Label htmlFor="confirm_password">{t("confirm_password")}</Label>
          <label
            htmlFor="confirm_password"
            className={`password_input ${
              (confirm_password.length > 0 && password !== confirm_password) ||
              (confirm_password.length < 8 && confirm_password.length > 0)
                ? "inputHoverError"
                : "inputHoverSuccess"
            }`}
          >
            <input
              required
              id="confirm_password"
              type={showPassword === "confirm_password" ? "text" : "password"}
              name="confirm_password"
              value={confirm_password}
              disabled={password.length < 8}
              placeholder={t("confirm_password_plh")}
              onChange={(
                e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
              ) =>
                e.target.value.length <= 51 ? handleChange(e.target) : null
              }
            />
            <IconButton
              className="text-[#292D32] opacity-50"
              disabled={password.length < 8}
              onClick={() =>
                setShowPassword((prev) =>
                  prev === "confirm_password" ? false : "confirm_password",
                )
              }
            >
              {showPassword === "confirm_password" ? (
                <AiOutlineEye />
              ) : (
                <AiOutlineEyeInvisible />
              )}
            </IconButton>
          </label>
          <HelperText>
            {confirm_password !== password && confirm_password.length > 0
              ? t("password_validate")
              : ""}
          </HelperText>
        </Box>
      </Box>
      <Box className="w-full">
        <Box className="grid grid-cols-2 pt-8 gap-7 max768:grid-cols-1">
          <FileUpload
            onDrop={(files: Array<File>) => uploadFile(files[0], 0)}
            file={icon[0]}
            label={t("password_image_one")}
            defaultImg={Passport1}
            handleDelete={handleDeleteOne}
          />
          <FileUpload
            onDrop={(files: Array<File>) => uploadFile(files[0], 1)}
            file={icon[1]}
            label={t("password_image_two")}
            defaultImg={Passport2}
            handleDelete={handleDeleteTwo}
          />
        </Box>
        <Space />
      </Box>
    </Section>
  );
};
