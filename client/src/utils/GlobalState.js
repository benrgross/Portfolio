import React, { useReducer, createContext, useContext } from "react";
import { PROJECTS, SPOTLIGHT } from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case PROJECTS:
      return {
        ...state,
        spotlight: true,
        projects: action.value,
      };
    case SPOTLIGHT:
      return {
        ...state,
        spotlight: action.switch,
        project: action.project,
      };

    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    projects: [],
    spotlight: true,
    project: {},
  });
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
