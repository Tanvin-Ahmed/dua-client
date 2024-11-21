"use client";
import Image from "next/image";
import { IoCopyOutline, IoPlay, IoPauseOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { GoShareAndroid } from "react-icons/go";
import { MdOutlineReport } from "react-icons/md";
import { DuaType } from "@/types";
import { FC, useContext, useState, useRef } from "react";
import { appContext } from "@/components/context/AppContext";
import { cn } from "@/utils";
import { CiRepeat } from "react-icons/ci";
import CustomProgressBar from "./CustomProgressBar";

interface DuaCardType {
  dua: DuaType;
}

const DuaCard: FC<DuaCardType> = ({ dua }) => {
  const { sectionRefs } = useContext(appContext);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayPause = () => {
    if (isCompleted) {
      // Reset audio playback if completed
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
      }
      setIsCompleted(false);
    }
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying((prev) => !prev);
  };

  const handleAudioEnded = () => {
    if (!isLooping) {
      setIsPlaying(false);
      setIsCompleted(true); // Mark audio as completed
      setCurrentTime(0); // Reset progress
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoopToggle = () => {
    if (audioRef.current) {
      audioRef.current.loop = !isLooping;
      setIsLooping((prev) => !prev);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  };

  return (
    <div
      ref={(el) => {
        sectionRefs.current[dua.dua_id] = el;
      }}
      className="p-5 bg-white rounded-lg"
    >
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Image src={"/icons/allah.png"} height={35} width={35} alt="" />
        <h3 className="text-green-600 text-lg font-semibold">
          {dua.dua_id} {dua.dua_name_en}
        </h3>
      </div>

      {/* Body */}
      <div className="my-4 mb-6 space-y-5">
        {dua.top_en && <p className="my-2">{dua.top_en}</p>}
        {dua.dua_arabic && (
          <p className="my-2 text-right text-3xl quran-font">
            {dua.dua_arabic}
          </p>
        )}
        {dua.transliteration_en && (
          <p className="font-semibold my-2">
            Transliteration: {dua.transliteration_en}
          </p>
        )}
        {dua.translation_en && (
          <p className="text-gray-500 my-2">
            Translation: {dua.translation_en}
          </p>
        )}
        {dua.bottom_en && <p className="my-2">{dua.bottom_en}</p>}
        <div className="flex flex-col justify-center">
          <p className="text-green-600">Reference:</p>
          <p>{dua.refference_en}</p>
        </div>
      </div>

      {dua.audio && (
        <audio src={dua.audio} autoPlay className="bg-red-500"></audio>
      )}

      {/* Footer */}
      <div
        className={cn("flex items-center gap-x-3", {
          "justify-between": dua.audio,
          "justify-end": !dua.audio,
        })}
      >
        {/* Audio Player */}
        {/* Audio Controls */}
        <div className="flex items-center space-x-2">
          {/* Play/Pause Button */}
          <button
            onClick={handlePlayPause}
            className="p-1 cursor-pointer size-11 bg-green-600 rounded-full hover:bg-green-700 transition-colors flex justify-center items-center"
          >
            {isPlaying ? (
              <IoPauseOutline size={24} className="text-white" />
            ) : (
              <IoPlay size={24} className="text-white ml-0.5" />
            )}
          </button>

          {/* Show Progress Bar, Timestamp, and Loop Button only when playing */}
          {isPlaying && (
            <div className="flex items-center space-x-2">
              <CustomProgressBar
                currentTime={currentTime}
                duration={audioRef.current?.duration || 100}
                onProgressChange={(time) => {
                  if (audioRef.current) {
                    audioRef.current.currentTime = time;
                    setCurrentTime(time);
                  }
                }}
              />
              <span className="text-sm text-gray-600">
                {formatTime((audioRef.current?.duration || 0) - currentTime)}
              </span>
              <button
                onClick={handleLoopToggle}
                className={`p-1 rounded cursor-pointer ${
                  isLooping ? "text-green-600" : "text-gray-500"
                }`}
                title="Toggle Loop"
              >
                <CiRepeat size={20} />
              </button>
            </div>
          )}
        </div>

        {/* Actions */}
        <div
          className={cn("flex items-center space-x-2", {
            "hidden sm:flex": isPlaying,
          })}
        >
          <div
            title="Copy"
            className="p-1 rounded cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <IoCopyOutline size={20} className="text-gray-500" />
          </div>
          <div
            title="Bookmark"
            className="p-1 rounded cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <CiBookmark size={20} className="text-gray-500" />
          </div>
          <div
            title="Memorize"
            className="p-1 rounded cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <HiOutlineLightBulb size={20} className="text-gray-500" />
          </div>
          <div
            title="Share"
            className="p-1 rounded cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <GoShareAndroid size={20} className="text-gray-500" />
          </div>
          <div
            title="Report"
            className="p-1 rounded cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <MdOutlineReport size={20} className="text-gray-500" />
          </div>
        </div>
      </div>

      {/* Hidden Audio Element */}
      {dua.audio ? (
        <audio
          ref={audioRef}
          src={
            dua.audio.startsWith("https") ? dua.audio : "/audio/sura_fatiha.mp3"
          }
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleAudioEnded}
        />
      ) : null}
    </div>
  );
};

export default DuaCard;
