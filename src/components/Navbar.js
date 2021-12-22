import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getAnime } from "../redux/action/anime.action";
import animeReducer from "../redux/reducer/anime.reducer";
import { rootReducer } from "../redux/store";

const Navbar = () => {
  const [searchName, setSearchName] = useState("");
  const dispatch = useDispatch();
  const animeData = useSelector((state) => state.animeReducer);
  const [name, setName] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(searchName);
    setSearchName("");
  };

  useEffect(() => {
    if (name !== null) {
      dispatch(getAnime(name));
    }
  }, [name]);

  return (
    <Nav>
      <h4>
        <a href="/">NONIESAMA</a>
      </h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Anime, OAV, Movie"
          onChange={(e) => setSearchName(e.target.value)}
          value={searchName}
        />
        <button>Search</button>
      </form>
    </Nav>
  );
};

const Nav = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  color: #f9f9f9;
  background-color: rgb(0, 0, 0, 0.95);
  border: none;
  padding: 15px 26px;
  box-shadow: rgb(0 0 0 / 73%) 0px 26px 30px -10px,
    rgb(0 0 0 / 69%) 0px 16px 10px -10px;

  width: 100vw;
  overflow: hidden;

  form {
    width: 80%;
    display: flex;
    margin-rigth: 20%;

    box-shadow: rgb(0 0 0 / 73%) 0px 26px 30px -10px,
      rgb(0 0 0 / 69%) 0px 16px 10px -10px;

    & > button {
      border: none;
      color: rgb(177, 156, 217);
      font-weight: bold;
      background-color: transparent;
      margin-left: 0px;
      cursor: pointer;
    }
  }
  input {
    width: 100%;

    border: none;

    border-radius: 10px;
    padding: 5px;
    background-color: transparent;
    color: rgb(249, 249, 249, 0.9);
    margin-left: 10px;
    padding-left: 10px;
  }
  input:focus {
    outline: none;
  }

  a {
    font-weight: 900;
    text-decoration: none;
    color: rgb(177, 156, 217);
    letter-spacing: -0.05px;
    margin-right: 20px;
  }
`;

export default Navbar;
