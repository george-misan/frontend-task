import React, {useState} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #f1f1f1;

  div {
    display: inline-block;
    padding: 1rem;
    background: white;
  }
`


const Station = ({name, available}) => {
/* const { stationId, setStationId } = useState({id: ''})

const handleClick = (stationId) => {
    setStationId({id: stationId})
  } */
  return (
    <Wrapper>
        <div>{name}</div>
        {available > 0 ? <button>online</button> :  <button>offline</button>}
    </Wrapper>

  );
}

export default Station;
