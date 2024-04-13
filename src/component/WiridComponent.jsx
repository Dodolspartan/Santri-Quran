import React from "react";
import { wiriDzikir } from "../API/dzikir";
import { Col, Row } from "react-bootstrap";

function WiridComponent() {
  return (
    <div className="element_wirid_pages">
      {wiriDzikir.map((wirid) => (
        <div className="card_element_wirid" key={wirid.id}>
          <Row className="d-flex justify-content-between">
            <Col xs="1" className="text-center">
              <p>
                {wirid.ulang}
                {wirid.type}
              </p>
            </Col>
            <Col xs="10">
              <h5 className="title_arab">{wirid.arab}</h5>
            </Col>
          </Row>

          <p>{wirid.indo}</p>
        </div>
      ))}
    </div>
  );
}

export default WiridComponent;
