import React from "react";
import Scooter from "../Media/scooter.svg"

const SpecialArticle = (props) => {
    return(
        <card className="special-card">
            <imageBox className="special-image-box">
                <img src={props.image} alt={props.alt} width="100%"/>
            </imageBox>
            <section className="price-section">
                <dish className="card-title">{props.title}</dish>
                <price className="lead-text price">${props.price}</price>
            </section>
            <description>
                <p>{props.description}</p>
            </description>
            <section className="order-section">
                <delivery className="card-title">Order a delivery</delivery>
                <img src={Scooter} alt="order delivery scooter" width="40vw"/>
            </section>
        </card>
    )
}
export default SpecialArticle