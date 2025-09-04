import React from "react";

const Card = ({ title, text, imageUrl, buttonText = "Find Out More!", buttonUrl = "#" }) => {
  return (
    <div className="card h-100">
      {imageUrl && (
        <img src={imageUrl} className="card-img-top" alt={title} style={{ objectFit: 'cover', height: 200 }} />
      )}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{text}</p>
      </div>
      <div className="card-footer bg-transparent border-0">
        <a href={buttonUrl} className="btn btn-primary w-100">{buttonText}</a>
      </div>
    </div>
  );
};

export default Card;
