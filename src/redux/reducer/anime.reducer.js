import { GET_ANIME } from "../action/anime.action";

const initialState = {};

//reducer

const animeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ANIME:
      return action.payload;

    default:
      return state;
  }
};

export default animeReducer;
