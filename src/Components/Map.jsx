import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

const Map = () => {
    const navigate = useNavigate()
    
    const [searchParams, setSearchParams] = useSearchParams();

    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");

    return (
      <div className={styles.mapContainer} onClick={() => navigate("form")}>
        <h1>Map</h1>
        <h1>
          Position: {lat}, {lng}
        </h1>

            {/* Used the useParams hook to get the latitude and longitude of each location */}
        <button onClick={() => setSearchParams({ lat: 30, lng: 50 })}>
          Change pos
        </button>
      </div>
    );
};

export default Map;   
