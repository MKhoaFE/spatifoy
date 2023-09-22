import React from "react";
import { useParams } from "react-router-dom";
import BannerComponent from "../components/BannerComponent";
import { audios } from "../datas/audios";
import { authors } from "../datas/authors";
import { poster } from "../datas/poster";

const ProductDetail = () => {
  const { id } = useParams();
  const bannerItem = poster.find((item) => item.key === id);
  //parseInt(id)
  const chapterItem = audios.find((item1) => item1.bookId === id);

  const { authorId } = bannerItem;
  const authorItem = authors.find((item2) => item2.key === authorId);
  return (
    <div className="col">
      <BannerComponent
        bannerItem={bannerItem}
        chapterItem={chapterItem}
        authorItem={authorItem}
      />
    </div>
  );
};

export default ProductDetail;
