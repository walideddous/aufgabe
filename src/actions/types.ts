export const GET_SUCCESS = "GET_SUCCESS";
export const SEARCH_INPUT = "SEARCH_INPUT";

export interface getDataActions {
  type: typeof GET_SUCCESS;
  payload: {
    _id: string;
    Haltestelle: string;
    adresse: string;
    Umstiegmöglischkeiten: string;
  }[];
}

export interface searchActions {
  type: typeof SEARCH_INPUT;
  payload: string;
}

export interface SearchInput {
  search: string;
}

export interface LoadingType {
  loading: boolean;
  data: {
    _id: string;
    Haltestelle: string;
    adresse: string;
    Umstiegmöglischkeiten: string;
  }[];
}
