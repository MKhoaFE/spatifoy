/** @format */

import React, { useEffect, useState, useRef } from "react";
import { Avatar, Button, Slider, Space } from "antd";
import { PauseCircleFilled, PlayCircleFilled } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { audioSelector } from "../redux/reducers/audioReducer";
import TitleComponent from "./TitleComponent";
import { audios } from "../datas/audios";
import { authors } from "../datas/authors";

function PlayerControllerComponent() {
  const audio = useSelector(audioSelector);
  const [chaps, setChaps] = useState([]);
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef();

  useEffect(() => {
    // console.log('audio')
    // console.log(audio)

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
            <Button onClick={togglePlay} type="text" icon={isPlaying ? <PauseCircleFilled style={{ fontSize: 32, color: "white" }} /> : <PlayCircleFilled style={{ fontSize: 32, color: "white" }} />} />
            </Space>
          </div>

          <div>
            <Space>
              00:00
              <div className="col ">
                <Slider
                  style={{
                    width: "200px",
                  }}
                />
              </div>
              00:00
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
