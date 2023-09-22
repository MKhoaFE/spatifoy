import React, { useEffect, useState } from "react";
import { poster } from "../datas/poster";
import { authors} from "../datas/authors";
import {categories } from "../datas/categories";
import BrowseAll from "../components/BrowseAll";


function SearchScreen() {
  const [topListenAudios, setTopListenAudios] = useState([]);

  useEffect(() => {
    getTopListensAudios();
  }, []);

  const getTopListensAudios = () => {
    const newAudios = [...poster];
    newAudios.sort((a, b) => a.listens - b.listens);

    const items = [];

    newAudios.forEach((item) => items.length < 40 && items.push(item));

    setTopListenAudios(items);
  };
  


  return (
    <div className="italic" style={{ marginBottom: 100 }}>
      <BrowseAll
        url="/top-listens"
        title={"Browse all"}
        data={topListenAudios}
      />
    </div>
  );
}

export default SearchScreen;
