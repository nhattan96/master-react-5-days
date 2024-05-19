import useFetch from "./useFetch";

function Countries() {
  const [data, error] = useFetch("https://restcountries.com/v3.1/all");
  return (
    <>
      {!error && !data ? (
        <p>Waiting</p>
      ) : error ? (
        <p>{error} </p>
      ) : (
        <b>{data.slice(0,100)}</b>
      )}
    </>
  );
}
export default Countries;
