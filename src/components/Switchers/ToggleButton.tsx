// src/ToggleButton.js
import React, { useState, useContext } from 'react';
import { useMutation } from "react-query";
import axios from "axios";
import { ApiContext } from "../../common/contexts";

type ToggleButtonProp = {
  relay_id: string;
  label: string;
  lastvalue: string;
};

const ToggleButton = ({ relay_id, label, lastvalue }<ToggleButtonProp>) => {

  return (
    <>
      <span className="text-sm font-medium text-gray-900"></span>
      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" checked={(enabled) ? true : false} className="sr-only peer" />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" onClick={handleClick}></div>
        <span className="ms-3 text-sm font-medium text-gray-50 dark:text-gray-300">{(lastvalue === 'on') ? 'On' : 'Off'}</span>
      </label>
    </>
  );
};

export default ToggleButton;
