import React, {useState} from "react";
import styled from "styled-components";

const StationWrapper = styled.div`
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background: white;
    border-radius: 10px;
    max-width: 90vw;


    p {
        opacity: .5;
        font-family: "Poppins", sans-serif;
    }

    span {
        font-size: 16px;
        font-family: "Poppins", sans-serif;
    }
`
const Container = styled.div`
    display: flex;
    height: 100vh;
    background: #f2f2f2;
    justify-content: center;
    align-item: center;
    padding: 4rem 0;
`

const Station = (props) => {
    /* const { station_ID, custom_evse_id, location_ID, seller_ID, name, connected, position, available, lastconnect, roaming_identifier_cpo } = props.location.state */
    const { state } = props.location
  return (
    <Container>
        <StationWrapper>
            {Object.entries(state).map(([key, value]) => 
            <div>
                <p>{key}</p>
                <span>{value}</span>
            </div>)}
        </StationWrapper>
    </Container>
  );
}

export default Station;