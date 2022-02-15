import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getApiDogs,
  getDbDogs,
  getDogs,
  getTemperaments,
  handleAlphabeticChange,
  handleTemperamentChange,
  handleWeightChange,
  searchDog,
} from "../../store/actions";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  let temperaments = useSelector((state) => state.temperaments);
  let i = 0;
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  function onInputChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(searchDog(search));
  }

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
    <div className="filters">
      <div className="SearchBar">
        <form onSubmit={onSubmit}>
          <input type="text" onChange={onInputChange} value={search} />
          <input type="submit" value="Buscar" />
        </form>
      </div>

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
    </div>
  );
}
