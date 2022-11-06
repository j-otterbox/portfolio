import React from "react";
// import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
// import Img from 'gatsby-image';
import Image from "react-bootstrap/Image";

const AboutImg = ({ filename, alt }) => {
  // <StaticQuery
  //   query={graphql`
  //     query {
  //       images: allFile {
  //         edges {
  //           node {
  //             relativePath
  //             name
  //             childImageSharp {
  //               fixed(width: 350) {
  //                 ...GatsbyImageSharpFixed
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `}
  //   render={(data) => {
  //     const image = data.images.edges.find((n) =>
  //       n.node.relativePath.includes(filename)
  //     );

  //     if (!image) return null;

  //     const imageFixed = image.node.childImageSharp.fixed;
  //     return (
  //       <Image className="rounded shadow-lg" alt={alt} fixed={imageFixed} />
  //     );
  //   }}
  // />

  return (
    <Image
      src={`/images/${filename}`}
      className="img-fluid rounded-circle shadow"
      alt={alt}
    />
  );
};

AboutImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default AboutImg;
