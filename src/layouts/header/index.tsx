//todo REACT
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

//todo CUSTOM
import Lang from "../../components/lang";
import { tokens } from "../../style/theme";
import { Description, Image, NavbarItem, Section, Title } from "../../style";

//todo STYLED COMPONENTS
import {
  Box,
  List,
  Modal,
  Drawer,
  Button,
  ListItem,
  useTheme,
  IconButton,
  ListItemText,
  ListItemButton,
} from "@mui/material";

//todo ICONS
import { TiArrowDown } from "react-icons/ti";
import Logo from "../../assets/logo.svg";
import { IoCloseOutline } from "react-icons/io5";
import AppStoreQrCode from "../../assets/app_store_qr_code.png";
import GooglePlayQrCode from "../../assets/google_play_qr_code.png";
import AppStoreModal from "../../assets/app_store_modal.svg";
import GooglePlayModal from "../../assets/google_play_modal.svg";
import Burger from "../../assets/burger.svg";
import Close from "../../assets/close.svg";
import i18next from "i18next";

const Header = () => {
  const theme = useTheme();
  const colors = tokens(theme?.palette?.mode);
  const navigate = useNavigate();
  const { t } = useTranslation();

  document.body.style.backgroundColor = colors.body[100];

  const [state, setState] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: { key: string; type: string }) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
      setState(open);
    };

  const navs = [
    { name: t("about_us"), path: "about_us" },
    { name: t("safety"), path: "safety" },
    { name: t("how_it_works"), path: "how_it_works" },
    { name: t("advantages"), path: "advantages" },
    { name: t("faq"), path: "faq" },
    { name: t("contact"), path: "contact" },
  ];

  const handleScroll = (sectionId: string) => {
    setState(false);
    const element: HTMLElement | null = document.getElementById(sectionId);
    const offset = 100;
    const elementPosition = Number(element?.offsetTop) - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!state) {
      document.body.style.overflow = "auto";
    }
    if (state) {
      document.body.style.overflow = "hidden";
    }
  }, [state]);

  return (
    <Section className="w-full bg-white fixed z-50 border-b border-solid border-grey-50">
      <Box className="header_container flex items-center py-[20px] max768:py-[12px]">
        <Box className="w-full flex justify-between items-center">
          <Image
            src={Logo}
            alt="logo"
            className="cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
          <Box
            sx={{
              display: "flex",
              gap: "24px",
              alignItems: "center",
              justifyContent: "space-between",
              "@media (max-width: 1280px)": {
                display: "none",
              },
            }}
          >
            {navs?.map(({ name, path }) => (
              <NavbarItem
                key={name + path}
                aria-label={name}
                to="/"
                onClick={() => handleScroll(path)}
                className="body3 text-grey-300"
              >
                {name}
              </NavbarItem>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              "@media (max-width: 1280px)": {
                display: "none",
              },
            }}
          >
            <Lang anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
            <Button
              variant="contained"
              size="large"
              className="bg-blue-900 rounded-[48px] shadow-none max-[1250]:hidden"
              endIcon={<TiArrowDown className="text-[24px]" />}
              onClick={() => {
                setOpen(true);
              }}
            >
              <Description
                className="font-[600] capitalize text-[16px]"
                onClick={() => handleScroll("home")}
              >
                {t("download")}
              </Description>
            </Button>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: colors.button[100],
                "&:hover": { bgcolor: colors.button[100] },
              }}
              onClick={() => {
                window.location.href = "/sign-up";
                // navigate("/sign-up");
              }}
              className="rounded-[48px] capitalize shadow-none"
            >
              <Description className="font-[600] capitalize text-[16px] ">
                {t("sell_on_innMall")}
              </Description>
            </Button>
          </Box>
          <Modal
            open={open}
            onClose={() => {
              setOpen(false);
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
              bgcolor: "rgba(12, 19, 36, 0.5)",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "45%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                "@media (max-width: 768px)": {
                  top: "50%",
                  left: "50%",
                },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  gap: "25px",
                  alignItems: "start",
                  justifyContent: "center",
                  "@media (max-width: 768px)": {
                    flexDirection: "column",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                }}
              >
                <Box
                  sx={{
                    bgcolor: "white",
                    borderRadius: "24px",
                    width: "540px",
                    padding: "36px",
                    "@media (max-width: 768px)": {
                      padding: "24px",
                      width: "320px",
                    },
                  }}
                >
                  <Title
                    sx={{
                      textAlign: "center",
                      fontSize: "28px",
                      fontWeight: "700 !important",
                      color: "#242B3A",
                      "@media (max-width: 768px)": {
                        fontSize: "24px",
                        fontWeight: "600",
                      },
                    }}
                  >
                    {t("modal_title_download")}
                  </Title>
                  <Box
                    sx={{
                      display: "flex",
                      marginTop: "30px",
                      gap: "60px",
                      alignItems: "start",
                      justifyContent: "center",
                      "@media (max-width: 768px)": {
                        flexDirection: "column",
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "20px",
                        marginTop: "10px",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: "15px",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Image src={AppStoreQrCode} />
                      <Button
                        sx={{
                          display: "flex",
                          gap: "15px",
                          alignItems: "center",
                          cursor: "pointer",
                          textTransform: "capitalize",
                          "&:hover": {
                            backgroundColor: "#FFFFFF",
                          },
                          transition: "#FFFFFF 0.3s ease-in-out",
                        }}
                        href="https://apps.apple.com/uz/app/innmall/id1660757988"
                        target="_blank"
                      >
                        <Image src={AppStoreModal} />
                        <Title
                          sx={{
                            fontSize: "20px",
                            fontWeight: "600",
                            color: "#6D717C",
                            lineHeight: "26px",
                            textDecoration: "underline",
                          }}
                        >
                          App Store
                        </Title>
                      </Button>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        gap: "15px",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Image src={GooglePlayQrCode} />
                      <Button
                        sx={{
                          display: "flex",
                          gap: "15px",
                          alignItems: "center",
                          cursor: "pointer",
                          textTransform: "capitalize",
                          "&:hover": {
                            backgroundColor: "#FFFFFF",
                          },
                          transition: "#FFFFFF 0.3s ease-in-out",
                        }}
                        href="https://play.google.com/store/apps/details?id=uz.innmall"
                        target="_blank"
                      >
                        <Image src={GooglePlayModal} />
                        <Title
                          sx={{
                            fontSize: "20px",
                            fontWeight: "600",
                            color: "#6D717C",
                            lineHeight: "26px",
                            textDecoration: "underline",
                          }}
                        >
                          Google Play
                        </Title>
                      </Button>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "white",
                    fontSize: "24px",
                    cursor: "pointer",
                    "@media (max-width: 768px)": {
                      width: "36px",
                      height: "36px",
                    },
                  }}
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <IoCloseOutline />
                </Box>
              </Box>
            </Box>
          </Modal>
          <Drawer
            anchor="top"
            open={state}
            onClose={toggleDrawer(false)}
            sx={{
              bgcolor: "rgba(12, 19, 36, 0.5)",
            }}
          >
            <Box
              sx={{
                padding: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #154E601A",
              }}
            >
              <Image src={Logo} alt="logo" />
              <IconButton
                size="medium"
                onClick={() => {
                  setState(false);
                }}
              >
                <Image src={Close} alt="close" />
              </IconButton>
            </Box>
            <Box
              sx={{
                paddingX: "20px",
                paddingBottom: "20px",
              }}
            >
              <List
                sx={{
                  paddingX: "0px",
                }}
              >
                {navs?.map(({ name, path }) => (
                  <ListItem
                    onClick={() => handleScroll(path)}
                    key={name + path}
                  >
                    <ListItemButton
                      sx={{
                        borderBottom: "0.7px solid #E7E7E9",
                        padding: "0",
                        color: "#0C1324",
                        fontWeight: "700",
                      }}
                    >
                      <ListItemText
                        sx={{
                          color: "#0C1324",
                          fontWeight: 400,
                          paddingY: "10px",
                        }}
                        primary={name}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  padding: "10px",
                }}
              >
                <Button
                  onClick={() => {
                    i18next.changeLanguage("uz");
                    setAnchorEl(null);
                  }}
                  startIcon={
                    <span
                      className={`flag-icon  flag-icon-uz flag-icon-squared`}
                      style={{ borderRadius: "50%" }}
                    />
                  }
                  sx={{
                    borderRadius: "8px",
                    color: "#3D4250",
                    fontWeight: "400",
                    paddingX: "10px",
                    fontSize: "16px",
                    "&:hover": {
                      backgroundColor: "#F5F6F8",
                    },
                  }}
                >
                  <Description>O’z</Description>
                </Button>
                <Button
                  onClick={() => {
                    i18next.changeLanguage("ru");
                    setAnchorEl(null);
                  }}
                  startIcon={
                    <span
                      className={`flag-icon  flag-icon-ru flag-icon-squared`}
                      style={{ borderRadius: "50%" }}
                    />
                  }
                  sx={{
                    borderRadius: "8px",
                    color: "#3D4250",
                    fontWeight: "400",
                    fontSize: "16px",
                    "&:hover": {
                      backgroundColor: "#F5F6F8",
                    },
                  }}
                >
                  <Description>Ру</Description>
                </Button>
                <Button
                  disabled
                  onClick={() => {
                    i18next.changeLanguage("en");
                    setAnchorEl(null);
                  }}
                  startIcon={
                    <span
                      className={`flag-icon  flag-icon-gb flag-icon-squared`}
                      style={{ borderRadius: "50%" }}
                    />
                  }
                  sx={{
                    borderRadius: "8px",
                    color: "#3D4250",
                    fontWeight: "400",
                    fontSize: "16px",
                    "&:hover": {
                      backgroundColor: "#F5F6F8",
                    },
                  }}
                >
                  <Description>En</Description>
                </Button>
              </Box>
              <Button
                variant="contained"
                size="large"
                sx={{
                  borderRadius: "2rem",
                  textTransform: "capitalize",
                  background: "#099EE2",
                  marginY: "10px",
                  width: "100%",
                  "&:focus": {
                    background: "#099EE2",
                  },
                }}
                onClick={() => {
                  setState(false);
                  setOpen(true);
                }}
                endIcon={<TiArrowDown />}
              >
                <Description className="font-[600] capitalize text-[16px] ">
                  {t("download")}
                </Description>
              </Button>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: colors.button[100],
                  "&:hover": { bgcolor: colors.button[100] },
                  borderRadius: "2rem",
                  width: "100%",
                  textTransform: "capitalize",
                }}
                onClick={() => {
                  window.location.href = "/sign-up";
                  // navigate("/sign-up");
                  setState(false);
                }}
              >
                <Description className="font-[600] capitalize text-[16px] ">
                  {t("sell_on_innMall")}
                </Description>
              </Button>
            </Box>
          </Drawer>
          <IconButton
            size="large"
            onClick={() => setState(true)}
            sx={{
              display: "none",
              "@media (max-width: 1280px)": {
                display: "block",
              },
            }}
          >
            <Image src={Burger} alt="burger" />
          </IconButton>
        </Box>
      </Box>
    </Section>
  );
};

export default Header;
