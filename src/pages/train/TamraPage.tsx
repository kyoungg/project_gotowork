import { IoMdClose } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import AlertContext from "../../components/alert/alertContext";
import { useContext } from "react";

const WastePage = () => {
  // const navigate = useNavigate();

  const { alert: alertComp } = useContext(AlertContext);

  const onCloseBtnClick = async () => {
    await alertComp(
      `내릴 수 없다! 내릴 수 없다! 내릴 수 없다! 내릴 수 없다! 내릴 수 없다! 내릴 수 없다! 내릴 수 없다! 내릴 수 없다! 내릴 수 없다! 내릴 수 없다! 내릴 수 없다! 내릴 수 없다! 내릴 수 없다! 내릴 수 없다!`
    );
  };

  return (
    <Background>
      <TopContainer>
        <Title>■■행</Title>
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
          <Text>
            탐라에 도착하고 싶은 자여 제물을 공양해라 탐라에 도착하고 싶은 자여
            제물을 공양해라 탐라에 도착하고 싶은 자여 제물을 공양해라 탐라에
            도착하고 싶은 자여 제물을 공양해라 탐라에 도착하고 싶은 자여 제물을
            공양해라 탐라에 도착하고 싶은 자여 제물을 공양해라 탐라에 도착하고
            싶은 자여 제물을 공양해라 탐라에 도착하고 싶은 자여 제물을 공양해라
            탐라에 도착하고 싶은 자여 제물을 공양해라 탐라에 도착하고 싶은 자여
            제물을 공양해라
          </Text>
        </TextContainer>
      </BottomContainer>
    </Background>
  );
};

export default WastePage;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: black;

  width: 100%;
  min-height: 100vh;
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 98%;
  height: 42px;

  margin-top: 5px;

  background: black;
`;

const MiddleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 99%;
  height: 1vh;

  padding-bottom: 3px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;

  color: #ff0000;
  margin-left: 12px;
  font-size: 23px;
`;

const CloseBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #ff0000;

  width: 30px;
  height: 28px;
  margin-right: 12px;

  border: solid #473838 1px;

  font-size: 35px;

  cursor: pointer;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: black;

  width: 98%;
  height: 84vh;
`;

const moving = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const TextContainer = styled.div`
  color: #ffe500;
  font-size: 120px;

  white-space: nowrap;
  box-sizing: border-box;
  overflow: hidden;
`;

const Text = styled.p`
  display: inline-block;
  animation: ${moving} 50s linear infinite;
`;
