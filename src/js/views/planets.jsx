import React from "react";
import PropTypes from "prop-types";

export const PlanetsDetail = props => {
	return (
		<div className="row text-center">
			<div className="col">
				<h5>Name</h5>
				{props.value && props.value.name ? props.value.name : ""}
			</div>
			<div className="col">
				<h5>Climate</h5>
				{props.value && props.value.climate ? props.value.climate : ""}
			</div>
			<div className="col">
				<h5>Population</h5>
				{props.value && props.value.population ? props.value.population : ""}
			</div>
			<div className="col">
				<h5>Orbital Period</h5>
				{props.value && props.value.orbital_period ? props.value.orbital_period : ""}
			</div>
			<div className="col">
				<h5>Rotation Period</h5>
				{props.value && props.value.rotation_period ? props.value.rotation_period : ""}
			</div>
			<div className="col">
				<h5>Diameter</h5>
				{props.value && props.value.diameter ? props.value.diameter : ""}
			</div>
		</div>
	);
};

PlanetsDetail.propTypes = {
	value: PropTypes.object
};
