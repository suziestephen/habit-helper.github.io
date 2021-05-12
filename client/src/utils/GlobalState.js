import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_GRATITUDE,
  REMOVE_GRATITUDE,
  ADD_GRATITUDE,
  LOADING
} from "./action";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
  case SET_CURRENT_GRATITUDE:
    return {
      ...state,
      currentGratitude: action.post,
      loading: false
    };

  case ADD_GRATITUDE:
    return {
      ...state,
      gratitude: [action.post, ...state.gratitude],
      loading: false
    };

  case REMOVE_GRATITUDE:
    return {
      ...state,
      gratitude: state.gratitude.filter((gratitude) => {
        return gratitude._id !== action._id; 
      })
    };


  case LOADING:
    return {
      ...state,
      loading: true
    };

  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    gratitude: [],
    currentGratitude: {
      _id: 0,
      gratefulFor: "",
      date: "",
    },
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
