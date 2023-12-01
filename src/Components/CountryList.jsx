import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";

const CountryList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message
        message={"Add your first city by clicking on a city on the map... "}
      />
    );

  const countries = cities;

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.id} country={country} />
      ))}
    </ul>
  );
};

export default CountryList;