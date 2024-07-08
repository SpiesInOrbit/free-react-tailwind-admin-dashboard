import React, { useState, useEffect, useContext } from 'react';
import { useQuery } from "react-query";
import Switch from './Switchers/Switch';
import SwitchService, { SwitchType } from '../services/SwitchService';


const Switches: React.FC = () => {

  const [switches, setSwitches] = useState<SwitchType[]>();

  const {
    isLoading: switchIsLoading,
    isError: switchIsError,
    error: switchError,
    refetch: getAllSwitches,
  } = useQuery(
    "switches",
    async () => {
      return await SwitchService.findAll();
    },
    {
      enabled: true,
      retry: 3,
      onSuccess: (res) => {
        console.log(res);
        setSwitches(res);
      },
      onError: (err: any) => {
        console.log(err);
      }
    }
  );

  useEffect(() => {
    getAllSwitches();
  }, [])

  return (
    <>
      <div className="container m-auto grid grid-cols-2 grid-rows-2 gap-2">
        {switchIsLoading && <div>Loading...</div>}
        {switchIsError && <div>{switchError?.message}</div>}
        {!switchIsLoading && !switchIsError && switches?.map((sw) => {
          return (
            <div className="tile flex gap-2 items-center">
              <h2 className="font-medium text-black dark:text-white flex-initial">{sw.name}</h2>
              <div className="flex-initial">
                <Switch key={sw.relay_id} label={sw.name} relay_id={sw.relay_id} checked={sw.lastvalue === 'on' ? true : false} />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Switches;