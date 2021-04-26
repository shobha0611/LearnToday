/* istanbul ignore file */

// Import from NPM
// -------------------------------------
import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";

// Import App Configuration and Setup
// -------------------------------------
// import { Store } from "backend/storage/mobile/mobile.store";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

// Import App
// -------------------------------------
import App from "./app";

// WebFont.load(getAppConfig().fonts);

ReactDOM.render(
    <div>
        <App />
    </div>,
    document.getElementById("root") || document.createElement("div")
);
registerServiceWorker();
