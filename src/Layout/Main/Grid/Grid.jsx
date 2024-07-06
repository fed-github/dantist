import React, { useState } from "react";
import "./Grid.css";
import Modal_Grid from "./Modal_Grid";
import { serviceData } from "/src/data.js";

const Grid = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenModal = (serviceInfo) => {
    setSelectedService(serviceInfo);
  };

  const handleClose = () => {
    setSelectedService(null);
  };

  return (
    <div className="grid-content">
      {serviceData.map((serviceInfo, index) => (
        <div
          className="column "
          key={index}
          onClick={() => handleOpenModal(serviceInfo)}
        >
          <div className="icon_cover">
            <img src={serviceInfo.image} alt="teeth_logo" />
          </div>
          <h4 className="mt-2">{serviceInfo.title}</h4>
        </div>
      ))}

      {selectedService && (
        <Modal_Grid
          serviceInfo={selectedService}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default Grid;
