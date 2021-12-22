import { combineReducers, createStore } from "redux";
import animeReducer from "./reducer/anime.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import imgReducer from "./reducer/embed.reducer";
import embedReducer from "./reducer/episode.reducer";

export const rootReducer = combineReducers({
  animeReducer,
  embedReducer,
  imgReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
