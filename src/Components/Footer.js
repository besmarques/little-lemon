import React from "react";
import Logo from "../Media/footer-logo.png";


const Footer = () => {
	return (
		<footer className="grid">
			<div className="container">
				<div className="four-columns">
					<div className="footer-column">
						<img src={Logo} alt="little lemon logo" width="120vw" />
					</div>
					<div className="footer-column">
						<h5 className="section-title">Menu</h5>
					</div>
					<div className="footer-column">
						<h5 className="section-title">Contact</h5>
						<p className="lead-text">
							<i className="fa-solid fa-location-dot"></i> 2395
							Maldove Way
							<br />
							Chicago, Illinois
						</p>
						<p className="lead-text">
							<i className="fa-solid fa-phone"></i>{" "}
							<a href="tel:(629)-000-0000">(629)-000-0000</a>
						</p>
						<p className="lead-text">
							<i className="fa-solid fa-envelope"></i>{" "}
							<a href="mailto:name@email.com">Contact us</a>
						</p>
					</div>
					<div className="footer-column">
						<h5 className="section-title">Social media</h5>
						<p className="lead-text">
							<i className="fa-brands fa-facebook"></i>{" "}
							<a href="">facebook</a>
						</p>
						<p className="lead-text">
							<i className="fa-brands fa-linkedin"></i>{" "}
							<a href="">linkedin</a>
						</p>
						<p className="lead-text">
							<i className="fa-brands fa-instagram"></i>{" "}
							<a href="">instagram</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
