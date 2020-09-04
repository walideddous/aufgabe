import React from "react";
import { Card, Col, Row } from "antd";

// Import composents
import OnMap from "./map/OnMap";
import Search from "./search";
import DragAndDrop from "../components/dragAndDrop";
import Info from "../components/info";

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
          <Card bordered={true} title="Map">
            <OnMap />
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={true} title="Haltestelle Info">
            <Info />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Aufgabe;
