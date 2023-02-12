import React from "react";
import RestaurantImage from "../../Media/restauranfood.jpg";

const Hero = () => {
	return (
		<section className="hero-section">
			<leftColumn>
				<h1 className="hero-title title">Little Lemon</h1>
				<h2 className="hero-subtitle subtitle">Chicago</h2>
				<p className="hero-text lead-text">
					We are a family owned <br />
					Mediterranean restaurant, <br />
					focused on traditional <br />
					recipes served with a modern <br />
					twist.
				</p>
				<button className="hero-button lead-text">
					Reserve a Table
				</button>
			</leftColumn>
			<rightColumn className="hero-img">
				<img src={RestaurantImage} alt="cook with plate of food"/>
			</rightColumn>
		</section>
	);
};
export default Hero;
