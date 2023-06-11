import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  margin: 80px auto;
  background: #fff;
  box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const ItemDetailsContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;

  @media (min-width: 768px) {
    flex-direction: column;
    margin: 0 20px;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const ImageContainer = styled.div`
  max-width: 300px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const BaseSpan = styled.span``;

export const Quantity = styled(BaseSpan)`
  display: flex;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 20px;
`;

export const RemoveButton = styled.div`
  cursor: pointer;

  font-size: 24px;
  @media (min-width: 768px) {
    margin: 0 auto;
  }
`;
