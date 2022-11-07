import React from "react";
import PropTypes from "prop-types";
import Image from "react-bootstrap/Image";

const AboutImg = ({ filename, alt }) => {
  return (
    <Image
      src="/portrait-min.jpg"
      className="img-fluid rounded-circle"
      alt={alt}
    />
  );
};

AboutImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default AboutImg;
