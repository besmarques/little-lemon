import React, { useEffect, useState } from "react";
import "./teste.css";

const Teste = () => {
	const [showNavMenuDropdown, setShowNavMenuDropdown] = useState("show");

	const [windowSize, setWindowSize] = useState([
		window.innerWidth,
		window.innerHeight,
	]);

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowSize([window.innerWidth, window.innerHeight]);
		};

		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	});

	useEffect(() => {
		if (windowSize[0] > 768) {
			setShowNavMenuDropdown("show");
		} else {
			setShowNavMenuDropdown("hidden");
		}
	}, [window.screen.width]);

	return (
		<header>
			<div className="container">
				<p>logo</p>
				<button
					onClick={() => {
						showNavMenuDropdown == "show"
							? setShowNavMenuDropdown("hidden")
							: setShowNavMenuDropdown("show");
					}}>
					dsad
				</button>
				<nav>
					<menu className={showNavMenuDropdown}>
						<li>
							<a hred="#">1</a>
						</li>
						<li>
							<a hred="#">1</a>
						</li>
						<li>
							<a hred="#">1</a>
						</li>
						<li>
							<a hred="#">1</a>
						</li>
						<li>
							<a hred="#">1</a>
						</li>
						<li>
							<a hred="#">1</a>
						</li>
					</menu>
				</nav>
			</div>
		</header>
	);
};
export default Teste;
