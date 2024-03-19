import CardComponent from "../../components/cardComponent/CardComponent";

import { useDispatch } from "react-redux";
import { getDrivers } from "../../redux/action";

import { useEffect } from "react";
import style from "../HomePage/Home.module.css";
const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDrivers());
  }, []);
  return (
    <div className={style.divHome}>
      <CardComponent />
    </div>
  );
};
export default HomePage;
