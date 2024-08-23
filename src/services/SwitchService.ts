import axios from "axios";
import { apiUrl } from '../common/constants';

const apiClient = axios.create({
  baseURL: `${apiUrl}/i2c-relay`,
  headers: {
    "Content-Type": "application/json",
  },
});

export interface SwitchType {
  relay_id: string;
  name: string;
  value: string;
}
/*
export type SwitchType = {
  relay_id: string | null;
  label: string;
  value: string;
}
  */

const findAll = async () => {
  const response = await apiClient.get<SwitchType[]>("");
  console.log(response.data);
  return response.data;
}

const update = async (relay_id: string, checked: boolean) => {
  // TODO: fix last value on api maybe add a status label
  const value = checked ? 'on' : 'off';
  const response = await apiClient.patch(
    `/${relay_id}`,
    { value });
  return response.data;
}

const SwitchService = { findAll, update };

export default SwitchService;