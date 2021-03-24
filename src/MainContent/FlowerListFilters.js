import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
function FlowerListFilters({ priceRange, handleChange }) {
  const [currentPriceValues, setCurrentPriceValues] = useState(priceRange());
  const [currentType, setcurrentType] = useState(0);
  const [currentName, setCurrentName] = useState(0);
  const updateNameFilter = (event) => {
    setCurrentName(event.target.value.toLowerCase());
  };
  const updateTypeFilter = (event) => {
    setcurrentType(event.target.value);
  };
  useEffect(() => {
    handleChange({
      price: currentPriceValues,
      type: currentType,
      name: currentName,
    });
  }, [currentPriceValues, currentType, currentName]);
  return (
    <div className="flower-list">
      <Container className="flower-list-container">
        <DropdownButton title="Filtruoti">
          <div className="type-dropdown">
            <Form.Control
              as="select"
              className="my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
              onChange={updateTypeFilter}
              custom
            >
              <option value="">Visi tipai</option>
              <option value="flower">Gėlės</option>
              <option value="flowerBouquet">Puokštės</option>
            </Form.Control>
          </div>
          <div className="input-range-container">
            <InputRange
              maxValue={priceRange().max}
              minValue={priceRange().min}
              formatLabel={(value) => `${value} eur`}
              value={currentPriceValues}
              onChange={(value) => setCurrentPriceValues(value)}
              onChangeComplete={(value) => console.log(value)}
              className="input-range"
            />
          </div>
        </DropdownButton>
        <Form.Control placeholder="Ieškoti vardo" onChange={updateNameFilter} />
      </Container>
    </div>
  );
}

export default FlowerListFilters;
