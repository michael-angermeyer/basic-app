import React from "react";

function Parallax({ imgName, minHeight, captionText, childern }) {
  return (
    <div
      className="parallax"
      style={{
        backgroundImage: `url("/imgs/${imgName}")`,
        minHeight: minHeight ? minHeight : "100%",
      }}
    >
      {captionText && (
        <div className="parallax-caption">
          <span className="parallax-caption-text">{captionText}</span>
        </div>
      )}
      {childern && <>{childern}</>}
    </div>
  );
}

export default Parallax;
