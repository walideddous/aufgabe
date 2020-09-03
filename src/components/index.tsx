import React from "react";
import { Card, Col, Row } from "antd";

// Import composents
import OnMap from "./map/OnMap";
import Search from "./search";
import DragAndDrop from "../components/dragAndDrop";

const Aufgabe = () => {
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={12}>
          <Card bordered={true}>
            <Search />
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={true}>
            <DragAndDrop />
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={true}>
            <OnMap />
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={true}>Card content</Card>
        </Col>
      </Row>
    </div>
  );
};

export default Aufgabe;
