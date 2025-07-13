import styled from "styled-components";

export const EmptyBlock = styled.div`
  display: flex;
  height: 7vh;
`;

export const Body = styled.div`
  transition: all 0.5s;
  width: 100%;
  height: 7vh;
  display: grid;
  position: fixed;
  bottom: 0;
  grid-template-columns: calc(100% / 3) calc(100% / 3) calc(100% / 3);
  border-radius: 10px 10px 0 0;
  background-color: #282c34;

  img {
    width: 100%;
    height: 7vh;
    object-fit: contain;
  }
  
  @media (min-width: 650px) {
    display: none
  }
`;