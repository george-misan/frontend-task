import React, { Fragment } from "react";
import styled from "styled-components";
import { Reset } from 'styled-reset'
import { Link } from "react-router-dom"

import arrow from "../assets/arrow.png"
import { respond } from "../_respond"

const Container = styled.div`
    height: 100vh;
    background: #f2f2f2;
    padding: 4rem 30rem;
    margin: 0 auto;

    ${respond.mobile`
    padding: 10rem 2rem;  
    `}
  
    ${respond.xs`
     padding: 10rem 4rem;   
  `}
  
    ${respond.sm`
     padding: 10rem 8rem;  
    `}
  
    ${respond.md`
     padding: 10rem 10rem;  
    `}
  
    ${respond.lg`
    padding: 10rem 16rem;
    `}

` 

const StationWrapper = styled.div`
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 80px);
    grid-gap: 20px;
    background: white;
    border-radius: 10px;
    max-width: 60vw;
    min-height: 50%;

    ${respond.mobile`
    grid-template-columns: repeat(2, 1fr);
    `}
  
    ${respond.xs`
    grid-template-columns: repeat(2, 1fr);
  `}
  
    ${respond.sm`
    grid-template-columns: repeat(2, 1fr);
    `}
  
    ${respond.md`
    grid-template-columns: repeat(3, 1fr);
    `}
  
    ${respond.lg`
    grid-template-columns: repeat(4, 1fr);
    `}
`

const StyledLink = styled(Link)`
margin-right: 20px;

img{
    width: 38px;
}
`
const StyledDiv = styled.div`

p {
    opacity: .6;
    font-family: "Lato", sans-serif;
    margin-bottom: 10px;
}

span {
    font-size: 16px;
    font-family: "Lato", sans-serif;
}
`

const Heading = styled.div`
margin-bottom: 4rem;

span{
    font-family: "Lato", sans-serif;
    font-weight: 600;
    font-size: clamp(20px, 3vw, 48px);
    line-height: 1rem;
    color: #333;
}
`

const Station = (props) => {
    const { state } = props.location
  return (
    <>
     <Reset />
        <Container>
            <>
            <Heading><StyledLink to='/'><img src={arrow} alt="Left arrow icon"/></StyledLink><span>{state.name}</span></Heading>
            <StationWrapper>
                {Object.entries(state).map(([key, value]) => 
                <StyledDiv>
                    <p>{key}</p>
                    <span>{value}</span>
                </StyledDiv>)}
            </StationWrapper>
            </>
        </Container>
    </>
  );
}

export default Station;