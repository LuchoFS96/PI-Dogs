import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getDogDetail } from "../../store/actions";
import { Link } from "react-router-dom";
import "./index.css";

export default function DogDetail() {
  let { id } = useParams();
  let dispatch = useDispatch();
  let dog = useSelector((state) => state.detailDog);
  useEffect(() => {
    dispatch(getDogDetail(id));
  }, [dispatch, id]);

  //   return dog ? (
  //     <div>
  //       <h1>{dog.name}</h1> {console.log(dog)}
  //       <img src={dog.image} alt={`${dog.name}_image`} />
  //       <h3>{dog.height.metric}</h3>
  //       <h3>{dog.weight.metric}</h3>
  //       <h3>{dog.life_span}</h3>
  //       <h3>{dog.temperament}</h3>
  //     </div>
  //   ) : (
  //     <div>'loding'</div>
  //   );
  return (
    <div>
      {dog ? (
        <div className="dog-detail">
          <h1>ID: {dog.id}</h1>
          <h1>{dog.name}</h1> {console.log(dog)}
          <img
            src={dog.image ? dog.image : dog.image_url}
            alt={`${dog.name}_image`}
          />
          <h3>Height: {dog.height.metric ? dog.height.metric : dog.height}</h3>
          <h3>
            Weight: {dog.weight.metric ? dog.weight.metric : dog.weight} kg
          </h3>
          <h3>Life Span: {dog.life_span}</h3>
          <h3>
            Temperaments{" "}
            {dog.temperament
              ? dog.temperament
              : dog.temperaments.map((temperament) => temperament.name + " ")}
          </h3>{" "}
          <br />
          <Link to="/home" style={{ textDecoration: "none" }}>
            <button className="button">Go Back</button>
          </Link>
        </div>
      ) : (
        <div>
          <img
            src="https://assets.materialup.com/uploads/a7e6009b-6d69-4569-b1ee-0e01b234f2a1/preview.gif"
            alt="gif"
          ></img>
        </div>
      )}
    </div>
  );
}
