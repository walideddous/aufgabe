import React from "react";
import { Timeline } from "antd";
import { Button } from "antd";

//Redux
import { connect, ConnectedProps } from "react-redux";

// Types declaration
interface GetData {
  getDataReducer: {
    data: [{ Haltestelle: string }];
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

const index = ({ data }: PropsFromRedux) => {
  return (
    <Timeline>
      {data &&
        data.map((el, i) => (
          <Timeline.Item key={i}>
            <Button type="primary" style={{ width: "30vh" }}>
              {el.Haltestelle}
            </Button>
          </Timeline.Item>
        ))}
    </Timeline>
  );
};

const mapStateToProps = (state: GetData) => ({
  data: state.getDataReducer.data,
});

const connector = connect(mapStateToProps);

export default connector(index);
