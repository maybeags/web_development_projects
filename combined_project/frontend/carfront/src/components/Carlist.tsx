import { CarResponse } from "../types";
import axios from "axios";

function Carlist() {
  const getCars = async (): Promise<CarResponse[]> => {
    const response = await axios.get("http://localhost:8080/api/cars");

    return response.data._embeded.cars;
  }


  return(
    <></>
  );
}

export default Carlist;