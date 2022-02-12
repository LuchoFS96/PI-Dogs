import axios from "axios";
export const GET_DOGS = "GET_DOGS";
export const SEARCH_DOG = "SEARCH_DOG";

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
