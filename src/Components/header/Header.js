import React, { useEffect, useState, useRef } from "react";
import Logo from "../../Media/Logo.svg";
import "./Header.css";

const Header = () => {
	const windowWidth = useRef(window.innerWidth);
	const [show, setShow] = useState();

	useEffect(() => {
		if (windowWidth.current > 768) {
			setShow(true);
		} else {
			setShow(false);
		}
	}, []);

	const showMenu = () => {
		setShow(!show);
	};

	return (
		<header>
			<img src={Logo} />
			<button
				onClick={() => {
					showMenu();
				}}>
				<i class="fa-solid fa-bars"></i>
			</button>
			{show == true ? (
				<nav>
					<menu>
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
			) : (
				""
			)}
		</header>
	);
};
export default Header;
