import React from "react";
import SelectUpdateTypeProps from './types/index';



const SelectUpdateType: React.FC<SelectUpdateTypeProps> = (
  { setType }:SelectUpdateTypeProps) => {
  const types = ['Age','Image','Weight','Adopted'];
  return(
    <select 
      onChange={({target}) => setType(target.value.toLowerCase())}
      className= "form-select form-select-sm select-container"
    >
      <option selected value=''>Update Type</option>
      {types.map((type,i) => <option key={i}>{type}</option>)}
    </select>
  );
}

export default SelectUpdateType;