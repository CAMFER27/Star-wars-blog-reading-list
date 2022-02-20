import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Card from "../component/cards.jsx";
import { Context } from "../store/appContext.js";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container testimonial-group">
			<h1 className="categoryData">Characters</h1>
			<div className="row">
				{store.characters
					? store.characters.map((value, index) => {
							return <Card key={index} value={value} index={index} category={"people"} />;
					  })
					: ""}
			</div>
			<h1 className="categoryData">Planets</h1>
			<div className="row">
				{store.planets
					? store.planets.map((value, index) => {
							return <Card key={index} value={value} index={index} category={"planets"} />;
					  })
					: ""}
			</div>
			<h1 className="categoryData">Vehicles</h1>
			<div className="row">
				{store.vehicles
					? store.vehicles.map((value, index) => {
							return <Card key={index} value={value} index={index} category={"vehicles"} />;
					  })
					: ""}
			</div>
		</div>
	);
};
