import React from "react";
import { Col, Row } from "react-bootstrap";

function DatesAction({ onDelete, onViewDates }) {
  return (
    <Row className="justify-content-center my-2 ">
      <Col sm="8" className="d-flex justify-content-between ">
        <button onClick={onDelete} className="btn-style p-2">
          مسح الكل
        </button>
        <button onClick={onViewDates} className="btn-style p-2">
          عرض البيانات
        </button>
      </Col>
    </Row>
  );
}

export default DatesAction;
