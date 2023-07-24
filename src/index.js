import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from '@auth0/auth0-react';
import "./index.scss";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-ewufrl6ex15ur7bx.us.auth0.com"
    clientId="z7isJ5Vi1zkW1xF8CbNYb96BuprfAXba"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
