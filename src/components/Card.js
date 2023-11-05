import React from "react";

const Card = ({ title, number, borderColor, icon: Icon, iconColor }) => {
  const cardStyle = {
    borderBottom: `3px solid ${borderColor}`,

  };

  return (
    <div className="card mb-3" style={cardStyle}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
        {Icon && <Icon size={20} color={iconColor} />}  {number} 
        </p>
      </div>
    </div>
  );
}

export default Card;
