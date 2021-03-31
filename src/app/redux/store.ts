import { createStore, combineReducers } from "redux";
import { searchReducer } from "./reducers/searchReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { addressBookReducer } from "./reducers/addressBookReducer";
import { navigationBarReducer } from "./reducers/navigationBarReducer";

export const store = createStore(
  combineReducers({
    search: searchReducer,
    addressBook: addressBookReducer,
    navigationBar: navigationBarReducer,
  }),
  composeWithDevTools()
);

export type rootState = ReturnType<typeof store.getState>;
