import React, { memo } from "react";
import styled from "styled-components";

const InputContainer = styled("div")`
  display: flex;
  flex-direction: column;
  margin: 4px 0px;
  color: ${(props) => props.theme.color.main};
  

  > label {
    margin: 0px 0px 6px 0px;
    font-size: 12px;
  }

  > input {
    font-size: 16px;
    border-radius: 4px;
    padding: 6px;
    
  }

  > p {
    margin: 6px 0px 0px;
    font-size: 10px;
    
  }
`;

const Input = ({ label, description, error, ...props }) => {
  return (
    <InputContainer error={error}>
      {label && <label htmlFor={props.id}>{label}</label>}
      <input {...props} />
      {description && <p>{description}</p>}
    </InputContainer>
  );
};

export default memo(Input);
