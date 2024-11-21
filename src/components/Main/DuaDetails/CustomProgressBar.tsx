import React, { useRef } from "react";

interface ProgressBarProps {
  currentTime: number;
  duration: number;
  onProgressChange: (time: number) => void;
}

const CustomProgressBar: React.FC<ProgressBarProps> = ({
  currentTime,
  duration,
  onProgressChange,
}) => {
  const progressBarRef = useRef<HTMLDivElement>(null);

  const handleDrag = (event: React.MouseEvent | React.TouchEvent) => {
    const rect = progressBarRef.current?.getBoundingClientRect();
    if (!rect || duration === 0) return;

    const clientX =
      "touches" in event ? event.touches[0].clientX : event.clientX; // Support for both touch and mouse events

    let progress = (clientX - rect.left) / rect.width;
    progress = Math.max(0, Math.min(1, progress)); // Clamp progress between 0 and 1

    const newTime = progress * duration;
    onProgressChange(newTime);
  };

  const handleClick = (event: React.MouseEvent) => {
    handleDrag(event);
  };

  const progressPercent = (currentTime / duration) * 100;

  return (
    <div
      ref={progressBarRef}
      className="relative w-32 h-1 bg-[#EBEEF2] rounded-full cursor-pointer ml-1"
      onClick={handleClick}
      onTouchMove={handleDrag}
      onMouseMove={(e) => e.buttons === 1 && handleDrag(e)} // Dragging while mouse button is pressed
    >
      {/* Filled progress */}
      <div
        className="absolute top-0 left-0 h-full bg-green-600 rounded-full"
        style={{ width: `${progressPercent}%` }}
      ></div>

      {/* Draggable handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 h-3.5 w-3.5 bg-green-600 rounded-full cursor-pointer"
        style={{
          left: `${progressPercent}%`,
          transform: "translate(-50%, -50%)",
        }}
        draggable={false} // Prevent default dragging behavior
      ></div>
    </div>
  );
};

export default CustomProgressBar;
