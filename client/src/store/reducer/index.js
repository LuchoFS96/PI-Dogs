import {
  GET_DOGS,
  SEARCH_DOG,
  GET_TEMPERAMENTS,
  TEMPERAMENT_CHANGE,
  // DB_CHANGE,
  CREATE_DOG,
  GET_DOG_DETAIL,
  GET_API_DOGS,
  GET_DB_DOGS,
  HANDLE_ALPHABETIC_CHANGE,
  HANDLE_WEIGHT_CHANGE,
  DELETE_DOG,
  // SET_PAGES,
  // ADD_TEMPERAMENT,
} from "../actions";

const initialState = {
  dogs: [],
  filteredDogs: [],
  temperaments: [],
  detailDog: [],
  pagesTotal: [],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: action.payload.data,
        // filteredDogs: [...action.payload.data].splice(0, 8),
        filteredDogs: action.payload.data,
        pagesTotal: Math.floor(action.payload.data.length / 8),
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
      let auxDogsDb = [...state.dogs].filter(
        (dog) => typeof dog.id !== "number"
      );
      let auxDogsDb2 = [];
      auxDogsDb.forEach((dog) =>
        dog.temperaments.forEach((temp) => {
          if (temp.name === temperament) auxDogsDb2.push(dog);
        })
      );
      return {
        ...state,
        filteredDogs: [...auxDogs, ...auxDogsDb2],
      };
    // case DB_CHANGE:
    // let db = action.payload;

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
        detailDog: action.payload,
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
          return action.payload === "abc" ? -1 : 1;
        }
        if (a.name > b.name) {
          return action.payload === "abc" ? 1 : -1;
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
          if (a.name === "Olde English Bulldogge") a.weight.metric = 27;
          else if (b.name === "Olde English Bulldogge") b.weight.metric = 27;
          return (
            parseInt(a.weight.metric ? a.weight.metric : a.weight) -
            parseInt(b.weight.metric ? b.weight.metric : b.weight)
          );
        });
      }
      if (action.payload === "+/-") {
        orderedWeight.sort((a, b) => {
          if (a.name === "Olde English Bulldogge") a.weight.metric = 27;
          else if (b.name === "Olde English Bulldogge") b.weight.metric = 27;
          return (
            parseInt(b.weight.metric ? b.weight.metric : b.weight) -
            parseInt(a.weight.metric ? a.weight.metric : a.weight)
          );
        });
      }
      return {
        ...state,
        filteredDogs: [...orderedWeight],
      };

    // case SET_PAGES:
    //   return {
    //     ...state,
    //     pages: Math.floor(action.payload.length / 8),
    //     // Math.floor(dogsFilter.length / 8
    //   };
    case DELETE_DOG:
      return {
        ...state,
        filteredDogs: action.payload,
      };

    default:
      return {
        state,
      };
  }
}
