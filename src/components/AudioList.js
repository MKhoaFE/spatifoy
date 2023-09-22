import React from 'react'
import AudioPlayer from "react-audio-player";
import { audios } from "../datas/audios";

function AudioList() {
  return (
    <div>
    {audios.map((audio) => (
      <div key={audio.key}>
        <h3>{audio.title}</h3>
        <AudioPlayer src={audio.audio} controls />
      </div>
    ))}
  </div>
  )
}

export default AudioList