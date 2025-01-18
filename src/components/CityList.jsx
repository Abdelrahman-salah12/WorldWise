import { useCities } from "../contexts/CitiesContext";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

function CityList() {
  const { cities, isLoading } = useCities();
  console.log(cities, isLoading);
  if (isLoading) return <Spinner />;
  if (!cities.length) return;
  return (
    <ul className={styles.cityList}>
      <li></li>
      <li></li>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

// CityList.propTypes = {
//   cities: PropTypes.array.isRequired,
//   isLoading: PropTypes.bool.isRequired,
// };

export default CityList;
