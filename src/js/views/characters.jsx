import React from "react";
import PropTypes from "prop-types";

export const CharactersDetail = props => {
	return (
		<div className="row text-center">
			<div className="col">
				<h5>Name</h5>
				{props.value && props.value.name ? props.value.name : ""}
			</div>
			<div className="col">
				<h5>Birth Year</h5>
				{props.value && props.value.birth_year ? props.value.birth_year : ""}
			</div>
			<div className="col">
				<h5>Gender</h5>
				{props.value && props.value.gender ? props.value.gender : ""}
			</div>
			<div className="col">
				<h5>Height</h5>
				{props.value && props.value.height ? props.value.height : ""}
			</div>
			<div className="col">
				<h5>Skin Color</h5>
				{props.value && props.value.skin_color ? props.value.skin_color : ""}
			</div>
			<div className="col">
				<h5>Eye Color </h5>
				{props.value && props.value.eye_color ? props.value.eye_color : ""}
			</div>
		</div>
	);
};

CharactersDetail.propTypes = {
	value: PropTypes.object
};
