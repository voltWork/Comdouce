import React from 'react';

export default function Filter({options,defaultValue}) { 
    return(
    <select>
     <option disabled value=''>{defaultValue}</option>
     {options.map(option=> <option key={option.value} value={option.value}>{option.value}</option>)}
    </select>
    );
 
}