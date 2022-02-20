import React from "react";
import PropTypes from "prop-types";

export const VehiclesDetail = props => {
	return (
		<div className="row text-center">
			<div className="col">
				<h5>Name</h5>
				{props.value && props.value.name ? props.value.name : ""}
			</div>
			<div className="col">
				<h5>Model</h5>
				{props.value && props.value.model ? props.value.model : ""}
			</div>
			<div className="col">
				<h5>Passengers</h5>
				{props.value && props.value.passengers ? props.value.passengers : ""}
			</div>
			<div className="col">
				<h5>Cost in Credits</h5>
				{props.value && props.value.cost_in_credits ? props.value.cost_in_credits : ""}
			</div>
		</div>
	);
};

VehiclesDetail.propTypes = {
	value: PropTypes.object
};
