import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Input, Space } from "antd";
import { poster } from "../datas/poster";
import { authors } from "../datas/authors";
import { categories } from "../datas/categories";
import { useNavigate } from "react-router-dom";


const suffix = (
  <SearchIcon
    style={{
      color: "#000000",
      cursor: "pointer",
    }}
    onClick ={()=>{
      
    }}
    
  ></SearchIcon>
);

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false); // Sử dụng biến trạng thái để kiểm soát việc hiển thị danh sách

  const navigate = useNavigate();

  const handleSearch=()=>{
    navigate(`/search/${searchTerm}`);
  }

  const filteredPosters = poster.filter((poster) =>
    poster.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setShowResults(e.target.value.trim() !== ""); // Hiển thị danh sách nếu có dữ liệu trong ô input
  };

  return (
    <Space.Compact onSearch={onSearch} size="large" style={{ width: "150%" }}>
      <Input
        addonBefore={suffix}
        placeholder="Tìm kiếm theo tiêu đề"
        value={searchTerm}
        onChange={handleInputChange}
        onPressEnter={handleSearch}
      />

    </Space.Compact>
  );
}

export default SearchBar;
