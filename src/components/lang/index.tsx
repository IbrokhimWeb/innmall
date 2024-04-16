//todo CUSTOM
import { tokens } from "../../style/theme";
import { Description, Section } from "../../style";

//todo STYLED COMPONENTS
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Box, useTheme } from "@mui/material";

//todo ASSETS
import { FaChevronDown } from "react-icons/fa6";

//todo I18NEXT
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface CustomLangProps {
  anchorEl: HTMLElement | null;
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>;
}

const Lang = ({ anchorEl, setAnchorEl }: CustomLangProps) => {
  const theme = useTheme();
  const colors = tokens(theme?.palette?.mode);
  const { t } = useTranslation();

  const [selectedLang, setSelectedLang] = useState(
    localStorage.getItem("i18nextLng") || "uz",
  );

  useEffect(() => {
    setSelectedLang(localStorage.getItem("i18nextLng") || "uz");
  }, []);

  const langs = [
    {
      lang: "uz",
      icon: "flag-icon-uz",
      text: "O’zbekcha",
    },
    {
      lang: "ru",
      icon: "flag-icon-ru",
      text: "Русский",
    },
    {
      lang: "en",
      icon: "flag-icon-gb",
      text: "English",
    },
  ];

  return (
    <Section>
      <Button
        id="basic-button"
        aria-controls={anchorEl ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={anchorEl ? "true" : undefined}
        onClick={(e) => setAnchorEl(e.currentTarget)}
        startIcon={
          <span
            className={`flag-icon  flag-icon-${
              localStorage.getItem("i18nextLng") == "en"
                ? "gb"
                : localStorage.getItem("i18nextLng")
            } flag-icon-squared`}
            style={{ borderRadius: "50%" }}
          />
        }
        sx={{
          borderRadius: "8px",
          color: "#FFFFFF !important",
          "&:hover": {
            backgroundColor: "#F5F6F8",
          },
        }}
      >
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            textTransform: "capitalize",
            color: "#9EA1A7 !important",
            fontSize: "16px",
            fontWeight: 400,
          }}
          className="flex items-center "
        >
          <Description className="body3 text-grey-300">
            {t(String(localStorage.getItem("i18nextLng")))}
          </Description>
          <FaChevronDown
            style={{
              transition: "transform 300ms",
              transform: anchorEl ? "rotate(180deg)" : "none",
              fontSize: "14px",
              color: "#9EA1A7 !important",
            }}
            className={`text-grey-300 duration-300 ${
              anchorEl && " rotate-180"
            } text-sm`}
          />
        </Box>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={() => {
          setAnchorEl(null);
        }}
        PaperProps={{
          sx: {
            borderRadius: "16px",
            overflow: "hidden",
            width: "160px",
            padding: "0 10px !important",
            boxShadow: "none",
            border: "1px solid #E7E7E9",
          },
        }}
      >
        {langs?.map(({ lang, icon, text }) => (
          <Box
            key={icon + text}
            sx={{
              paddingY: "5px",
              borderTop: lang === "ru" ? "1px solid #E7E7E9" : "",
              borderBottom: lang === "ru" ? "1px solid #E7E7E9" : "",
            }}
          >
            <MenuItem
              disabled={lang === "en"}
              onClick={() => {
                i18next.changeLanguage(lang);
                setAnchorEl(null);
              }}
              sx={{
                borderRadius: "8px",
                padding: "0px",
                backgroundColor:
                  localStorage.getItem("i18nextLng") === lang
                    ? colors.card[100]
                    : "transparent",
              }}
            >
              <Button
                key={lang}
                id="basic-button"
                aria-controls={anchorEl ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={anchorEl ? "true" : undefined}
                onClick={(e) => setAnchorEl(e.currentTarget)}
                startIcon={
                  <span
                    className={`flag-icon ${icon} flag-icon-squared`}
                    style={{ borderRadius: "50%" }}
                  />
                }
                sx={{
                  gap: "4px",
                  textTransform: "capitalize",
                  color:
                    selectedLang === lang
                      ? "#FFFFFF !important"
                      : "#F5F6F8 !important",
                  fontSize: "16px",
                  fontWeight: 400,
                  "&:hover": {
                    backgroundColor: "#F5F6F8",
                  },
                }}
              >
                <Description
                  sx={{
                    gap: "4px",
                    textTransform: "capitalize",
                    color: "#3D4250 !important",
                    fontSize: "16px",
                    fontWeight: 400,
                  }}
                  className="body3 text-grey-700"
                >
                  {text}
                </Description>
              </Button>
            </MenuItem>
          </Box>
        ))}
      </Menu>
    </Section>
  );
};

export default Lang;
