import React, {useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"

import { stations } from "./data"
import Stations from './Stations'

const StyledDiv = styled.div`
  width: 100%;
  background: rebeccapurple;
`


const App = () => {
const { stationId, setStationId } = useState({id: ''})

  return (
    <ul>
      {stations.length > 0 && stations.map((station) =>
        <Link to={{ pathname: `/station/${station.name}`, state: station}}><Stations key={station.id} {...station}/></Link>
      )}
    </ul>
  );
}

export default App;
