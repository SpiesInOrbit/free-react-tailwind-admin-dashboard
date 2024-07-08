import axios from "axios";
import { apiUrl } from '../common/constants'

const apiClient = axios.create({
  baseURL: `${apiUrl}/sensors`,
  headers: {
    "Content-Type": "application/json",
  },
});

export interface SensorType {
  sensor_id: string;
  name: string;
  value: string;
  dt: Date;
}

const read = async () => {
  const response = await apiClient.get<SensorType[]>("");
  console.log(response.data);
  return response.data;
}

const getTempLog = async () => {
  // TODO: fix last value on api maybe add a status label
  const hours = 24; // default to 24 hours
  const response = await apiClient.get<SensorType[]>(`/tempsensor/${hours}`);
  return response.data;
}

const getHumidityLog = async () => {
  // TODO: fix last value on api maybe add a status label
  const hours = 24; // default to 24 hours
  const response = await apiClient.get<SensorType[]>(`/humiditysensor/${hours}`);
  return response.data;
}


const SensorService = { read, getTempLog, getHumidityLog };

export default SensorService;