import { useEffect, useState } from "react";
import Countries from "./Countries";

const UseFetchApp = () => {

  const [country, setCountry] = useState()

  const onInput = (event) =>{ 
    setCountry(prev => event.target.value)
  }
  return (
    <>
      <h2> Use useCustomHook useFetch</h2>
      
      <label htmlFor="countryName">Search Country</label>
      <input type="text" name="" id="countryName" onChange={onInput}/>
      <Countries name={country}></Countries>
    </>
  );
};
export default UseFetchApp;
