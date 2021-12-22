import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Details = () => {
  const embed = useSelector((state) => state.imgReducer);
  const [dataLink, setDataLink] = useState(null);

  useEffect(() => {
    if (embed !== null || embed !== undefined) {
      setDataLink(embed);
    }
    console.log(dataLink);
  }, [embed]);

  return (
    <>
      <Container>
        <Content>
          {dataLink !== null &&
            dataLink.eps?.map((m) => (
              <Wrap>
                <img src={m.url_image} alt="" />
              </Wrap>
            ))}
        </Content>
      </Container>
    </>
  );
};

const Wrap = styled.div`
  margin: 10px 12px;

  height: 100px;

  box-shadow: rgb(0 0 0 / 73%) 0px 26px 30px -10px,
    rgb(0 0 0 / 69%) 0px 16px 10px -10px;

  img {
    object-fit: cover;
    inset: 0px;

    height: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
`;

const Container = styled.div`
  min-height: calc(100vh - 74px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  background: url("img/home-background.png");
  background-position: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x-hidden;
  position: relative;
  inset:0;
  object-fit: cover;

  

  width: 100vw;
 
`;

export default Details;
