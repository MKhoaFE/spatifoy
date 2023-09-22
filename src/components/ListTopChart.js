import { Card, Col, Image, List, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function ListTopChart({ title, data, chap }) {
  return (
    <>
      {data.map((item) => (
        <List key={item.key}>
          <Link to={`/product/${item.key}`} style={{textDecoration:"none"}}>
            <Card>
              <Row>
                <Col xs={12} sm={8} md={6} lg={4}>
                  <Image
                    src={item.image}
                    style={{
                      width: 60,
                      height: 70,
                      objectFit: "cover",
                    }}
                  />
                </Col>
                <Col xs={12} sm={16} md={18} lg={20}>
                
                  <Card.Meta title={item.title}> </Card.Meta> 
                  {item.totalChaps} (Chaps)
                </Col>
               
              </Row>
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
                    Listens: {item.listens}
                  </div>
            </Card>
          </Link>
        </List>
      ))}
    </>
  );
}

export default ListTopChart;
