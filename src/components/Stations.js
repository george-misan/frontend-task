import React from "react";
import styled from "styled-components";

import Button from "./Button"

const Wrapper = styled.div`
  background: white;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: .4rem;


  div {
    display: inline-block;
    padding: 1rem;
    font-family: "Lato", san-serif;
    font-weight: 600;
    font-size: 15px;
  }
`


const Station = ({name, available}) => {
  return (
    <Wrapper>
        <div>{name}</div>
        {available > 0 ? <Button icon='on'>online</Button> :  <Button icon='off'>offline</Button>}
    </Wrapper>

  );
}

export default Station;
