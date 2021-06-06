import React from "react";
import styled from "styled-components";
import online from "../assets/online-icon.png"
import offline from "../assets/offline-icon.png"



const StyledButton = styled.button`
margin-left: auto;
margin-right: 20px;
border: none;
border-radius: 50px;
padding: 4px 20px 4px 6px;
display: flex;
font-family: "Lato", san-serif;
align-items: center;
line-height: 0;
`
const StyledImage = styled.img`
width: 15px;
height: 15px;
margin-right: 4px;
padding: 0;
`

const Button = ({icon, children}) => {
  return (
    <StyledButton>
      <StyledImage src={icon === 'on' ? online : offline}></StyledImage>
      {children}
    </StyledButton>
  );
}

export default Button;
