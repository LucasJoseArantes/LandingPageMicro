import React from 'react';


const Pictures = (props) => {
    return (
        <div className="picturesContainer">
        <div className="mainImage">
          <img src= {props.mainPath} alt="Main" />
        </div>
        <div className="sideImages">
          <img src={props.side1Path} alt="Side 1" />
          <img src={props.side2Path} alt="Side 2" />
        </div>
        <div className="bottomImages">
          <img src={props.bottom1Path} alt="Bottom 1" />
          <img src={props.bottom2Path} alt="Bottom 2" />
          <img src={props.bottom3Path} alt="Bottom 3" />
        </div>
      </div>
);
}

export default Pictures;