import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import i18n, { initI18n } from "@i18n";
import reduxStore from "@Redux";
import ResponsiveLayout from "@Layout/responsive.layout";

import "./style.scss";

initI18n();
const langHeader = i18n.getDataByLanguage("ko");
if (langHeader) {
  document.title = langHeader["header"]["HEADER_TITLE"];
}

ReactDOM.render(
  <Provider store={reduxStore}>
    <StrictMode>
      <BrowserRouter>
        <ResponsiveLayout>
          <Routes>
            <Route path="/" element={<App />} />
          </Routes>
        </ResponsiveLayout>
      </BrowserRouter>
    </StrictMode>
  </Provider>,
  document.getElementById("root"),
);
