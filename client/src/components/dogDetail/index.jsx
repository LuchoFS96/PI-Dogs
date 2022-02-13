import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getDogDetail } from "../../store/actions";

export default function DogDetail() {
  let { id } = useParams();
  let dispatch = useDispatch();
  let dog = useSelector((state) => state.filteredDogs);
  useEffect(() => {
    dispatch(getDogDetail(id));
  }, [dispatch, id]);

  return dog ? (
    <div>
      <h1>{dog.name}</h1> {console.log(dog)}
      <img src={dog.image} alt={`${dog.name}_image`} />
      <h3>{dog.height.metric}</h3>
      <h3>{dog.weight.metric}</h3>
      <h3>{dog.life_span}</h3>
      <h3>{dog.temperament}</h3>
    </div>
  ) : (
    <div>'loding'</div>
  );
}
