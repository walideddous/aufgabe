import React, { Fragment, useEffect } from "react";
import { List, Spin } from "antd";

//Redux
import { connect, ConnectedProps } from "react-redux";

// Types declaration
interface GetData {
  searchReducer: {
    search: string;
  };
  getDataReducer: {
    loading: boolean;
    data: {}[];
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

const SearchedList = ({ loading, data, search, getData }: PropsFromRedux) => {
  useEffect(() => {
    getData();
  });

  return (
    <Fragment>
      {loading ? (
        <Spin
          style={{ display: "flex", justifyContent: "center", margin: "30px" }}
        />
      ) : (
        <List
          size="small"
          bordered
          dataSource={data}
          renderItem={(response: any) => (
            <List.Item>
              <i className="fas fa-subway" style={{ color: "#1890ff" }}></i>{" "}
              {response.Haltestelle}
            </List.Item>
          )}
        />
      )}
    </Fragment>
  );
};

const mapStateToProps = (state: GetData) => ({
  loading: state.getDataReducer.loading,
  data: state.getDataReducer.data,
  search: state.searchReducer.search,
});

const mapDispatchToProps = {
  getData: () => ({ type: "GET_SUCCESS" }),
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(SearchedList);
