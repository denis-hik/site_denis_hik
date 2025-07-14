import styled from "styled-components";


const getAgreeShow = (bottom: number, defaultBottom: number) => Math.abs(bottom) <= defaultBottom;

export const TitleBody = styled.div<{bottom: number, defaultBottom: number}>`
  position: absolute;
  width: 100%;
  bottom: ${props => getAgreeShow(props.bottom, props.defaultBottom) ? props.bottom + "px" : undefined};  
  opacity: ${props => getAgreeShow(props.bottom, props.defaultBottom) ? "1" : "0"};
  top: ${props => getAgreeShow(props.bottom, props.defaultBottom) ? undefined : "0px"};
  z-index: ${props => getAgreeShow(props.bottom, props.defaultBottom) ? "1" : "-999"};
  border-radius: 10px;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
    
  h1 {
    text-shadow: 0 2px 4px rgba(0,0,0,0.6);
  }
  
  span {
    font-family: "Roboto variant10", Tofu;
    font-weight: 900;
    font-style: normal;
    font-stretch: normal;
  }
  
  @media (max-width: 550px) {
    height: 70px;

    img {
      width: 100px;
      height: 100px;
    }
    span {
      font-size: 50px;
    }
  }
  @media (min-width: 550px) {
    height: 120px;
  }
`