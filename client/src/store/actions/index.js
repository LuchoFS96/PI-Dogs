import axios from "axios";
export const GET_DOGS = "GET_DOGS";
export const SEARCH_DOG = "SEARCH_DOG";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const TEMPERAMENT_CHANGE = "TEMPERAMENT_CHANGE";
export const DB_CHANGE = "DB_CHANGE";
export const CREATE_DOG = "CREATE_DOG";
export const ADD_TEMPERAMENT = "ADD_TEMPERAMENT";
export const GET_DOG_DETAIL = "GET_DOG_DETAIL";

export function getDogs() {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/dogs")
      .then((dog) => {
        dispatch({
          type: GET_DOGS,
          payload: dog,
        });
      })
      .catch((error) => console.log(error));
  };
}

// export function getApiDogs(){
//   return function (dispatch) {
//     axios.get()
//   }
// }

export function getTemperaments() {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/temperament")
      .then((temperaments) => {
        dispatch({
          type: GET_TEMPERAMENTS,
          payload: temperaments,
        });
      })
      .catch((error) => console.log(error));
  };
}

export function searchDog(search) {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/dogs?name=" + search)
      .then((dog) => {
        dispatch({
          type: SEARCH_DOG,
          payload: dog,
        });
      })
      .catch((error) => console.log(error));
  };
}

export function handleTemperamentChange(temperament) {
  return {
    type: TEMPERAMENT_CHANGE,
    payload: temperament,
  };
  // return function (dispatch) {
  //   dispatch({
  //     type: TEMPERAMENT_CHANGE,
  //     payload: temperament
  //   })
  // }
}

export function handleDbChange(db) {
  return {
    type: DB_CHANGE,
    payload: db,
  };
}

export function createDog(dog) {
  return async function (dispatch) {
    var info = await axios.post("http://localhost:3001/dog", dog);
    return dispatch({
      type: CREATE_DOG,
      payload: info.data,
    });
  };
}

// export function addTemperament(temperament) {
//   return {
//     type: ADD_TEMPERAMENT,
//     payload: temperament,
//   };
// }

export function getDogDetail(id) {
  return async function (dispatch) {
    var dog = await axios.get(`http://localhost:3001/dogs/${id}`);
    return dispatch({
      type: GET_DOG_DETAIL,
      payload: dog.data,
    });
  };
}
