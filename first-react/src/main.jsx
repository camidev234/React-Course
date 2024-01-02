import React from "react";
import ReactDOM from "react-dom/client";
import { PurchaseContainer } from "./components/PurchaseContainer";
import { PurchaseContextProvider } from "./context/PurchaseContext";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PurchaseContextProvider>
      <PurchaseContainer />
    </PurchaseContextProvider>
  </React.StrictMode>
);
