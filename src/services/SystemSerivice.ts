import axios from "axios";
import { apiUrl } from '../common/constants';

const apiClient = axios.create({
  baseURL: `${apiUrl}/system`,
  headers: {
    "Content-Type": "application/json",
  },
});

type SystemSensorType = {
  system_id: string;
  name: string;
  value: string;
};


const getCpuTempLog = async () => {
  // TODO: fix last value on api maybe add a status label
  const hours = 24; // default to 24 hours
  const response = await apiClient.get<SystemSensorType[]>(`/system/cpuTemperature/${hours}`);
  return response.data;
}

const getDiskUsageLog = async () => {
  // TODO: fix last value on api maybe add a status label
  const hours = 24; // default to 24 hours
  const response = await apiClient.get<SystemSensorType[]>(`/system/fileUsage/${hours}`);
  return response.data;
}

export default { getCpuTempLog, getDiskUsageLog };