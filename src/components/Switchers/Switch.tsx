import React, { useContext, useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import Switcher from './Switcher';
import SwitcherService from '../../services/SwitchService';

type UpdateSwitchProps = {
  relay_id: string;
  lastvalue: string;
}

type SwitchProps = {
  relay_id: string;
  label: string;
  checked: boolean;
}

const Switch: React.FC<SwitchProps> = ({
  relay_id,
  checked,
}) => {
  const [status, setStatus] = useState<string | null>(null);
  const [switchPosition, setSwitchPosition] = useState<boolean>(checked);

  const {
    mutate: switchMutate,
    isLoading: switchMutateIsLoading,
    isError: switchMutateIsError,
    error: switchMutateError
  } = useMutation<any, Error>(
    async () => {
      return await SwitcherService.update(relay_id, !checked);
    },
    {
      onSuccess: (res) => {
        setSwitchPosition(!switchPosition);
        console.log(res);
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );
  //const updatedSwitch = SwitcherService.update(relay_id, checked);
  useEffect(() => {
    if (switchMutateIsLoading) setStatus("Loading");
  }, [switchMutateIsLoading]);

  const handleClick = () => {
    if (relay_id) {
      try {
        switchMutate();
      }
      catch (err) {
        console.error(err);
      }
    }
    // setEnabled(() => mutationRes.data.lastvalue === 'on');
  }
  if (switchMutateIsError) {
    return (
      <div>{JSON.stringify(switchMutateError)}</div>
    )
  }

  if (switchMutateIsLoading) {
    return (
      <div>{status}</div>
    )
  }
  return (
    <Switcher id={relay_id} checked={switchPosition} onSwitchChange={handleClick} />
  );
}

export default Switch