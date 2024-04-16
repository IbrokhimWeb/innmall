import "./utils/i18next";
import "./style/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "flag-icon-css/css/flag-icons.min.css";

import App from "./App.tsx";
import ReactDOM from "react-dom/client";

import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";

const helmetContext = {};

ReactDOM.createRoot(
  document.getElementById("innmall") as HTMLDivElement,
).render(
  <HelmetProvider context={helmetContext}>
    <BrowserRouter>
      <StyledEngineProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </StyledEngineProvider>
    </BrowserRouter>
  </HelmetProvider>,
);
