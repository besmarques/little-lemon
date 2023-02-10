import React from "react";
import RestaurantImage from "../Media/restauranfood.jpg";

const Hero = () => {
	return (
		<section className="hero">
			<section className="container">
				<div className="hero-column-left">
					<h1 className="title">Little Lemon</h1>
					<h2 className="subtitle">Chicago</h2>
					<p className="lead-text">
						We are a family owned Mediterranean restaurant, focused
						on traditional recipes served with a modern twist.
					</p>
					<button>Reserve a Table</button>
				</div>
				<div className="hero-column-right"><img
						src={RestaurantImage}
						alt="cook with plate of food"
						width="100%"
					/></div>
			</section>
		</section>
	);
};
export default Hero;
