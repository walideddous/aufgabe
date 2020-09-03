import { GET_SUCCESS, getDataActions } from "./types";
import { data } from "../data/data";

export function getData(): getDataActions {
  const res = data();
  return {
    type: GET_SUCCESS,
    payload: res,
  };
}
