import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { getDogs } from "../../store/actions";
// import CreateDog from "../createDog";
import Dogs from "../dogs";
import SearchBar from "../searchBar";

export default function Home() {
  const dogsFilter = useSelector((state) => state.filteredDogs);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <div className="Home">
      <SearchBar />
      {/* <Link to="/create">Create</Link> */}
      {dogsFilter ? (
        <Dogs dogsFilter={dogsFilter} />
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

// [ ] Input de búsqueda para encontrar razas de perros por nombre
// [ ] Área donde se verá el listado de razas de perros. Deberá mostrar su:
// Imagen
// Nombre
// Temperamento
// Peso
// [ ] Botones/Opciones para filtrar por:
// Temperamento
// Raza existente (es decir las que vienen de la API) o agregada por nosotros (creadas mediante el form)
// [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente las razas de perro por:
// Orden alfabético
// Peso
// [ ] Paginado para ir buscando y mostrando las siguientes razas, mostrando 8 razas por página.
// IMPORTANTE: Dentro de la Ruta Principal se deben mostrar tanto las razas de perros traidas desde la API como así
//  también las de la base de datos, pero NO está permitido almacenar en la base de datos las razas de perros de la API
//  sino que solamente se pueden guardar aquellas creadas desde el form.
