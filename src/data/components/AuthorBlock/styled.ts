import styled from "styled-components";

export const BodyAuthorBlock = styled.div `
  z-index: inherit;
  width: 100%;
  height: 5vh;
  bottom: 0;
  text-align: center;
  background: #0a0a0a;

  span {
    color: white;
  }

  span:hover {
    background: linear-gradient(to right, #ffffff 20%, #44dada 30%, #44dada 70%, #ffffff 80%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    background-size: 200% auto;
    animation: textShine 3s ease-in-out infinite alternate;
  }

  @keyframes textShine {
    to {
      background-position: 200%;
    }
  }
`