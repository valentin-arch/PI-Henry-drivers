import { useSelector, useDispatch } from "react-redux";
import {
  ordenDriver,
  ordenDriverDod,
  // ordenDriverId,
  filTrarTeams,
  getAllApiBd,
  getTeamsAll,
} from "../../redux/action";
import { useState, useEffect } from "react";
import Card from "../Card/card";
import stayle from "../cardComponent/CardComponen.module.css";
import Page from "../pages/Pages";
import { eliminarDrivers, getDrivers } from "../../redux/action";
const CardComponent = () => {
  const cards = useSelector((state) => state.copyDriver);
  const teams = useSelector((state) => state.Teams);
  const dispatch = useDispatch();
  const eliminar = async (id) => {
    await dispatch(eliminarDrivers(id));
    dispatch(getDrivers());
  };
  const [page, setPage] = useState(1);
  const [byPage, setByPage] = useState(9);
  const maximo = cards.length / byPage;
  const handleOrden = (e) => {
    dispatch(ordenDriver(e.target.value));
  };

  const handleOrdenBirday = (e) => {
    dispatch(ordenDriverDod(e.target.value));
  };
  // const handleOrdenId = (e) => {
  //   dispatch(ordenDriverId(e.target.value));
  // };
  const handleButon = (apiAllBd) => {
    dispatch(getAllApiBd(apiAllBd));
  };
  const filter = (e) => {
    dispatch(filTrarTeams(e.target.value));
  };

  useEffect(() => {
    dispatch(getDrivers());
    dispatch(getTeamsAll());
  }, []);
  return (
    <div className={stayle.CardComponent}>
      <button className={stayle.boton} onClick={() => handleButon("api")}>
        Mostrar Equipos de la API
      </button>
      <button className={stayle.boton} onClick={() => handleButon("bd")}>
        Mostrar Equipos de la Base de Datos
      </button>

      <select className={stayle.boton} onChange={filter}>
        <option value="">Seleccionar equipo</option>
        {teams?.map((te) => (
          <option key={te.id}> {te.name}</option>
        ))}
      </select>

      {/* <button onClick={filter}>Filtrar Conductores</button> */}

      <h1 className={stayle.titulo}>ordenar Alfabaticamente:</h1>
      <select className={stayle.select} onChange={handleOrden}>
        <option value="A">Ascendente</option>
        <option value="D">Decendente</option>
      </select>

      <h1 className={stayle.titulo}>Ordenar por fecha:</h1>
      <select className={stayle.select} onChange={handleOrdenBirday}>
        <option value="A">AscenDod</option>
        <option value="D">DecenDob</option>
      </select>
      {/* <h1 className={stayle.titulo}>Ordenar por ID:</h1>
      <select className={stayle.select} onChange={handleOrdenId}>
        <option value="A">Asendente</option>
        <option value="D">Decendente</option>
      </select> */}

      <div className={stayle.cards}>
        {Array.isArray(cards)
          ? cards.slice((page - 1) * byPage, (page - 1) * byPage + byPage).map(
              ({
                id,
                firstName,
                birthDate,
                image,
                team,
                description,
                nationality,

                lastName,
              }) => (
                <Card
                  key={id}
                  id={id}
                  firstName={firstName}
                  lastName={lastName}
                  description={description}
                  image={image}
                  nationality={nationality}
                  birthDate={birthDate}
                  team={team}
                  eliminar={eliminar}
                />
              )
            )
          : null}
      </div>
      {!cards.length && (
        <div className={stayle.nameNoEnc}>
          <h1>No se encontraron peronajes con ese nombre</h1>
        </div>
      )}
      <Page page={page} setPage={setPage} maximo={maximo} />
    </div>
  );
};
export default CardComponent;
