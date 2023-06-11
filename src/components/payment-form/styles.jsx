import styled from "styled-components";
import Button from "../button";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  height: 100px;
  width: 100%;
`;

export const TestCardText = styled.p`
  font-size: 10px;
  font-style: italic;
  color: gray;
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;
