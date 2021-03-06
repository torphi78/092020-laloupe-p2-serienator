import React from "react";
import PropTypes from "prop-types";
import "./ResultAuto.css";

function ResultAuto({ posterPath, name, handleClick, id }) {
  return (
    <button
      type="button"
      className="container-ResultAuto"
      onClick={() => handleClick(id)}
    >
      <div className="container-img">
        <img src={posterPath} alt={name} />
      </div>
      <p>{name}</p>
    </button>
  );
}

ResultAuto.propTypes = {
  posterPath: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default ResultAuto;
