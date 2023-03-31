import React from "react";
import { Row, Col } from "react-bootstrap";

function DatesList({ person }) {
  return (
    <Row className="justify-content-center">
      <Col sm="8">
        <div className="rectangle p-2 ">
          {person.length ? (
            <>
              {person.map((item) => (
                <div className="d-flex border-bottom mx-3 my-2" key={item.id}>
                  <img className="img-avatar" alt="img" src="p1.png" />
                  <div className="px-3">
                    <p className="d-inline fs-5">{item.name}</p>
                    <p className="fs-6">{item.date}</p>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <h1 className="p-5 text-center">لا توجد مواعيد اليوم </h1>
          )}
        </div>
      </Col>
    </Row>
  );
}

export default DatesList;
