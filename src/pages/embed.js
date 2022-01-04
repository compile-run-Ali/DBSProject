import React from "react";
import Homepage from "./homepage";
import {id} from "./search"

export default function embed() {
  return (
    <div style={{
      backgroundColor:'coral',
      width: '1550px',
      height: '1000px'
    }}>
      <Homepage embedId = {id} />
    </div>
  );
}
