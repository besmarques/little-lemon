import React from "react";
import TestimonialArticle from "./TestimonialsCard";

const Testimonials = () => {
	return (
		<section className="grid">
			<div className="container">
				<div className="testimonials-section four-columns">
					<TestimonialArticle
						photo="https://picsum.photos/100?random=1"
						name="Mariam Moreno"
						rating={4}
						review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi diam, ullamcorper aliquet ex sed, molestie venenatis tortor. Aliquam non."
					/>
					<TestimonialArticle
						photo="https://picsum.photos/100?random=2"
						name="Leland Mayer"
						rating={5}
						review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi diam, ullamcorper aliquet ex sed, molestie venenatis tortor. Aliquam non."
					/>
					<TestimonialArticle
						photo="https://picsum.photos/100?random=3"
						name="Bruno Chang"
						rating={5}
						review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi diam, ullamcorper aliquet ex sed, molestie venenatis tortor. Aliquam non."
					/>
					<TestimonialArticle
						photo="https://picsum.photos/100?random=4"
						name="Semaj Welch"
						rating={5}
						review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi diam, ullamcorper aliquet ex sed, molestie venenatis tortor. Aliquam non."
					/>
				</div>
			</div>
		</section>
	);
};
export default Testimonials;
