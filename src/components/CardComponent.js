import { Button, Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function CardComponent({ children, color, handleShowAlert, handleShowAlert1 }) {
  return (
    <Card
      style={{
        backgroundColor: color ?? "red",
        margin: "12px 0",
        color: "#ffffff",
      }}
    >
      {children}
      {handleShowAlert && (
        <Button
          shape="round"
          style={{ backgroundColor: "#000", marginTop: 15, fontWeight: 500 }}
        >
          <Link to="/top-chart" style={{color:"white", textDecoration:"none"}}>OPEN</Link>
        </Button>
      )}
      {handleShowAlert1 && (
        <Button
          shape="round"
          style={{ backgroundColor: "#000", marginTop: 15, fontWeight: 500 }}
  
        >
          <Link to="/top-artists"style={{color:"white", textDecoration:"none"}}>OPEN</Link>
        </Button>
      )}
    </Card>
  );
}

export default CardComponent;
