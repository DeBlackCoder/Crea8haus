import React from "react";


const ServiceCard = ({ title, description }) => {
  return (
    <div className="service-card">
      <h3 className="service-card-title">{title}</h3>

      <div className="service-card-text">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
