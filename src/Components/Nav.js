import React from "react";

const Nav = () => {
	return (
		<nav>
			<menu>
				<li>
					<a href="/home">Home</a>
				</li>
				<li>
					<a href="/about">About</a>
				</li>
				<li>
					<a href="/blog">Menu</a>
				</li>
                <li>
					<a href="/reservations">Reservations</a>
				</li>
                <li>
					<a href="/order-online">Order Online</a>
				</li>
                <li>
					<a href="/login">Login</a>
				</li>
			</menu>
		</nav>
	);
};
export default Nav;
