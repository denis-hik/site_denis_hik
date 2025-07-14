import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const BodyPopoutMenu = styled.div<{show: boolean}> `
  width: ${props => props.show ? "100vw" : "0vw"};
  height: ${props => props.show ? "100vh" : "0vh"};
  background-color: rgba(0, 0, 0, 0.7);
  position: ${props => props.show ? "fixed" : "absolute"};
  right: ${props => props.show ? "0" : "-100vw"};
  top: ${props => props.show ? "0" : "-100vh"};
  opacity: ${props => props.show ? "1" : "0"};
  transition: opacity 0.3s ease-in-out;

  .body {
    opacity: ${props => props.show ? "1" : "0"};
    transition: opacity 0.3s ease-in-out;
    display: flex;
    flex-flow: column;
    justify-content: center;
    width: 20vw;
    padding: 5px;
    background-color: #f1f1f1;
    border-radius: 10px;
    position: ${props => props.show ? "fixed" : "absolute"};
    right: ${props => props.show ? "10px" : "-100vw"};
    top: ${props => props.show ? "10px" : "-100vh"};
      
    .lang {
        background-color: rgb(218, 217, 217);
        border-radius: 20px;
        max-height: 30px;
        margin-bottom: 10px;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px;
        opacity: 1;
        gap: 10px;
        transition: opacity 0.3s ease-in-out;
        transition: color 0.2s ease;
        .hidden {
            opacity: 0;
        }
        
        img {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            object-fit: fill;
        }
        
        &:hover {
            color: #0077ff;
            opacity: 0.7;
            img {
            }
        }
    }
      
    .bodyImagesUrls {
      height: 30px;
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: space-around;

      img {
        transition: opacity 0.3s ease-in-out;
        cursor: pointer;
        opacity: 1;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
  
  .body h4 {
    color: black;
    text-decoration: none;
  }
  .body h4:hover {
    text-decoration: underline;
  }
  
  
  @media (min-width: 650px) {
    background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 48%, rgba(0,0,0,0.7) 100%);
  }

  @media (max-width: 650px) {
    .body {
      top: unset;
      right: unset;
      left: 0;
      bottom: 0;
      width: calc(100vw - 10px);
      border-radius: 10px 10px 0 0;
      height: 50px;
      visibility: visible;
    }
  }
`
export const ButtonLink = styled(NavLink)`
  text-decoration: none;
  background: #dad9d9;
  border-radius: 20px;
  margin-bottom: 5px;
  height: calc(100% / 3);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  .active {
    text-decoration: underline;
  } 
    
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(8px);
  }

  @media (max-width: 650px) {
    position: absolute;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
  }
`