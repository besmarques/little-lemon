import React from "react";

const Nav = () => {
	function myFunction() {
		var x = document.getElementsByTagName("nav")[0].firstChild;
			if(x.className == ""){
				x.className += "responsive";
			}else{
				x.className = "";
			}
	}

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
				<li>
					<a
						href="javascript:void(0);"
						className="icon"
						onClick={() => myFunction()}>
						<i className="fa fa-bars"></i>
					</a>
				</li>
			</menu>
		</nav>
	);
};
export default Nav;
