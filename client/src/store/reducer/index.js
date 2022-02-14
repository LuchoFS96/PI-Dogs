import {
  GET_DOGS,
  SEARCH_DOG,
  GET_TEMPERAMENTS,
  TEMPERAMENT_CHANGE,
  DB_CHANGE,
  CREATE_DOG,
  GET_DOG_DETAIL,
  GET_API_DOGS,
  GET_DB_DOGS,
  HANDLE_ALPHABETIC_CHANGE,
  HANDLE_WEIGHT_CHANGE,
  // ADD_TEMPERAMENT,
} from "../actions";

const initialState = {
  dogs: [],
  filteredDogs: [],
  temperaments: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: action.payload.data,
        filteredDogs: action.payload.data,
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload.data,
      };
    case SEARCH_DOG:
      return {
        ...state,
        filteredDogs: action.payload.data,
      };
    case TEMPERAMENT_CHANGE:
      let temperament = action.payload;
      // dog.temperaments.includes(temperament);
      // );
      // let auxDogs = state.dogs.filter((e) => {
      //   if (e.temperament !== undefined)
      //     if (e.temperament.includes(temperament)) return e;
      // });
      let auxDogs = state.dogs.filter(
        (e) => e.temperament && e.temperament.includes(temperament)
      );

      return {
        ...state,
        filteredDogs: auxDogs,
      };
    case DB_CHANGE:
      let db = action.payload;

    // if (db === "") {

    // }
    case CREATE_DOG:
      return {
        ...state,
      };

    // case ADD_TEMPERAMENT:
    case GET_DOG_DETAIL:
      return {
        ...state,
        filteredDogs: action.payload,
      };

    case GET_API_DOGS:
      return {
        ...state,
        filteredDogs: [...state.dogs].filter(
          (dog) => typeof dog.id === "number"
        ),
      };

    case GET_DB_DOGS:
      return {
        ...state,
        filteredDogs: [...state.dogs].filter(
          (dog) => typeof dog.id !== "number"
        ),
      };

    case HANDLE_ALPHABETIC_CHANGE:
      let orderedAlphabetic = [...state.dogs].sort((a, b) => {
        if (a.name < b.name) {
          return action.payload == "abc" ? -1 : 1;
        }
        if (a.name > b.name) {
          return action.payload == "abc" ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        filteredDogs: [...orderedAlphabetic],
      };

    case HANDLE_WEIGHT_CHANGE:
      // let orderedWeight = [...state.dogs].sort((a, b) => {
      //   console.log(a.weight.metric.split(" - ").shift());

      //   if (
      //     a.weight.metric.split(" - ").shift() <
      //     b.weight.metric.split(" - ").shift()
      //   ) {
      //     return action.payload == "-/+" ? -1 : 1;
      //   }
      //   if (
      //     a.weight.metric.split(" - ").shift() >
      //     b.weight.metric.split(" - ").shift()
      //   ) {
      //     return action.payload == "-/+" ? 1 : -1;
      //   }
      //   return 0;
      // });
      let orderedWeight = [...state.dogs];
      if (action.payload === "-/+") {
        orderedWeight.sort((a, b) => {
          return (
            parseInt(a.weight.metric.split(" - ").shift()) -
            parseInt(b.weight.metric.split(" - ").shift())
          );
        });
      }
      if (action.payload === "+/-") {
        orderedWeight.sort((a, b) => {
          return (
            parseInt(b.weight.metric.split(" - ").pop()) -
            parseInt(a.weight.metric.split(" - ").pop())
          );
        });
      }
      return {
        ...state,
        filteredDogs: [...orderedWeight],
      };

    default:
      return {
        state,
      };
  }
}
