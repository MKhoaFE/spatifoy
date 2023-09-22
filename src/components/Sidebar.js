/** @format */

import { Home } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Card, Layout, Menu, Space } from "antd";
import React, { useState } from "react";
import CardComponent from "./CardComponent";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import "../App.css";
import { Link } from "react-router-dom";

const { Sider } = Layout;

function getItem(label, key, icon, children, to) {
  return {
    key,
    icon,
    label,
    children,
    to,
  };
}

const Sidebar = ({ onHome, onSearchClick }) => {
  const handleHomeClick = () => {
    onHome();
  };

  const handleSearchClick = () => {
    onSearchClick();
  };

  const [language, setLanguage] = useState("Vietnamese");

  const handleLanguageSwitch = () => {
    const newLanguage = language === "Vietnamese" ? "English" : "Vietnamese";
    setLanguage(newLanguage);
  };

  const mainMenu = [
    {
      key: "item1",
      label: (
        <Link to="/" onClick={handleHomeClick} style={{textDecoration: "none" }}>
          Home
        </Link>
      ),
      icon: <Home style={{ fontSize: 30 }} />,
    },
    {
      key: "item2",
      label: (
        <Link to="/search" onClick={handleSearchClick} style={{textDecoration: "none" }}>
          Search
        </Link>
      ),
      icon: <SearchIcon style={{ fontSize: 30 }} />,
    },
  ];
  const tags = [
    {
      key: "item1",
      label: "Truyện",
      to: "/truyen",
    },
    {
      key: "item2",
      label: "Podcast",
      to: "/podcast",
    },
    {
      key: "item3",
      label: "Tình cảm",
      to: "/tinh-cam",
    },
    {
      key: "item4",
      label: "Tự truyện",
      to: "/tu-truyen",
    },
    {
      key: "item5",
      label: "Chữa lành",
      to: "/chua-lanh",
    },
    {
      key: "item5",
      label: "Audio",
      to: "/audio",
    },
  ];

  return (
    <Sider
      theme="light"
      width={320}
      style={{
        background: "#ffffff",
        margin: 10,
        maxHeight: "100%",
      }}
    >
      <Card style={{ background: "#f5f5f5" }}>
        <Menu
          mode="inline"
          bordered={false}
          items={mainMenu}
          style={{ background: "#f5f5f5" }}
        ></Menu>
      </Card>

      <Card
        bordered={false}
        className="text-white shadow-lg"
        title={
          <span
            className="text-xl font-bold"
            style={{ color: "#000000", fontWeight: "bold" }}
          >
            <BookmarkBorderIcon />
            Library
          </span>
        }
        extra={
          <a href="#" style={{ color: "#000000", fontWeight: "bold" }}>
            <AddIcon />
          </a>
        }
        style={{
          width: 320,
          margin: "12px 0",
          background: "#f5f5f5",
          color: "#000000",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        <div id="SideScroll" style={{ overflow: "auto", height: 250 }}>
          <CardComponent
            color={"#2B2730"}
            handleShowAlert={() => alert("hello")}
          >
            <h1 style={{ fontSize: 24 }}>Top chart of June</h1>
            <p style={{ fontWeight: 400 }}>
              See the top 10 highest rated songs of June{" "}
            </p>
          </CardComponent>

          <CardComponent
            color={"#2B2730"}
            handleShowAlert1={() => alert("hello")}
          >
            <h1 style={{ fontSize: 24 }}>Top Artists of June</h1>
            <p style={{ fontWeight: 400 }}>See the top 10 artists </p>
          </CardComponent>
        </div>

        <footer style={{ marginTop: 40 }}>
          <div>
            {/* {tags.map((tag, index) => (
              <a
                href=""
                key={index}
                style={{
                 color: "#000000",
                  marginRight: 20,
                  fontSize: 15,
                  textAlign: "justify",
                  display: "inline-block",
                }} 
              >
                {tag}
              </a>
            ))} */}
            {tags.map((item) => (
              <div
                key={item.key}
                style={{
                  color: "black",
                  marginRight: 20,
                  fontSize: 15,
                  textAlign: "justify",
                  display: "inline-block",
                  textDecoration: "none",
                }}
              >
                <Link to={item.to} style={{ textDecoration: "none", color:"grey" }}>
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

          <Space />
          <Button
            type="primary"
            shape="round"
            style={{ background: "#000000", marginTop: 20, marginBottom: 20 }}
            onClick={handleLanguageSwitch}
          >
            {language}
          </Button>
        </footer>
      </Card>
    </Sider>
  );
};

export default Sidebar;
