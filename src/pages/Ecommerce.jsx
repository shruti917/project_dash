import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import Button from "../components/Button";
import { earningData, recentTransactions, weeklyStats, dropdownData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent 
      id="time" 
      fields={{ text: 'Time', value: 'Id' }} 
      style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} 
      value="1" 
      dataSource={dropdownData} 
      popupHeight="220px" 
      popupWidth="120px" 
    />
  </div>
);

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-34">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
          <div className="flex justify-between">
            <p className="font-semibold text-3xl">Tips ans Tricks</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Personal</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Professional</span>
              </p>
            </div>
          </div>
          <div className="mt-20 flex gap-10 flex-wrap justify-center">
            <div className="m-8">
              
                <p className="text-2xl font-semibold ">Daily Reflection</p>
                <p className="text-gray-500 mt-1">Spend a few minutes at the end of each day reviewing your tasks and goals. This habit keeps you aligned with your objectives.</p>
              
              <div className="mt-8">
                <p className="text-2xl font-semibold"> Visualization</p>
                <p className="text-gray-500 mt-1">Provides an instant, clear overview of task statuses, making workflow bottlenecks and progress easily identifiable.</p>
              </div>

              <div className="mt-8">
                <p className="text-2xl font-semibold">Time Blocking</p>
                <p className="text-gray-500 mt-1">Allocate specific time blocks in your calendar for focused work, meetings, and breaks. This helps in managing your day more efficiently</p>
              </div>

            
            </div>
          </div>
        </div>

        {/* Other components and sections */}
      </div>
    </div>
  );
};

export default Ecommerce;

