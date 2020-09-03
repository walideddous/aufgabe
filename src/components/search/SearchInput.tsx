import React, { useState } from "react";
import { Input } from "antd";

//Redux
import { connect, ConnectedProps } from "react-redux";

// Types declqrqtion
interface SearchState {
  search: string;
}

type PropsFromRedux = ConnectedProps<typeof connector>;

// Component
const SearchInput = ({ searchData }: PropsFromRedux) => {
  // ant design
  const { Search } = Input;

  const [search, setSearch] = useState("");

  // To change the type of "e" => SyntheticEvent
  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <Search
        value={search}
        onChange={(e) => handleChange(e)}
        onSearch={(e) => {
          searchData(search);
        }}
      />
    </div>
  );
};

const mapDispatchToProps = {
  searchData: (search: string) => ({ type: "SEARCH_INPUT", payload: search }),
};

const connector = connect(null, mapDispatchToProps);

export default connector(SearchInput);
