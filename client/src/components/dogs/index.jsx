import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getApiDogs,
  getDbDogs,
  getDogs,
  getTemperaments,
  handleAlphabeticChange,
  handleDbChange,
  handleTemperamentChange,
  handleWeightChange,
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

  let i = 0;
  function handleTempChange(e) {
    console.log(e.target.value);
    dispatch(handleTemperamentChange(e.target.value));
  }

  function handleChange(e) {
    if (e.target.value === "") dispatch(getDogs());
    else if (e.target.value === "api") dispatch(getApiDogs());
    else if (e.target.value === "db") dispatch(getDbDogs());
  }

  function handleAlphaChange(e) {
    dispatch(handleAlphabeticChange(e.target.value));
  }

  function handleWChange(e) {
    dispatch(handleWeightChange(e.target.value));
  }

  return (
    <div className="dogs">
      {console.log(dogs)}
      <div className="temperaments">
        <select onChange={(e) => handleTempChange(e)}>
          <option value="">Select Temperament</option>
          {temperaments &&
            temperaments.map((temperament) => {
              return (
                <option
                  temperament={temperament}
                  key={i++}
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
          <option value="" key={"both"}>
            Both DB's
          </option>
          <option value="api" key={"api"}>
            Api
          </option>
          <option value="db" key={"db"}>
            Db
          </option>
        </select>
      </div>

      <div className="alphabeticOrder">
        <select onChange={(e) => handleAlphaChange(e)}>
          <option value="abc">A-Z</option>
          <option value="cba">Z-A</option>
        </select>
      </div>

      <div className="weightOrder">
        <select onChange={(e) => handleWChange(e)}>
          <option value="-/+">Menor a Mayor</option>
          <option value="+/-">Mayor a Menor</option>
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
              height={dog.height}
            />
          );
        })
      ) : (
        <div>cargando</div>
      )}
    </div>
  );
}
