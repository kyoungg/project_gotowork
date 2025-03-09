import { useContext, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import AlertContext from "../../components/alert/alertContext";

const MokpoPage = () => {
  const navigate = useNavigate();

  const { alert: alertComp } = useContext(AlertContext);

  const onCloseBtnClick = async () => {
    await alertComp(`내릴 수 없다`);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/train/tamra");
    }, 15500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Background>
      <TopContainer>
        <Title>
          <Logo src="/images/지하철.png" />
          목포행
        </Title>
        <CloseBtn
          onClick={() => {
            onCloseBtnClick();
          }}
        >
          <IoMdClose />
        </CloseBtn>
      </TopContainer>
      <MiddleContainer></MiddleContainer>
      <BottomContainer>
        <TextContainer>
          <FadeoutText>목포행</FadeoutText>
          <FadeinText>탐라행</FadeinText>
          <EndText>출발</EndText>
        </TextContainer>
      </BottomContainer>
    </Background>
  );
};

export default MokpoPage;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #d4d0c8;

  width: 100%;
  min-height: 93vh;
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 98%;
  height: 42px;

  margin-top: 5px;

  background: linear-gradient(to right, #254181, 80%, #a3c7ee);
`;

const MiddleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 99%;
  height: 1vh;

  padding-bottom: 3px;
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;

  padding: 0 2px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;

  color: white;
  font-size: 20px;
`;

const CloseBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #d9d9d9;

  width: 30px;
  height: 28px;
  margin-right: 12px;

  border: solid #808080 1px;
  box-shadow: 1px 1px 1px 1px gray;

  font-size: 35px;

  cursor: pointer;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: white;

  width: 98%;
  height: 84vh;

  border: solid #acacac 1px;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: black;
  width: 80%;
  height: 30%;
  margin-bottom: 4%;
`;

const changeColor = keyframes`
  26% {
    color: #00ff1a;
  }
  28% {
    color: gray;
  }
  29% {
    color: black;
  }
  30% {
    color: #00ff1a;
  }
  35% {
    color: gray;
  }
  36% {
    color: black;
  }
  38% {
    color: gray;
  }
  60%{
    color: #00ff1a;
  }
  65%{
    color: gray;
  }
  100% {
    color: black;
  }
`;

const fadeOut = keyframes`
  60% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Blink = keyframes`
  0% {
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const FadeoutText = styled.p`
  color: #00ff1a;
  font-size: 120px;

  animation: ${changeColor} 6s forwards, ${fadeOut} 6s forwards;
`;

const FadeinText = styled.p`
  position: absolute;

  opacity: 0;

  color: #7800f7;
  font-size: 120px;

  animation: ${Blink} 5s 6s forwards;
`;

const EndText = styled.p`
  position: absolute;

  opacity: 0;

  color: #ffe500;
  font-size: 120px;

  animation: ${fadeIn} 2s 11s forwards;
`;
