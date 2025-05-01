import React from 'react';

const InfoBox = ({ title, description, icon, bgColor }) => (
  <div className={`p-4 rounded-md text-white shadow-md ${bgColor}`}>
    <div className="text-3xl mb-2">{icon}</div>
    <h4 className="text-xl font-bold">{title}</h4>
    <p>{description}</p>
  </div>
);

export default InfoBox;
