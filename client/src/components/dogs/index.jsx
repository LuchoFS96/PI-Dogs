import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getApiDogs,
  getDbDogs,
  getDogs,
  getTemperaments,
  handleDbChange,
  handleTemperamentChange,
} from "../../store/actions";
import Dog from "../dog";
import Temperament from "../temperaments";
import "./index.css";

export default function Dogs() {
  let dogs = useSelector((state) => state.filteredDogs);
  let temperaments = useSelector((state) => state.temperaments);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
  }, [dispatch]);
  console.log(dogs);

  function handleTempChange(e) {
    console.log(e.target.value);
    dispatch(handleTemperamentChange(e.target.value));
  }

  function handleChange(e) {
    if (e.target.value === "") dispatch(getDogs());
    else if (e.target.value === "api") dispatch(getApiDogs());
    else if (e.target.value === "db") dispatch(getDbDogs());
  }

  return (
    <div className="dogs">
      <div className="temperaments">
        <select onChange={(e) => handleTempChange(e)}>
          <option value="">Select Temperament</option>
          {temperaments &&
            temperaments.map((temperament) => {
              return (
                <option
                  temperament={temperament}
                  key={temperaments.indexOf(temperament)}
                  id={temperaments.indexOf(temperament)}
                  value={temperament}
                >
                  {temperament}
                </option>
              );
            })}
        </select>
      </div>

      <div className="races">
        <select onChange={(e) => handleChange(e)}>
          <option value="">Both DB's</option>
          <option value="api">Api</option>
          <option value="db">Db</option>
        </select>
      </div>

      {dogs ? (
        dogs.map((dog) => {
          return (
            <Dog
              key={dog.id}
              id={dog.id}
              name={dog.name}
              temperament={dog.temperament}
              img={dog.image_url}
              weight={dog.weight}
            />
          );
        })
      ) : (
        <div>cargando</div>
      )}
    </div>
  );
}
