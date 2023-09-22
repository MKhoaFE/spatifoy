import { Avatar, Card, Col, List, Row } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';

function ListTopArtists({ title, data, chap }) {
    return (
      <>
      {data.map((author) => (
        <List key={author.key}>
          <Link to={`/product/${author.key}`}style={{textDecoration:"none"}}>
            <Card>
              <Row>
                <Col xs={12} sm={8} md={6} lg={4}>
                  <Avatar
                    src="../assets/img.png"
                    style={{
                      width: 60,
                      height: 70,
                      objectFit: "cover",
                    }}
                  />
                </Col>
                <Col xs={12} sm={16} md={18} lg={20}>
                  <Card.Meta title={author.name} />
                  Total Listens: {author.totalListens}
                </Col>
              </Row>
            </Card>
          </Link>
        </List>
      ))}
    </>
    );
  }
  
export default ListTopArtists