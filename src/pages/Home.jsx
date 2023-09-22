/** @format */

import React, { useEffect, useState } from "react";
import { poster } from "../datas/poster";
import CategoryComponent from "../components/CategoryComponent";

export const Home = () => {
  const [topListenAudios, setTopListenAudios] = useState([]);

  useEffect(() => {
    getTopListensAudios();
  }, []);


  const getTopListensAudios = () => {
    const newAudios = [...poster];
    newAudios.sort((a, b) => b.listens - a.listens);

    const items = [];

    newAudios.forEach((item) => items.length < 8 && items.push(item));

    setTopListenAudios(items);
  };

  // console.log(topListenAudios);

  return (
    <div className="italic" style={{ marginBottom: 100, textDecoration:"none" }}>
      <CategoryComponent
        url="/top-listens"
        title={"Top Listen"}
        data={topListenAudios}
      />
      <CategoryComponent
        url="/top-listens"
        title={"Top Listen"}
        data={topListenAudios}
      />
      <CategoryComponent
        url="/top-listens"
        title={"Top Listen"}
        data={topListenAudios}
      />
      <CategoryComponent
        url="/top-listens"
        title={"Top Listen"}
        data={topListenAudios}
      />
    </div>
  );
};
