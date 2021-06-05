import React, {useState} from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  background: rebeccapurple;
`


const Station = ({name}) => {
/* const { stationId, setStationId } = useState({id: ''})

const handleClick = (stationId) => {
    setStationId({id: stationId})
  } */
  return (
    <div>
        {name}
    </div>
  );
}

export default Station;
