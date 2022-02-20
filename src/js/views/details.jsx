import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { CharactersDetail } from "../views/characters.jsx";
import { PlanetsDetail } from "../views/planets.jsx";
import { VehiclesDetail } from "../views/vehicles.jsx";

export const Detail = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.loadInfoData(params.category, params.theid);
	}, []);
	const getcomponentByCategory = category => {
		if (category == "people") {
			return <CharactersDetail value={store.result.properties} />;
		} else if (category == "planets") {
			return <PlanetsDetail value={store.result.properties} />;
		} else if (category == "vehicles") {
			return <VehiclesDetail value={store.result.properties} />;
		}
	};
	return (
		<div className="container">
			<h1>{store.result.properties ? store.result.properties.name : ""}</h1>
			<img
				className="rounded mx-auto d-block"
				src="https://i0.wp.com/www.thedigitalquestioner.com/wp-content/uploads/2020/11/Poster-Star-Wars.png?w=538&ssl=1"
			/>
			<br />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat sodales leo, id feugiat metus
				semper sed. Pellentesque dapibus metus quis volutpat mattis. Donec commodo mollis magna, non ornare quam
				tincidunt at. Fusce eu nibh eget ex luctus venenatis. Sed at odio blandit, euismod quam nec, iaculis
				ante.
			</p>
			<br />
			{getcomponentByCategory(params.category)}
			<br />
			<div className="text-center">
				<Link to="/">
					<button className="btn btn-primary btn-lg">Back home</button>
				</Link>
			</div>
		</div>
	);
};
