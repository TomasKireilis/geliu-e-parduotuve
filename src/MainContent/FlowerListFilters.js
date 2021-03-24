import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
function FlowerListFilters({ handleChange }) {
  const [state, setState] = useState(5);
  const [state4, setState4] = useState({ min: 5, max: 10 });
  return (
    <div className="flower-list">
      <Container className="flower-list-container">
        <DropdownButton title="Filtruoti">
          <div className="type-dropdown">
            <Form.Control
              as="select"
              className="my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
              custom
            >
              <option value="0">Visi tipai</option>
              <option value="1">Gėlės</option>
              <option value="2">Puokštės</option>
            </Form.Control>
          </div>
          <div className="input-range-container">
            <InputRange
              maxValue={20}
              minValue={0}
              formatLabel={(value) => `${value} eur`}
              value={state4}
              onChange={(value) => setState4(value)}
              onChangeComplete={(value) => console.log(value)}
              className="input-range"
            />
          </div>
        </DropdownButton>
        <Form.Control placeholder="Ieškoti vardo" onChange={handleChange} />
      </Container>
    </div>
  );
}

export default FlowerListFilters;
