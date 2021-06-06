import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"
import { Reset } from 'styled-reset'

import { stations } from "./data"
import { respond } from "./_respond"
import Stations from './components/Stations'

const Wrapper = styled.ul`
  background: #f1f1f1;

  ${respond.mobile`
  padding: 10rem 2rem;  
  `}

  ${respond.xs`
   padding: 10rem 4rem;   
`}

  ${respond.sm`
   padding: 10rem 10rem;  
  `}

  ${respond.md`
   padding: 10rem 18rem;  
  `}

  ${respond.lg`
   padding: 10rem 20rem; 
  `}
`
const StyledLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  color: #333;
`
const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  font-weight: 600;
  font-size: clamp(40px, 4vw, 50px);
  color: #333;
  margin-bottom: 30px;
`



const App = () => {
  return (
    <React.Fragment>
      <Reset />
      <Wrapper>
      <Heading>Your Stations</Heading>
        {stations.length > 0 && stations.map((station) =>
          <StyledLink to={{ pathname: `/station/${station.name}`, state: station}}>
            <Stations key={station.id} {...station}/>
          </StyledLink>
        )}
      </Wrapper>
    </React.Fragment>
  );
}

export default App;
