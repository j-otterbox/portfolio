import React from "react";
import PropTypes from "prop-types";
import Image from "react-bootstrap/Image";

const ProjectImg = ({ filename, alt }) => {
  return <Image src={`/images/${filename}`} className="img-fluid" alt={alt} />;
};

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectImg;
