import React, { useState, createContext } from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import CardDataStats from '../components/CardDataStats';
import ChartOne from '../components/Charts/ChartOne';
import ChartThree from '../components/Charts/ChartThree';
import ChartTwo from '../components/Charts/ChartTwo';
import ChatCard from '../components/Chat/ChatCard';
import MapOne from '../components/Maps/MapOne';
import { Link } from 'react-router-dom';
import { TempIcon, CameraIcon, HumidityIcon } from './UiElements/Icons';



const Dashboard: React.FC = () => {
  const cardIcons: cardIcons = {
    TEMP_ICON: <TempIcon />,
    HUMIDITY_ICON: <HumidityIcon />,
  }

  const cardStats = [
    { title: "Temperature", total: "3.47", rate: "0.43", levelUp: true, icon: 'TEMP_ICON' },
    { title: "Humidity", total: "3.46", rate: "0.43", levelDown: true, icon: 'HUMIDITY_ICON' },
  ];
  const imgUrl = new URL('/images/camera1/7.jpg', import.meta.url).href

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {cardStats.map((item, index) => (
          <CardDataStats
            title={item.title}
            total={item.total?.toString()}
            rate={item.rate?.toString()}
            key={index}
            levelDown={item?.levelDown}
            levelUp={item?.levelUp}
          >
            <>{cardIcons[item.icon as keyof typeof cardIcons]}</>
          </CardDataStats>
        ))}
        <CardDataStats title="CPU Temp" total="2.450" rate="2.59%" levelUp>
          <svg fill="#000000" width="24px" height="24px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>temperature-three-quarters</title>
            <path d="M20.75 6.008c0-6.246-9.501-6.248-9.5 0v13.238c-1.235 1.224-2 2.921-2 4.796 0 3.728 3.022 6.75 6.75 6.75s6.75-3.022 6.75-6.75c0-1.875-0.765-3.572-2-4.796l-0.001-0zM16 29.25c-2.9-0-5.25-2.351-5.25-5.251 0-1.553 0.674-2.948 1.745-3.909l0.005-0.004 0.006-0.012c0.13-0.122 0.215-0.29 0.231-0.477l0-0.003c0.001-0.014 0.007-0.024 0.008-0.038l0.006-0.029v-13.52c-0.003-0.053-0.005-0.115-0.005-0.178 0-1.704 1.381-3.085 3.085-3.085 0.060 0 0.12 0.002 0.179 0.005l-0.008-0c0.051-0.003 0.11-0.005 0.17-0.005 1.704 0 3.085 1.381 3.085 3.085 0 0.063-0.002 0.125-0.006 0.186l0-0.008v13.52l0.006 0.029 0.007 0.036c0.015 0.191 0.101 0.36 0.231 0.482l0 0 0.006 0.012c1.076 0.966 1.75 2.361 1.75 3.913 0 2.9-2.35 5.25-5.25 5.251h-0zM16.75 21.367v-11.522c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 11.522c-1.164 0.338-2 1.394-2 2.646 0 1.519 1.231 2.75 2.75 2.75s2.75-1.231 2.75-2.75c0-1.252-0.836-2.308-1.981-2.641l-0.019-0.005zM26.5 2.25c-1.795 0-3.25 1.455-3.25 3.25s1.455 3.25 3.25 3.25c1.795 0 3.25-1.455 3.25-3.25v0c-0.002-1.794-1.456-3.248-3.25-3.25h-0zM26.5 7.25c-0.966 0-1.75-0.784-1.75-1.75s0.784-1.75 1.75-1.75c0.966 0 1.75 0.784 1.75 1.75v0c-0.001 0.966-0.784 1.749-1.75 1.75h-0z"></path>
          </svg>
        </CardDataStats>
        <CardDataStats title="Free Disk Space" total="3.456G" rate="0.95%" levelDown>
          <svg height="24px" width="24px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000">
            <g>
              <path className="st0" d="M415.121,0H149.187c-20.472,0-37.074,16.602-37.074,37.075V156.6c0,7.576-3.247,14.795-8.915,19.821 L68.71,206.992c-5.668,5.018-8.916,12.236-8.916,19.812v46.32c0,2.927,2.376,5.302,5.292,5.302h13.457c4.09,0,7.41,3.32,7.41,7.412 v40.193c0,4.21-1.669,8.255-4.65,11.235l-16.858,16.85c-2.972,2.981-4.65,7.026-4.65,11.246v109.563 c0,20.473,16.601,37.075,37.074,37.075h318.252c20.482,0,37.084-16.602,37.084-37.075V37.075C452.205,16.602,435.603,0,415.121,0z M173.779,136.412h-29.902V50.448h29.902V136.412z M221.989,136.412h-29.902V50.448h29.902V136.412z M270.198,136.412h-29.902 V22.426h29.902V136.412z M318.408,136.412h-29.892V50.448h29.892V136.412z M366.618,136.412h-29.893V22.426h29.893V136.412z M414.828,136.412h-29.892V50.448h29.892V136.412z" />
            </g>
          </svg>
        </CardDataStats>
      </div >

      <div className="mt-4 grid grid-cols-12 gap-8 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-10">
        <div className="col-span-full rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="col-span-12 xl:col-span-8">
            <div className="flex flex-row px-4 gap-20 text-center lg:pb-8 xl:pb-11.5">
              <div className="relative display-block mx-auto min-w-fit rounded-full bg-white/20 backdrop-blur">
                <div className="relative drop-shadow-2">
                  <img src={imgUrl} alt="camera1" />
                  <label
                    htmlFor="camera1"
                    className="absolute bottom-0 right-0 flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2"
                  >
                    <CameraIcon />
                    <input
                      name="camera1"
                      id="camera1"
                      className="sr-only"
                      onClick={() => { console.log("clicked") }}
                    />
                  </label>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
                  Pepper Plants
                </h3>
                <p className="font-medium">Red, Yellow, Green</p>
                <div className="mx-auto mt-4.5 mb-5.5 grid max-w-94 grid-cols-3 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
                  <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                    <span className="font-semibold text-black dark:text-white">
                      259
                    </span>
                    <span className="text-sm">Days</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                    <span className="font-semibold text-black dark:text-white">
                      64
                    </span>
                    <span className="text-sm">Seeds</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
                    <span className="font-semibold text-black dark:text-white">
                      2
                    </span>
                    <span className="text-sm">Failed</span>
                  </div>
                </div>

                <div className="mx-auto max-w-180">
                  <h4 className="font-semibold text-black dark:text-white">
                    Hydroponic Grow
                  </h4>
                  <p className="mt-4.5">
                    <h3 className="font-semibold">Started on 2024-06-24</h3>
                    <p>Lost 2 to mold and continue periodic h2o2 treatments to contain further outbreaks. Estimate 10 days until transplant.</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
