import React, { Fragment } from "react";
import SearchInput from "./SearchInput";
import SearchedList from "./SearchedList";

const index = () => {
  return (
    <Fragment>
      <SearchInput />
      <SearchedList />
    </Fragment>
  );
};

export default index;
