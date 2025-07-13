import styled from "styled-components";

export const BodyButtonBlock = styled.a `
  text-decoration: none;
  
  .body {
    position: relative;
    width: 50%;
    height: 15%;
    text-align: center;
    background-color: #374690;
    /*display: grid;*/
    /*grid-template-columns: 3fr 10fr;*/
    display: flex;
    align-items: center;
    border-radius: 50px;
    cursor: pointer;
  }
  .body div {
    height: 100%;
    width: 30%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .body h4 {
    width: 100%;
    margin: auto 0;
    margin-block: 0;
    text-align: center;
    text-decoration: none;
  }

  @media (min-width: 700px) {
    .body {
      width: 90%;
    }
  }
  
`