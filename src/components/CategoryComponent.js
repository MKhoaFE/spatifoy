import { Button, Card, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import TitleComponent from "./TitleComponent";

function CategoryComponent({ title, data, url }) {
  const handleClick = (key) => {
    console.log("Clicked product key:", key);
    // Các thao tác xử lý khác với key sản phẩm
  };

  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <>
      <div
        className="row"
        style={{
          marginTop: 20,
        }}
      >
        <div className="col mb-5">
          <Link to="/top-chart" style={linkStyle}>
            <TitleComponent text={title} size={20} />
          </Link>
        </div>
        <div className="col text-right">
          <Link to="/top-chart" style={linkStyle}>
            See more
          </Link>
        </div>
      </div>

      <Row gutter={[16, 16]}>
        {data.map((item) => (
          <Col key={item.key} xs={24} sm={12} md={8} lg={6}>
            <Link to={`/product/${item.key}`} style={linkStyle}>
              <Card
                onClick={() => handleClick(item.key)}
                cover={
                  <div style={{ position: "relative" }}>
                    <img
                      src={item.image}
                      style={{
                        width: 200,
                        height: 250,
                        objectFit: "cover",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        background: "rgba(0, 0, 0, 0.7)",
                        color: "white",
                        padding: "8px",
                      }}
                    >
                      TotalChap: {item.totalChaps}
                    </div>
                  </div>
                }
                hoverable
              >
                <Card.Meta title={item.title} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default CategoryComponent;