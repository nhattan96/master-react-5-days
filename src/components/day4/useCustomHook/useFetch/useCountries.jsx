import useFetch from "./useFetch";

const useCountries = (name) => {
  const [data, error] = useFetch("https://restcountries.com/v3.1/all");

  let countries = [];

  if (data) {
    countries = JSON.parse(data).map((item, index) => {
      return item.name.common;
    });

    if(name) {
      countries = countries.filter(item => item.toUpperCase().includes(name.toUpperCase()))
    }
  }

  return countries.slice(0, 10);
};

export default useCountries;
