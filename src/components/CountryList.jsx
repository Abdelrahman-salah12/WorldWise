import styles from "./CityList.module.css";
import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
import { useCities } from "../contexts/CitiesContext";

function CountryList() {
  const { cities, isLoading } = useCities();
  console.log(cities, isLoading);

  if (isLoading) return <Spinner />;
  if (!cities.length) return;

  const countries = cities.reduce((accumulator, city) => {
    if (!accumulator.map((el) => el.country).includes(city.country))
      return [
        ...accumulator,
        { country: city.country, emoji: city.emoji, id: city.id },
      ];
    return accumulator;

    //let countries = [];
    /*for(let i = 0; i < citise.length; i++){
      if(countries.includes(city.country)) return;
      else countries.push(city.country)
    }
    */
  }, []);
  return (
    <ul className={styles.cityList}>
      {countries.map((country) => (
        <CountryItem key={country.id} country={country} />
      ))}
    </ul>
  );
}

// CountryList.propTypes = {
//   cities: PropTypes.array.isRequired,
//   isLoading: PropTypes.bool.isRequired,
// };
export default CountryList;
