import { Button, Card, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import TitleComponent from "./TitleComponent";
import { poster } from "../datas/poster";
import BrowseAll from "./BrowseAll";

function PosterList({ posters }) {
  return (
  <>
      <BrowseAll title="Posters" data={posters} url="/top-chart" />
  </>

  );
}


export default PosterList;
