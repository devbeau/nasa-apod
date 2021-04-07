import React from "react";
import PropTypes from "prop-types";

const YouTube = ({ embedURL, embedTitle }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={embedURL}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={embedTitle}
    />
  </div>
);

YouTube.propTypes = {
  embedURL: PropTypes.string.isRequired
};

export default YouTube;