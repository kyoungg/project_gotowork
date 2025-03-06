import styled from "styled-components";

import data from "../../assets/data/icon";

const MainPage = () => {
  return (
    <Background>
      {data.map((icon) => {
        return (
          <Icon>
            <Img src={icon.img} />
            <Name>{icon.name}</Name>
          </Icon>
        );
      })}
    </Background>
  );
};

export default MainPage;

const Background = styled.div`
  background-color: #245c8d;

  width: 1024px;
  height: 708px;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80px;
  padding: 5px;
`;

const Img = styled.img`
  height: 60px;
  width: 60px;
`;

const Name = styled.div`
  display: flex;
  flex-direction: column-reverse;

  font-size: 16px;
  color: white;

  text-align: center;

  width: 100%;
`;
