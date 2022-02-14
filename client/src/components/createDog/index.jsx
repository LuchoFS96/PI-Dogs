import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createDog, getTemperaments } from "../../store/actions";
import { Link } from "react-router-dom";

export default function CreateDog(props) {
  let dispatch = useDispatch();
  let i = 0;
  const [state, setState] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    image: "",
    temperaments: [],
  });

  let temperaments = useSelector((state) => state.temperaments);
  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const dog = {
      name: e.target.name.value,
      height: e.target.height.value,
      weight: e.target.weight.value,
      life_span: e.target.life_span.value,
      image: e.target.image.value,
      temperament: [...state.temperaments],
    };
    console.log(dog);
    setState({
      name: "",
      height: "",
      weight: "",
      life_span: "",
      image: "",
      temperaments: [],
    });
    dispatch(createDog(dog));
  }

  function addTemp(e) {
    console.log("added " + e.target.value);
    setState({
      ...state,
      temperaments: [...state.temperaments, e.target.value],
    });
  }

  return (
    <div className="createDog">
      <h1>Create Doggo!</h1>
      <div className="form">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={(e) => handleChange(e)}
          ></input>

          <br />

          <label>Height</label>
          <input
            type="text"
            name="height"
            value={state.height}
            onChange={(e) => handleChange(e)}
          ></input>

          <br />

          <label>Weight</label>
          <input
            type="text"
            name="weight"
            value={state.weight}
            onChange={(e) => handleChange(e)}
          ></input>

          <br />

          <label>Life Span</label>
          <input
            type="text"
            name="life_span"
            value={state.life_span}
            onChange={(e) => handleChange(e)}
          ></input>

          <br />

          <label>Image</label>
          <input
            type="text"
            name="image"
            value={state.image}
            onChange={(e) => handleChange(e)}
          ></input>

          <br />

          <select onChange={(e) => addTemp(e)}>
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
          <input type="submit" value="send"></input>
        </form>
      </div>

      <br />
      <Link to="/home">Go Back</Link>
    </div>
  );
}
