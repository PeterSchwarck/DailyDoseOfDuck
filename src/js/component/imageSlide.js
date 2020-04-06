import React from "react";
import PropTypes from "prop-types";

const ImageSlide = ({ url }) => {
	const styles = {
		backgroundImage: `url(${url})`,
		backgroundSize: "cover",
		backgroundPosition: "center"
	};

	return <div className="image-slide" style={styles} />;
};

ImageSlide.propTypes = {
	url: PropTypes.array
};

export default ImageSlide;
