import { GET_EMBED } from "../action/anime.action";

const initialState = {};

const embedReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMBED:
      return action.payload;

    default:
      return state;
  }
};

export default embedReducer;
