import React, { useEffect, useState } from 'react'
import { poster } from '../datas/poster';
import { authors } from '../datas/authors';
import ListTopArtists from '../components/ListTopArtists';
import { List } from 'antd';

// tác giả có tác phẩm nhiều lượt nghe nhất
// - tìm theo lượt nghe ra được 10 tác phẩm nhiều lượt nghe nhất
// - trích xuất authorId từ tác phẩm đấy so sánh với key từ authors.js
// - xuất ra thông tin tác giả

export const TopArtists = () => {
  const [topListenAuthors, setTopListenAuthors] = useState([]);

  useEffect(() => {
    getTopListensAuthors();
  }, []);

  const getTopListensAuthors = () => {
    const newAuthors = [...poster].map((item) => item.authorId);
    const uniqueAuthors = Array.from(new Set(newAuthors));

    const topAuthors = uniqueAuthors
      .map((authorId) => {
        const author = authors.find((author) => author.key === authorId);
        const authorAudios = poster.filter((audio) => audio.authorId === authorId);
        const totalListens = authorAudios.reduce((sum, audio) => sum + audio.listens, 0);
        return { ...author, totalListens };
      })
      .sort((a, b) => b.totalListens - a.totalListens)
      .slice(0, 10);

    setTopListenAuthors(topAuthors);
  };


  return (
    <>             <div className="title h4 mb-3 ">Popular Artists this month</div>
    <List style={{ marginBottom: 50 }}>
      <ListTopArtists data={topListenAuthors} />
    </List>
    </>
   
  )
}
