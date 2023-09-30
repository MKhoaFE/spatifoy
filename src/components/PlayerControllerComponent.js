/** @format */

import React, { useEffect, useState, useRef } from "react";
import { Avatar, Button, Slider, Space } from "antd";
import { PauseCircleFilled, PlayCircleFilled } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { audioSelector } from "../redux/reducers/audioReducer";
import TitleComponent from "./TitleComponent";
import { audios } from "../datas/audios";
import { authors } from "../datas/authors";
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

function PlayerControllerComponent() {
  const audio = useSelector(audioSelector);
  const [chaps, setChaps] = useState([]);
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef();

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    // Update the currentTime and duration when the audio metadata loads
    playerRef.current.addEventListener("loadedmetadata", () => {
      setDuration(playerRef.current.duration);
    });

    // Update currentTime when time updates
    playerRef.current.addEventListener("timeupdate", () => {
      setCurrentTime(playerRef.current.currentTime);
    });
  }, []);
  

  useEffect(() => {
    if (audio) {
      getAllChapters();
    }
  }, [audio]);

  const getAllChapters = () => {
    const id = audio.chapsId;

    const res = audios.find((element) => element.key === id);

    if (res) {
      setChaps(res.chaps);
      setIsPlaying(false);
    }
  };
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, "0");
    const seconds = Math.floor(timeInSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  // console.log(audio)
  const author = authors.find((author) => author.key === audio.authorId);

  const togglePlay = () => {
    if (isPlaying) {
      playerRef.current.pause();
    } else {
      playerRef.current.play();
    }
    setIsPlaying(!isPlaying); // Đảo ngược trạng thái phát/nghỉ
  };
  

  return audio ? (
    <div className="player-controler text-light">
      <div className="row">
        <div className="col">
          <Space>
            <Avatar src={audio.image} size={60} />
            <div>
              <TitleComponent text={audio.title} size={18} color={"#fff"} />
              <p>Tác giả: <span style={{fontWeight:"bold"}}>{author ? author.name : ""}</span></p>
            </div>
          </Space>
        </div>
        <div className="col text-center">
          <div>
            <Space>
            <SkipPreviousIcon style={{fontSize:32,verticalAlign: 'middle', cursor:"pointer"}}/>
            <Button onClick={togglePlay} type="text" icon={isPlaying ? <PauseCircleFilled style={{fontSize: 32, color: "white",marginBottom: '10px' }} /> : <PlayCircleFilled style={{ fontSize: 32, color: "white",marginBottom: '10px' }} />} />
            <SkipNextIcon style={{fontSize:32,verticalAlign: 'middle',cursor:"pointer"}}/>
            </Space>
          </div>

          <div>
            <Space>
            <span style={{fontSize:"12px"}}>{formatTime(currentTime)}</span>
              <div className="col ">
                <Slider
                  style={{
                    width: "200px",
                  }}
                />
              </div>
              <span style={{fontSize:"12px"}}>{formatTime(duration)}</span>
            
            </Space>
          </div>
        </div>
        <div className="col text-right">sound control</div>
      </div>
      <audio
        autoPlay
        ref={playerRef}
        src={chaps[index] ? chaps[index].audio : ""}
      />
    </div>
  ) : (
    <></>
  );
}

export default PlayerControllerComponent;
