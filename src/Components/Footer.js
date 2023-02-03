import React from "react";
import Logo from "../../uploads/footer-logo.png";
import Nav from "./Nav";

const Footer = () => {
	return (
		<footer>
            <logo-section><img src={Logo} alt="little lemon logo" width="120vw" /></logo-section>
            <navigation-section><Nav /></navigation-section>
			<contact-section >
				<h5 className="section-title">Contact</h5>
				<p className="lead-text">
					<i class="fa-solid fa-location-dot"></i> 2395 Maldove Way
					<br />
					Chicago, Illinois
				</p>
                <p className="lead-text">
                <i class="fa-solid fa-phone"></i>{" "}
                <a href="tel:(629)-000-0000">(629)-000-0000</a>
				</p>
                <p className="lead-text">
                <i class="fa-solid fa-envelope"></i>{" "}
                <a href="mailto:name@email.com">Contact us</a>
				</p>
			</contact-section>
			<social-media-section >
				<h5 className="section-title">Social media</h5>
				<p className="lead-text">
                    <i class="fa-brands fa-facebook"></i>{" "}
                    <a href="">facebook</a>
				</p>
                <p className="lead-text">
                <i class="fa-brands fa-linkedin"></i>{" "}
                <a href="">linkedin</a>
				</p>
                <p className="lead-text">
                <i class="fa-brands fa-instagram"></i>{" "}
                <a href="">instagram</a>
                </p>
			</social-media-section>
		</footer>
	);
};
export default Footer;
