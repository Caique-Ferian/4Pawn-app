import Label from "@atoms/Label";
import React from "react";
import SelectUpdateTypeProps from './types/index';



const SelectUpdateType: React.FC<SelectUpdateTypeProps> = (
  { setType }:SelectUpdateTypeProps) => {
  const types = ['age','image','weight','adopted'];
  return(
    <Label content="Update Type: " className="select-update">
      <select onChange={({target}) => setType(target.value)}>
        {types.map((type,i) => <option key={i}>{type}</option>)}
      </select>
    </Label>
  );
}

export default SelectUpdateType;