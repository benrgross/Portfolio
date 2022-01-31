import React, { useReducer, createContext, useContext } from "react";
import ProjectSpotlight from "../components/ProjectSpotlight";
import { PROJECTS, SPOTLIGHT } from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case SPOTLIGHT:
      return {
        ...state,
        spotlight: action.switch,
      };
    case PROJECTS:
      return {
        ...state,
        projects: action.load,
      };
    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    spotlight: true,
    projects: [{}],
  });
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
