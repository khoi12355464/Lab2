import React from "react";
import { Card, Button } from "react-bootstrap";

const OrchidCard = ({ orchid, onDetail }) => {
  return (
    <Card style={{ width: "18rem" }} className="m-2 shadow-sm">
      <Card.Img
        variant="top"
        src={orchid.image}
        alt={orchid.name}
        style={{
          height: "200px",       
          objectFit: "cover"     
        }}
      />

      <Card.Body>
        <Card.Title>{orchid.name}</Card.Title>
        <Card.Text>Origin: {orchid.origin}</Card.Text>
        <Button variant="primary" onClick={() => onDetail(orchid)}>
          Detail
        </Button>
      </Card.Body>
    </Card>
  );
};

export default OrchidCard;
