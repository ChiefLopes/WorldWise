import { createContext, useEffect, useState } from "react"

const citiesContext = createContext()

const BASE_URL = "http://localhost:8000";

const CitiesProvider = () => {
   const [cities, setCities] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

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
       }import { createContext, useEffect, useState } from "react"

const citiesContext = createContext()

const BASE_URL = "http://localhost:8000";

const CitiesProvider = () => {
   const [cities, setCities] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

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
    
    return (
        <citiesContext.Provider value={{ cities, isLoading }}>
            {children}
        </citiesContext.Provider>
    )
}

export default CityContext 
     }
     fetchCities();
   }, []);
    
    return (
        <citiesContext.Provider value={{ cities, isLoading }}>
            {children}
        </citiesContext.Provider>
    )
}

function useCities () {
     return useContext(citiesContext)
}

export {CitiesProvider, } 