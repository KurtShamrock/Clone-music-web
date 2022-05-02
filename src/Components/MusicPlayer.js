import React, { useState, useRef, useEffect } from "react";
import "../Styles/MusicPlayer.css";
import {
  FaHeart,
  FaRegHeart,
  FaBackward,
  FaForward,
  FaStepBackward,
  FaStepForward,
  FaPause,
  FaPlay,
  FaShareAlt,
} from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

function MusicPlayer({ song, imgSrc, play }) {
  console.log(song);
  const [isLove, setLoved] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const audioPlayer = useRef();
  const progressBar = useRef();
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const animationRef = useRef();
  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);

    setDuration(seconds);
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);
  const changePlayPause = () => {
    const preValue = isPlaying;
    if (preValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
    setPlaying(!preValue);
  };

  const CalculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;

    const seconds = Math.floor(sec % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${returnMin}:${returnSec}`;
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.current;
    changeCurrent();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };
  const changeProgress = () => {
    audioPlayer.current.current = progressBar.current.value;
    changeCurrent();
  };

  const changeCurrent = () => {
    progressBar.current.style.setProperty(
      "--player-played",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrent(progressBar.current.value);
  };
  const changeLoved = () => {
    setLoved(!isLove);
  };

  return (
    <div className="musicPlayer">
      <div className="songImg">
        <img src={imgSrc} alt="" />
      </div>
      <div className="songAttribute">
        <audio src={song} preload="metadata" ref={audioPlayer} />
        <div className="top">
          <div className="left">
            <div className="loved" onClick={changeLoved}>
              {isLove ? (
                <i>
                  <FaHeart />
                </i>
              ) : (
                <i>
                  <FaRegHeart />
                </i>
              )}
            </div>

            <div className="download">
              <i>
                <BsDownload />
              </i>
            </div>
          </div>
          <div className="middle">
            <div className="back">
              <i>
                <FaStepBackward />
              </i>
              <i>
                <FaBackward />
              </i>
            </div>
            <div className="playPause" onClick={changePlayPause}>
              {isPlaying ? (
                <i>
                  <FaPlay />
                </i>
              ) : (
                <i>
                  <FaPause />
                </i>
              )}
            </div>
            <div className="forward">
              <i>
                <FaForward />
              </i>
              <i>
                <FaStepForward />
              </i>
            </div>
          </div>
          <div className="right">
            <i>
              <FaShareAlt />
            </i>
          </div>
        </div>
        <div className="bottom">
          <div className="currentTime">{CalculateTime(current)}</div>
          <input
            type="range"
            className="progressBar"
            ref={progressBar}
            onChange={changeProgress}
          />
          <div className="duration">
            {
              /* {duration && !isNaN(duration) && CalculateTime(duration)
              ?  */
              CalculateTime(duration)
              /* : "--:--" */
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export { MusicPlayer };
