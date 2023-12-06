import { createContext, useEffect, useState, useContext } from "react";

const citiesContext = createContext();

const BASE_URL = "http://localhost:8000";

const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
        setIsLoading(false);
      } catch (error) {
        alert("An error occurred while loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
      setIsLoading(false);
    } catch (error) {
      alert("An error occurred while loading data...");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <citiesContext.Provider value={{ cities, isLoading, currentCity, getCity }}>
      {children}
    </citiesContext.Provider>
  );
};

function useCities() {
  if (useContext === undefined) {
    throw new Error("useCities must be used within a CitiesProvider");
  }
  return useContext(citiesContext);
}

export { CitiesProvider, useCities };
