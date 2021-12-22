import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getImgData } from "../redux/action/anime.action";

const AddAnime = () => {
  const dataAnime = useSelector((state) => state.animeReducer);
  const dataEmbed = useSelector((state) => state.imgReducer);
  const dataArray = dataAnime[0]?.slice(0, 10);
  const dispatch = useDispatch();

  useEffect(() => {
    if (dataAnime !== null) {
      console.log(dataAnime);
    }
  }, [dataAnime]);

  useEffect(() => {
    console.log(dataEmbed);
  }, [dataEmbed]);
  return (
    <Container>
      <Content>
        {dataArray?.map((m, key) => {
          return (
            <>
              <Wrap key={m.id}>
                <Link
                  to={"/details" + m.url}
                  onClick={() => {
                    dispatch(getImgData(m.url.split("/anime/")[1]));
                  }}
                >
                  <span>{m.title}</span>
                  <img src={m.url_image} alt={m.title} />
                </Link>
              </Wrap>
            </>
          );
        })}
      </Content>
    </Container>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid rgb(249, 249, 249, 0.01);
  border-radius: 4px;
  width: 180px;
  height: 90%;

  background-color: rgb(0, 0, 0, 0.4);
  inset: 0px;
  object-fit: cover;
  margin-top: 10px;
  position: relative;
  box-shadow: rgb(0 0 0 / 73%) 0px 26px 30px -10px,
    rgb(0 0 0 / 69%) 0px 16px 10px -10px;

  img {
    height: 100%;
    width: 100%;
    inset: 0;
    object-fit: cover;
    border-radius: 4px;
    cursor: pointer;
  }
  span {
    text-align: left;
    font-weight: 600;
    color: rgb(217, 250, 217);
    letter-spacing: 1.05px;
    position: absolute;
    top: -28px;
    font-size: 0.6em;
    padding-bottom: 5px;
  }

  @media (max-width: 768px) {
    height: 290px;
  }
`;

const Content = styled.div`
  display: grid;
  grid: 25px;
  grid-gap: 35px;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 30px;
  height: 100%;

  padding-bottom: 50px;

  @media (max-width: 768px) {
    display: grid;
    height: 100%;

    grid: 25px;
    row-gap: 20px;
    grid-gap: 25px;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 30px;
    padding-bottom: 50px;

    img {
      object-fit: cover;
      inset: 0px;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;
const Container = styled.div`
min-height: 583px;
  height: 100%;
  background: url("img/home-background.png");
  background-position: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x-hidden;
  position: relative;
  

  width: 100vw;
    display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    min-height: 573px;
    height: 100%;
    width: 100%;
  }
`;
export default AddAnime;
