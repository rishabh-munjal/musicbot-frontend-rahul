import { BsPersonLinesFill, BsThreeDots } from "react-icons/bs";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { FaCirclePlay } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { useState, useEffect, useRef } from 'react';
import Menu from "./components/Menu";
import './App.css';

function App() {
  const [progress, setProgress] = useState(25); // Progress in %
  const radius = 130;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  const angle = (progress / 100) * 2 * Math.PI;
  const cx = 150 + radius * Math.cos(angle);
  const cy = 150 + radius * Math.sin(angle);

  // Calculate current time and duration for display (example)
  const currentTime = "02:15";
  const duration = "04:00";

  return (
    <div className="h-screen w-full bg-gradient-to-b from-[#5b7685] to-[#233038] text-white font-sans p-6 flex flex-col items-center justify-evenly bg-red-200">

      {/* Header */}
      <div className="w-full flex items-center justify-between">
        <button><BsPersonLinesFill className="h-6 w-6" /></button>
        <span className="text-sm font-medium tracking-wide text-gray-200">Indie Rock Road Trip</span>
        <button><BsThreeDots className="h-6 w-6" /></button>
      </div>

      <br />

      {/* Song Info */}
      <div className="text-center mb-4">
        <p className="text-2xl font-semibold">A Moment Apart</p>
        <h3 className="text-sm text-gray-300 mt-1">Odesza</h3>
      </div>

      <div className="mb-2 text-sm text-gray-300">
        {currentTime} | <span className="text-[#E1B269]">{duration}</span> 
      </div>

      {/* Album with arc around top */}
      <div className="relative w-[300px] h-[300px] flex items-center justify-center">

        {/* Album Image */}
        <img
          src="https://images.unsplash.com/photo-1597352651426-56ccf1dbc926?q=80&w=870&auto=format&fit=crop"
          alt="Album"
          className="w-[230px] h-[230px] rounded-full object-cover z-10"
        />

        {/* Circular Progress */}
        <svg className="absolute w-[300px] h-[300px] rotate-[-90deg] z-0">
          <circle
            cx="150"
            cy="150"
            r={radius}
            stroke="#66838B"
            strokeWidth="3"
            fill="none"
          />
          <circle
            cx="150"
            cy="150"
            r={radius}
            stroke="#E1B269"
            strokeWidth="3"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-300"
          />

          {/* Progress Knob (dot) */}
          <circle
            cx={cx}
            cy={cy}
            r="5"
            fill="#E1B269"
          /> 
        </svg>
      </div>



      {/* Control Buttons */}
      <div className="w-full h-[100px] flex items-center justify-between">
        <button><IoIosRemoveCircleOutline className="h-6 w-6 text-gray-400" /></button>
        <button><MdSkipPrevious className="h-8 w-8 text-gray-400" /></button>
        <button><FaCirclePlay className="h-14 w-14" /></button>
        <button><MdSkipNext className="h-8 w-8" /></button>
        <button><FaHeart className="h-6 w-6 text-[#E1B269]" /></button>
      </div>

      <Menu />

    </div>
  );
}

export default App;
