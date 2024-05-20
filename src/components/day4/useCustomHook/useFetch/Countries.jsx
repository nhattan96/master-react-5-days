import useCountries from "./useCountries";

function Countries() {
  // const [data, error] = useFetch("https://restcountries.com/v3.1/all");

  const countries = useCountries();

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
        {countries.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </>
  );
}
export default Countries;
