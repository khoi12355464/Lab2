import React, { useState } from "react";
import OrchidCard from "./OrchidCard";
import ListOfOrchids from "./ListOfOrchids";
import { Modal, Button } from "react-bootstrap";

const Orchids = () => {
  const [selectedOrchid, setSelectedOrchid] = useState(null);
  const [show, setShow] = useState(false);

  const handleDetail = (orchid) => {
    setSelectedOrchid(orchid);
    setShow(true);
  };

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {ListOfOrchids.map((orchid) => (
        <OrchidCard key={orchid.id} orchid={orchid} onDetail={handleDetail} />
      ))}

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedOrchid?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={selectedOrchid?.image}
            alt={selectedOrchid?.name}
            className="img-fluid mb-3"
          />
          <p><b>Origin:</b> {selectedOrchid?.origin}</p>
          <p><b>Color:</b> {selectedOrchid?.color}</p>
          <p><b>Category:</b> {selectedOrchid?.category}</p>
          <p>{selectedOrchid?.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Orchids;
