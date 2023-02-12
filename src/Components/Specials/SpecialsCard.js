import React from "react";
import Scooter from "../../Media/scooter.svg"

const SpecialArticle = (props) => {
    return(
        <div className="special-card">
            <div className="special-image-box">
                <img src={props.image} alt={props.alt} width="100%"/>
            </div>
            <section className="price-section">
                <div className="card-title">{props.title}</div>
                <div className="lead-text price">${props.price}</div>
            </section>
            <section className="description">
                <p>{props.description}</p>
            </section>
            <section className="order-section">
                <div className="card-title">Order a delivery</div>
                <img src={Scooter} alt="order delivery scooter" width="40vw"/>
            </section>
        </div>
    )
}
export default SpecialArticle