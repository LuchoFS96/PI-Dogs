import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createDog, getTemperaments } from "../../store/actions";
import { Link } from "react-router-dom";
import "./index.css";

export default function CreateDog(props) {
  let dispatch = useDispatch();
  let i = 0;
  const [state, setState] = useState({
    name: "",
    min_height: "",
    max_height: "",
    min_weight: "",
    max_weight: "",
    min_life_span: "",
    max_life_span: "",
    image: "",
    temperaments: [],
  });

  const [errors, setErrors] = useState({});
  let temperaments = useSelector((state) => state.temperaments);

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    // setErrors(
    //   validate({
    //     ...state,
    //     [e.target.name]: e.target.value,
    //   })
    // );
  }

  function handleSubmit(e) {
    // if (
    //   errors.name !== undefined ||
    //   errors.height !== undefined ||
    //   errors.weight !== undefined ||
    //   errors.life_span !== undefined
    // ) {
    //   e.preventDefault();
    //   return alert("Sorry, all fields are required except image");
    // } else if (
    //   state.name === "" ||
    //   state.height === "" ||
    //   state.weight === "" ||
    //   state.life_span === ""
    // ) {
    //   e.preventDefault();
    //   return alert("Sorry, all fields are required except image");
    // } else if (
    //   isNaN(parseInt(state.height)) ||
    //   isNaN(parseInt(state.weight)) ||
    //   isNaN(parseInt(state.life_span))
    // ) {
    //   e.preventDefault();

    //   return alert("Sorry, please fill out the required fields correctly");
    // } else {
    const dog = {
      name: state.name,
      height: `${state.min_height} - ${state.max_height}`,
      weight: `${state.min_weight} - ${state.max_weight}`,
      life_span: `${state.min_life_span} - ${state.max_life_span}`,
      image:
        state.image !== ""
          ? state.image
          : "https://previews.123rf.com/images/red33/red331112/red33111200014/11546849-skizzieren-sie-doodle-crazy-verr%C3%BCckt-puppy-dog-vektor-illustration.jpg",
      temperament: [...state.temperaments],
    };
    console.log(dog);
    setState({
      name: "",
      min_height: "",
      max_height: "",
      min_weight: "",
      max_weight: "",
      min_life_span: "",
      max_life_span: "",
      image: "",
      temperaments: [],
    });
    dispatch(createDog(dog));
    // }
  }

  function addTemp(e) {
    console.log("added " + e.target.value);
    setState({
      ...state,
      temperaments: [...state.temperaments, e.target.value],
    });
  }

  function validate(input) {
    let expresion = /^(?![ .]+$)[a-zA-Z .]*$/gm;
    let errors = {};
    if (!input.name) {
      errors.name = "Name is missing";
    } else if (expresion.test(input.name) === false) {
      errors.name = "Name invalid";
    } else if (!input.height) {
      errors.height = "Min height is missing";
    } else if (input.height <= 0) {
      errors.height = "height cannot be negative or zero";
    } else if (!input.weight) {
      errors.weight = "Min weight is missing";
    } else if (input.weight <= 0) {
      errors.weight = "Weight can not be less";
    } else if (!input.life_span) {
      errors.life_span = "Min life is missing";
    } else if (input.life_span <= 0) {
      errors.life_span = "life years cannot be negative or zero";
    }
    return errors;
  }

  return (
    <div className="createDog">
      <div className="create-dog-form">
        <h1>Create Doggo!</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={(e) => handleChange(e)}
          ></input>

          <br />

          <label>Min Height</label>
          <br />
          <input
            type="text"
            name="min_height"
            value={state.min_height}
            onChange={(e) => handleChange(e)}
          ></input>

          <br />

          <label> Max Height</label>
          <br />
          <input
            type="text"
            name="max_height"
            value={state.max_height}
            onChange={(e) => handleChange(e)}
          ></input>

          <br />

          <label>Min Weight</label>
          <br />
          <input
            type="text"
            name="min_weight"
            value={state.min_weight}
            onChange={(e) => handleChange(e)}
          ></input>

          <br />

          <label>Max Weight</label>
          <br />
          <input
            type="text"
            name="max_weight"
            value={state.max_weight}
            onChange={(e) => handleChange(e)}
          ></input>

          <br />

          <label>Min Life Span</label>
          <br />
          <input
            type="text"
            name="min_life_span"
            value={state.min_life_span}
            onChange={(e) => handleChange(e)}
          ></input>

          <br />

          <label>Max Life Span</label>
          <br />
          <input
            type="text"
            name="max_life_span"
            value={state.max_life_span}
            onChange={(e) => handleChange(e)}
          ></input>

          <br />

          <label>Image</label>
          <br />
          <input
            type="text"
            name="image"
            value={state.image}
            onChange={(e) => handleChange(e)}
          ></input>
          <br />

          <br />

          <select onChange={(e) => addTemp(e)}>
            <option value="">Select Temperament</option>
            <br />
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
        <br />
        <Link to="/home">
          <button className="button">Go Back</button>
        </Link>
      </div>
    </div>
  );
}
