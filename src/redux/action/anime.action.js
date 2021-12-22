import axios from "axios";
export const GET_ANIME = "GET_ANIME";
export const GET_EMBED = "GET_EMBED";
export const GET_IMG = "GET_IMG";

export const getAnime = (name) => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:5500/api/anime/${name}`)
      .then((res) => {
        dispatch({ type: GET_ANIME, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getImgData = (url) => {
  return (dispatch) => {
    return axios.get(`http://localhost:5500/api/anime/${url}`).then((res) => {
      dispatch({ type: GET_IMG, payload: res.data }).catch((err) => {
        console.log(err);
      });
    });
  };
};

export const getEmbedLink = (url) => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:5500/api/anime/episode/${url}`)
      .then((res) =>
        dispatch({ type: GET_EMBED, payload: res.data }).catch((err) =>
          console.log(err)
        )
      );
  };
};
