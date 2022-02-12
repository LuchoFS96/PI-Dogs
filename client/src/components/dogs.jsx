import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../store/actions";
import Dog from "./dog";

export default function Dogs() {
  let dogs = useSelector((state) => state.dogs);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);
  console.log(dogs);
  return (
    <div>
      {dogs &&
        dogs.map((dog) => {
          return (
            <Dog key={dog.id} id={dog.id} name={dog.name} img={dog.image_url} />
          );
        })}
    </div>
  );
}
