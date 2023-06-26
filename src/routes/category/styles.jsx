import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  column-gap: 20px;
  row-gap: 50px;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 768px) {
    grid {
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    }
  }
`;

export const CategoryTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;
