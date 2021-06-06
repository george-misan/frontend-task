import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"
import { Reset } from 'styled-reset'

import { stations } from "./data"
import Stations from './Stations'

const Wrapper = styled.ul`
  background: #f1f1f1;
`
const StyledLink = styled(Link)`
  width: 100%;
  background: red;
`


const App = () => {
  return (
    <React.Fragment>
    <Reset />
    <Wrapper>
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
