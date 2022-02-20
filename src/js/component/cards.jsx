import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

const Card = props => {
	const { store, actions } = useContext(Context);
	const AddFavorites = event => {
		if (props.value.isFavorite) {
			actions.deleteFavorites(props.category, props.value);
		} else {
			actions.favorites(props.category, props.value);
		}
	};

	return (
		<div key={props.index} className="card" style={{ width: "18rem" }}>
			<img
				src="https://es.web.img3.acsta.net/newsv7/22/02/18/13/57/0070841.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{props.value.name}</h5>
				<ul className="card-body">Name: {props.value.name}</ul>
				<Link className="btn btn-primary" to={"/detail/" + props.category + "/" + props.value.uid}>
					Learn more!
				</Link>
				<button
					href="#"
					className={`btn far fa-heart ${props.value.isFavorite ? "favorites" : ""}`}
					onClick={AddFavorites}
				/>
			</div>
		</div>
	);
};

Card.propTypes = {
	value: PropTypes.object,
	index: PropTypes.number,
	category: PropTypes.string
};
export default Card;
