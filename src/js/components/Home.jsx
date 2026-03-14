import React, { useState } from "react";

const Home = () => {
	const [color, setColor] = useState("yellow");

	const getClass = (lightColor) =>
		`light ${lightColor} ${color === lightColor ? "selected" : ""}`;

	const inspectorLine = (text, active = false) => (
		<div className={`code-line ${active ? "active-line" : ""}`}>{text}</div>
	);

	return (
		<div className="mock-browser-page">
			<div className="browser-window">
				<div className="browser-topbar">
					<div className="browser-nav">
						<span className="nav-icon">←</span>
						<span className="nav-icon">→</span>
						<span className="nav-icon">↻</span>
					</div>

					<div className="address-bar">
						<span className="secure-lock">🔒</span>
						<span className="secure-text">Secure</span>
						<span className="address-separator">|</span>
						<span className="address-text">https://assignment...</span>
						<span className="star">☆</span>
					</div>

					<div className="browser-icons">
						<span className="top-icon blue">◔</span>
						<span className="top-icon orange">✿</span>
						<span className="top-icon sky">▣</span>
						<span className="top-icon dark">t</span>
						<span className="top-icon gray">◔</span>
						<span className="top-icon red">⬆</span>
					</div>
				</div>

				<div className="browser-content">
					<div className="left-panel">
						<div className="traffic-wrapper">
							<div className="traffic-top"></div>

							<div className="traffic-box">
								<div
									className={getClass("red")}
									onClick={() => setColor("red")}
								></div>

								<div
									className={getClass("yellow")}
									onClick={() => setColor("yellow")}
								></div>

								<div
									className={getClass("green")}
									onClick={() => setColor("green")}
								></div>
							</div>
						</div>
					</div>

					<div className="right-panel">
						<div className="devtools-toolbar">
							<div className="devtools-left">
								<span className="tool-button">↖</span>
								<span className="tool-button">▭</span>
							</div>

							<div className="devtools-tabs">
								<span className="tab active">Elements</span>
								<span className="tab">Console</span>
								<span className="tab">»</span>
							</div>

							<div className="devtools-right">
								<span className="tool-button">⋮</span>
								<span className="tool-button">×</span>
							</div>
						</div>

						<div className="code-view">
							{inspectorLine("<!DOCTYPE html>")}
							{inspectorLine("<html>")}
							{inspectorLine("  <head>…</head>")}
							{inspectorLine("  <body>")}
							{inspectorLine('    <div id="app">')}
							{inspectorLine("      <div>")}
							{inspectorLine('        <div id="trafficTop"></div>')}
							{inspectorLine('        <div id="container">')}
							{inspectorLine(
								`          <div class="red light ${color === "red" ? "selected" : ""}"></div>`,
								color === "red"
							)}
							{inspectorLine(
								`          <div class="yellow light ${color === "yellow" ? "selected" : ""}"></div>`,
								color === "yellow"
							)}
							{inspectorLine(
								`          <div class="green light ${color === "green" ? "selected" : ""}"></div>`,
								color === "green"
							)}
							{inspectorLine("        </div>")}
							{inspectorLine("      </div>")}
							{inspectorLine('      <script type="text/javascript" src="bundle.js"></script>')}
							{inspectorLine("  </body>")}
							{inspectorLine("</html>")}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;