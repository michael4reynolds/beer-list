import React from 'react';
import styled from 'styled-components';

export const InputWrapper = styled.input`
  font-size: 1.2em;
`;

export const ButtonWrapper = styled.button`
  font-size: 1.2em;
`;

const InputArea = () => (
  <div>
    <InputWrapper/>
    <ButtonWrapper>Add</ButtonWrapper>
  </div>
  );

export default InputArea;
