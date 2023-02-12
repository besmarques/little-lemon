import React from "react";

import SpecialsCard from "./SpecialsCard";
import GreekSalad from "../../Media/greek-salad.jpg";
import Bruchetta from "../../Media/bruchetta.svg";
import LemonDessert from "../../Media/lemon-dessert.jpg";

const Specials = () => {
	return (
		<section className="grid">
			<div className="container">
				<div className="three-columns">
					<SpecialsCard
						title="Greek Salad"
                        image={GreekSalad}
                        alt="greek salad"
                        price="12.99"
                        description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                    />
					<SpecialsCard
						title="Bruchetta"
                        image={Bruchetta}
                        alt="Bruchetta"
                        price="5.99"
                        description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
                    />
					<SpecialsCard
						title="Lemon Dessert"
                        image={LemonDessert}
                        alt="Lemon Dessert"
                        price="5.00"
                        description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                    />
				</div>
			</div>
		</section>
	);
};
export default Specials;
