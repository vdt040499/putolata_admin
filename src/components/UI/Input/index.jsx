import React from "react";
import { Form } from "react-bootstrap";

const Input = (props) => {
  const { label, type, placeholder, errorMessage, value, onChange, options } = props;

  let input = null;
  switch (type) {
    case "text":
    case "select":
      input = (
        <Form.Group>
          {label && <Form.Label>{label}</Form.Label>}
          <select 
            className="form-control form-control-sm"
            value={value}
            onChange={onChange}
          >
            <option value="">{placeholder}</option>
            {options.length > 0
              ? options.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.name}
                  </option>
                ))
              : null}
          </select>
        </Form.Group>
      );
      break;
    default:
      input = (
        <Form.Group>
          {label && <Form.Label>{label}</Form.Label>}
          <Form.Control
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            {...props}
          />
          <Form.Text className="text-muted">{errorMessage}</Form.Text>
        </Form.Group>
      );
  }

  return input;
};

export default Input;
