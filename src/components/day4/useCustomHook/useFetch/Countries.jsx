import useCountries from "./useCountries";

function Countries({name}) {
  // const [data, error] = useFetch("https://restcountries.com/v3.1/all");

  const countries = useCountries(name);

  return (
    <>
      {/* {!error && !data ? (
        <p>Waiting</p>
      ) : error ? (
        <p>{error} </p>
      ) : (
        <b>{data.slice(0,100)}</b>
      )} */}
      <ul>
        {
          !countries ? <p>Waiting</p> : (
            countries.map((name, index) => (
              <li key={index}>{name}</li>
            ))
          )
        }
        
      </ul>
    </>
  );
}
export default Countries;
