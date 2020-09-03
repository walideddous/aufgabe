import { GET_SUCCESS, getDataActions, LoadingType } from "../actions/types";
import { data } from "../data/data";

const initialState: LoadingType = {
  loading: true,
  data: data(),
};

export default function getDataReducer(
  state = initialState,
  action: getDataActions
): LoadingType {
  const { type } = action;
  switch (type) {
    case GET_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
