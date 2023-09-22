import React, { useEffect, useState } from "react";
import { poster } from "../datas/poster";
import { List } from "antd";
import ListTopChart from "../components/ListTopChart";

export const TopChart = () => {
  const [topListenAudios, setTopListenAudios] = useState([]);
  useEffect(() => {
    getTopListensAudios();
  }, []);

  const getTopListensAudios = () => {
    const newAudios = [...poster];
    newAudios.sort((a, b) => b.listens - a.listens);

    const items = [];

    newAudios.forEach((item) => items.length < 10 && items.push(item));

    setTopListenAudios(items);
  };

  return (
    <>
      <div className="title h4 mb-3 ">Popularest this month</div>
      <List style={{ marginBottom: 50 }}>
        {" "}
        <ListTopChart data={topListenAudios} />
      </List>
    </>
  );
};
