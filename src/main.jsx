import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { resolver, theme } from "./core/utility/core.constant.jsx";
import "./index.css";
import { store } from "./store.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <MantineProvider theme={theme} cssVariablesResolver={resolver}>
        <App />
      </MantineProvider>
    </Provider>
  </StrictMode>
);
