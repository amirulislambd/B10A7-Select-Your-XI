import React, { use } from "react";
import AvailablePlyers from "./AvailablePlyers/AvailablePlyers";

const Plyers = ({promiseFetchPlyers}) => {
  const plyers = use(promiseFetchPlyers);
  console.log(plyers);
  return <div className="container mx-auto">
    <p>plyers:{plyers.length}</p>
    <AvailablePlyers plyers={plyers}/>
  </div>;
};

export default Plyers;
