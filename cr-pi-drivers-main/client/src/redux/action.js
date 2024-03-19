import {
  GET_DRIVERS,
  ORDER,
  SEARCH_DRIVERS_SUCCESS,
  ORDENBYDOB,
  ORDENBYID,
  GET_TEAMS,
  GET_ALL_API_BD,
  FILTERTEAMS,
  POSTDRIVERS,
} from "./type";
import axios from "axios";
import Swal from "sweetalert2";
export const getDrivers = () => {
  return async function (dispatch) {
    const apiDrivers = await axios.get("/drivers");
    const drivers = apiDrivers.data;

    dispatch({ type: GET_DRIVERS, payload: drivers });
  };
};
export const getTeamsAll = () => {
  try {
    return async function (dispatch) {
      const team = await axios.get("/teams");
      const obTeams = team.data;
      dispatch({
        type: GET_TEAMS,
        payload: obTeams,
      });
    };
  } catch (error) {
    dispatch(error.message);
  }
};

export const searchDrivers = (name) => {
  try {
    return async function (dispatch) {
      const DriverName = await axios.get(`/drivers?name=${name}`);
      const drivers = DriverName.data;
      dispatch({ type: SEARCH_DRIVERS_SUCCESS, payload: drivers });
    };
  } catch (error) {
    dispatch(alert(`No se encontro el conductor con el ${name}`));
  }
};
export const posDrivers = (formData) => {
  return async function () {
    try {
      console.log("Creando conductor...");
      // En lugar de enviar una solicitud POST vacía, envía los datos en el cuerpo de la solicitud
      await axios.post("/drivers", formData);

      Swal.fire({ title: "Exito", text: "Equipo creado", icon: "success" });
    } catch (error) {
      console.error("Error al crear el conductor:", error);
    }
  };
};
export const eliminarDrivers = (id) => {
  return async (dispatch) => {
    try {
      // Realiza la eliminación del archivo en el servidor
      await axios.delete(`/drivers/${id}`);
      // Después de eliminar con éxito, obtén nuevamente la lista actualizada
      // Esto actualiza el estado con la lista actualizada
      Swal.fire({
        title: "Exito",
        text: "Conductor eliminado",
        icon: "success",
      });
      dispatch({
        type: "REMOVE_DRIVERS",
        id,
      });
    } catch (error) {
      Swal.fire({
        title: "Este conductor no se puede eliminar",
        text: "Solo puedes eliminaar los creados",
        icon: "error",
      });
    }
  };
};
export const filTrarTeams = (ordenTeams) => {
  return function (dispatch) {
    try {
      dispatch({
        type: FILTERTEAMS,
        payload: ordenTeams,
      });
    } catch (error) {
      dispatch(error.message);
    }
  };
};
export const getAllApiBd = (apiAllBd) => {
  return {
    type: GET_ALL_API_BD,
    payload: apiAllBd,
  };
};
export const ordenDriver = (orden) => {
  return {
    type: ORDER,
    payload: orden,
  };
};
export const ordenDriverDod = (dod) => {
  return {
    type: ORDENBYDOB,
    payload: dod,
  };
};
export const ordenDriverId = (id) => {
  return {
    type: ORDENBYID,
    payload: id,
  };
};
