import React from "react";
import styled from "styled-components";

const FormControlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.3rem;
  margin-bottom: 0.7rem;

  input {
    padding: 0.7rem 1rem;
    border-radius: 0.3rem;
    border: 1px solid #ddd;
  }

  input:focus {
    outline: 1px solid #aaa;
  }

  input.error {
    outline: 1px solid #ff0000;
  }

  small {
    color: #ff0000;
  }
`;

function FormControl({
  handleBlur,
  handleChange,
  values,
  errors,
  touched,
  type,
  name,
  placeholder,
  label
}) {
  return (
    <FormControlWrapper>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name]}
        className={errors[name] && touched[name] ? "error" : ""}
      />
      {errors[name] && touched[name] && <small>{errors[name]}</small>}
    </FormControlWrapper>
  );
}

export default FormControl;
