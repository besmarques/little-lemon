import React, { useEffect, useState } from "react";
import Logo from "../Media/Logo.svg";

const Header = () => {
	const [showNavMenuDropdown, setShowNavMenuDropdown] = useState("show");

    const [buttonState, setButtonState] = useState("unclicked")

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
				<img src={Logo} />
				<button className="hamburguer"
					onClick={() => {
						showNavMenuDropdown == "show"
							? setShowNavMenuDropdown("hidden")
							: setShowNavMenuDropdown("show");
					}}>
					<i class="fa-solid fa-bars"></i>
				</button>
				<nav>
					<menu className={showNavMenuDropdown} >
						<li>
							<a hred="#">Home</a>
						</li>
						<li>
							<a hred="#">About</a>
						</li>
						<li>
							<a hred="#">Menu</a>
						</li>
						<li>
							<a hred="#">Reservations</a>
						</li>
						<li>
							<a hred="#">Order Online</a>
						</li>
						<li>
							<a hred="#">Login</a>
						</li>
					</menu>
				</nav>
			</div>
		</header>
	);
};
export default Header;
