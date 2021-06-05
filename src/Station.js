import React, {useState} from "react";
import styled from "styled-components";



const Station = (props) => {
    console.log(props)
  return (
    <div>
       {props.location.state.name}
    </div>
  );
}

export default Station;