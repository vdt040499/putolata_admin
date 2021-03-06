import React from "react";
import "./style.css";

/**
 * @author
 * @function Card
 **/

const Card = (props) => {
  return (
    <div className="card" {...props}>
      {(props.headerLeft || props.headerRight) && (
        <div className="card__header">
          {props.headerLeft && (
            <div
              style={{
                alignSelf: "center",
                fontSize: "20px",
                fontWeight: "500",
                textTransform: "uppercase"
              }}
            >
              {props.headerLeft}
            </div>
          )}
          {props.headerRight && props.headerRight}
        </div>
      )}

      {props.children}
    </div>
  );
};

export default Card;