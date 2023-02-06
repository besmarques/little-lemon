import React from "react";
import Star from "../Media/star.png";

const TestimonialCard = (props) => {
	let starArray = [];

	for (let i = 0; i < props.rating; i++) {
		starArray.push(i);
	}

	return (
		<article className="review-card">
			<section className="stars-section">
				{starArray.map((item) => {
					return <img src={Star} alt="star rating" className="star" />;
				})}
			</section>
			<section className="reviewer-section">
				<div className="reviewer-photo">
					<img src={props.photo} alt="reviewer"/>
				</div>
				<div className="reviewer-name">
                    <p className="card-title">{props.name}</p>
                </div>
			</section>
			<review>
                <p>{props.review}</p>
            </review>
		</article>
	);
};

export default TestimonialCard;