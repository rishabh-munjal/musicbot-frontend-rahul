import { BsPersonLinesFill, BsThreeDots } from "react-icons/bs";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { FaCirclePlay } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import Menu from "./components/Menu";
import "./App.css";

function describeArc(x, y, radius, startAngle, endAngle) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    "M", start.x, start.y,
    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(" ");
}

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}

function App() {
  const [progress, setProgress] = useState(18);

  const radius = 135;
  const startDeg = 30;
  const endDeg = 330;
  const arcLength = endDeg - startDeg;
  const progressDeg = startDeg + (arcLength * progress) / 100;
  const knob = polarToCartesian(150, 150, radius, progressDeg);

  const currentTime = "01:15";
  const duration = "04:00";

  return (
    <div className="h-screen w-full bg-gradient-to-b from-[#5b7685] to-[#233038] text-white font-sans p-4 sm:p-6 flex flex-col items-center justify-evenly">

      {/* Header */}
      <div className="w-full flex items-center justify-between mb-4 px-2">
        <button><BsPersonLinesFill className="h-6 w-6" /></button>
        <span className="text-sm font-medium tracking-wide text-gray-200">Indie Rock Road Trip</span>
        <button><BsThreeDots className="h-6 w-6" /></button>
      </div>

      {/* Song Info */}
      <div className="text-center mb-2">
        <p className="text-xl sm:text-2xl font-semibold">A Moment Apart</p>
        <h3 className="text-xs sm:text-sm text-gray-300 mt-1">Odesza</h3>
      </div>

                    {/* Time */}
                    <div className="text-xs sm:text-sm text-gray-300 mb-0 ">
        {currentTime} | <span className="text-[#E1B269]">{duration}</span>
      </div>



      {/* Album + Arc */}
      <div className="relative w-[280px] sm:w-[300px] h-[280px] sm:h-[300px] flex items-center justify-center mb-3 px-0 py-0 mt-0 " >

        <div>
          <img
            src="https://images.unsplash.com/photo-1597352651426-56ccf1dbc926?q=80&w=870&auto=format&fit=crop"
            alt="Album"
            className="w-[220px] sm:w-[230px] h-[220px] sm:h-[230px] rounded-full object-cover z-10"
          />

        </div>



        {/* Arcs + Knob */}
        <svg
          viewBox="0 0 300 300"
          className="absolute w-full h-full"
        >
          {/* Background Arc */}
          <path
            d={describeArc(150, 150, radius, startDeg, endDeg)}
            fill="none"
            stroke="#66838B"
            strokeWidth="3"
          />

          {/* Progress Arc */}
          <path
            d={describeArc(150, 150, radius, startDeg, progressDeg)}
            fill="none"
            stroke="#E1B269"
            strokeWidth="3"
            strokeLinecap="round"
            className="transition-all duration-300"
          />

          {/* Progress Knob */}
          <circle
            cx={knob.x}
            cy={knob.y}
            r="5"
            fill="#E1B269"
          />
        </svg>
      </div>




      {/* Controls */}
      <div className="w-full max-w-[350px] h-[80px] flex items-center justify-between px-2 mt-0">
        <button><IoIosRemoveCircleOutline className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400" /></button>
        <button><MdSkipPrevious className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400" /></button>
        <button><FaCirclePlay className="h-12 w-12 " /></button>
        <button><MdSkipNext className="h-6 w-6 sm:h-8 sm:w-8" /></button>
        <button><FaHeart className="h-5 w-5 sm:h-6 sm:w-6 text-[#E1B269]" /></button>
      </div>

      <Menu />
    </div>
  );
}

export default App;
