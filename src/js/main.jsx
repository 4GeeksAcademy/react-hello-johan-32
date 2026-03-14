import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import Home from "./components/Home.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
	<React.StrictMode>
		<Home />
	</React.StrictMode>
);