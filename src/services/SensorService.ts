import axios from "axios";
import { apiUrl } from '../common/constants';

const apiClient = axios.create({
  baseURL: `${apiUrl}/sensors`,
  headers: {
    "Content-Type": "application/json",
  },
});

export interface SensorType {
  id: string;
  name: string;
  value: string;
  sensor_id?: string;
  icon?: string;
  dt: Date;
  lastvalue: string;
}

export const handleSensorResponse = (setFunction: (val: SensorType | null) => void) => {
  return {
    enabled: true,
    retry: 3,
    onSuccess: (res: SensorType) => {
      const data: SensorType = {
        id: res.id.toString(),
        name: res.name.toString(),
        value: parseFloat(res.value).toFixed(2),
        icon: res.sensor_id ? res.sensor_id.toString().toUpperCase() : 'DEFAULT',
        dt: res.dt,
      }
      if (data?.value) setFunction(data);
    },
    onError: (err: any) => {
      console.error(err);
    }
  }
}


const getTemp = async () => {
  // TODO: fix last value on api maybe add a status label
  const hours = 0; // zero returns latest 
  const response = await apiClient.get<SensorType>(`/tempsensor/${hours}`);
  return response.data;
}


const getTempLog = async () => {
  // TODO: fix last value on api maybe add a status label
  const hours = 24; // default to 24 hours
  const response = await apiClient.get<SensorType[]>(`/tempsensor/${hours}`);
  return response.data;
}

const getHumidity = async () => {
  // TODO: fix last value on api maybe add a status label
  const hours = 0; // zero returns latest 
  const response = await apiClient.get<SensorType>(`/humiditysensor/${hours}`);
  return response.data;
}

const getHumidityLog = async () => {
  // TODO: fix last value on api maybe add a status label
  const hours = 24; // default to 24 hours
  const response = await apiClient.get<SensorType[]>(`/humiditysensor/${hours}`);
  return response.data;
}


const SensorService = { handleSensorResponse, getTempLog, getTemp, getHumidity, getHumidityLog };

export default SensorService;