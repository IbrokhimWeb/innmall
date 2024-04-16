import { ForwardedRef, forwardRef } from "react";
import Dialog from "@mui/material/Dialog";

import Slide, { SlideProps } from "@mui/material/Slide";
import { Box, Button, Card } from "@mui/material";
import { Description, Space, Title } from "../../style";
import { useTranslation } from "react-i18next";

const Transition = forwardRef(
  (props: SlideProps, ref: ForwardedRef<unknown>) => {
    return <Slide direction="up" ref={ref} {...props} />;
  },
);

interface CustomProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  description: string;
  handleSubmit: () => void;
}

function Alert(props: CustomProps) {
  const { t } = useTranslation();
  const { open, handleClose, title, description, handleSubmit } = props;

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{
        "& .MuiPaper-root": {
          overflow: "hidden",
          borderRadius: "10px !important",
        },
      }}
    >
      <Card
        sx={{
          backgroundColor: "white",
          backgroundImage: "none",
          width: "auto",
          height: "auto",
          padding: "20px",
        }}
      >
        <Title
          sx={{
            color: "#0C1324",
            fontWeight: "600",
            fontSize: "24px",
            marginBottom: "10px",
            "@media (max-width: 768px)": {
              fontSize: "20px",
            },
          }}
        >
          {title}
        </Title>
        <Description
          sx={{
            color: "#858991",
            fontWeight: "400",
            fontSize: "16px",
            "@media (max-width: 768px)": {
              fontSize: "20px",
            },
          }}
        >
          {description}
        </Description>
        <Space />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            gap: "20px",
          }}
        >
          <Button
            size="small"
            color="error"
            variant="outlined"
            onClick={handleClose}
            sx={{
              borderRadius: "10px",
            }}
          >
            {t("cancellation")}
          </Button>
          <Button
            size="small"
            color="info"
            variant="contained"
            onClick={handleSubmit}
            className="bg-blue-900 capitalize p-5"
            sx={{
              borderRadius: "10px",
            }}
          >
            {t("confirmation")}
          </Button>
        </Box>
      </Card>
    </Dialog>
  );
}

export default Alert;
