import React from "react";
import RestaurantImage from "../Media/restauranfood.jpg";

const Hero = () => {
	return (
		<section className="hero-section">
			<section>
				<h1>Little Lemon</h1>
				<h2 className="hero-subtitle subtitle">Chicago</h2>
				<p className="hero-text lead-text">
					We are a family owned Mediterranean restaurant, focused on
					traditional recipes served with a modern twist.
				</p>
				<button className="hero-button lead-text">
					Reserve a Table
				</button>
			</section>
			<section>
				<img
					src={RestaurantImage}
					alt="cook with plate of food"
					width="10px"
				/>
			</section>
		</section>
	);
};
export default Hero;
