import { Reducer } from "redux";

import { 
  appConstants
} from "../constants";

export interface IListItem {
  url: string,
  title: string
}

interface IAppReducer {
  activeListItem: IListItem,
} 

const inititalState = {
  activeListItem: {
    url: '',
    title: ''
  }
};

export const app: Reducer<IAppReducer> = (state = inititalState, action) => {
  switch (action.type) {
    case appConstants.SET_ACTIVE_LIST_ITEM:
      return {
        ...state,
        activeListItem: action.payload
      };
    default:
      return state;
  }
};