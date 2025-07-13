import styled from "styled-components";

export const Body = styled.div `
  width: 100%;
  height: 150vh;
  position: absolute;
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgb(206, 206, 206) 100%);

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  .bottomDiv {
    width: 100%;
    position: absolute;
    top: 99vh;
    z-index: inherit;
    left: 0;
    border-radius: 10px 10px 0 0;
    background-color: #fff;
  }

  .blockButtons {
    width: 100%;
    height: 30%;
    position: absolute;
    top: 85%;
    left: 0;
    display: grid;
    grid-template-columns: calc(100% / 3) calc(100% / 3) calc(100% / 3);

    .button {
      height: 100%;
      width: 100%;
      text-align: center;
      grid-template-columns: 0 1fr;
      color: white;
    }
  }

`
export const ImageDiv = styled.div<{image?:string}>`
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: ${props => props?.src};
`