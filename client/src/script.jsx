import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Toaster } from 'react-hot-toast';





let root = ReactDOM.createRoot(document.getElementById('div1'));
root.render(
    <>
        <App/>
        <Toaster />
    </>
);

