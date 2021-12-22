import { GET_IMG } from "../action/anime.action";

const initialState = {};

//reducer

const imgReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMG:
      return action.payload;

    default:
      return state;
  }
};

export default imgReducer;
