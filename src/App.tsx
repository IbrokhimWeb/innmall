//todo STYLED COMPONENTS
import { ThemeProvider, createTheme } from "@mui/material";

//todo CUSTOM
import { CustomStore } from "./utils/types";

//todo REACT
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { SnackbarProvider } from "notistack";
import Loader from "./components/loader";
const Landing = lazy(() => import(`./pages/landing`));
const SignUp = lazy(() => import(`./pages/signup`));
const Error404 = lazy(() => import(`./pages/errors/404`));
const Error500 = lazy(() => import(`./pages/errors/500`));
const ContactPage = lazy(() => import(`./pages/contact`));

const App = () => {
  const { mode } = useSelector((store: CustomStore) => store?.main);

  useEffect(() => {
    localStorage.setItem("theme", mode ? "dark" : "light");
  }, [mode]);

  const theme = createTheme(mode ? { palette: { mode: "dark" } } : {});

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loader />}>
        <SnackbarProvider
          maxSnack={10}
          autoHideDuration={4000}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/500" element={<Error500 />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </SnackbarProvider>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
