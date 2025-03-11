import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useContext, useEffect } from "react";
import useSound from "use-sound";

import AlertContext from "../../components/alert/alertContext";

const AltarPage = () => {
  const [play, { stop }] = useSound("/sounds/train3.mp3", {
    volume: 1,
    soundEnabled: true,
  });

  useEffect(() => {
    play(); // 페이지 로드 시 자동 재생

    return () => {
      stop();
    };
  }, [play, stop]);

  const navigate = useNavigate();

  const { alert: alertComp } = useContext(AlertContext);

  const onCloseBtnClick = async () => {
    await alertComp(
      `내릴 수 없다! 내릴 수 없다! 내릴 수 없다! 내릴 수 없다! 내릴 수 없다! 내릴 수 없다! 내릴 수 없다! 내릴 수 없다! 내릴 수 없다! 내릴 수 없다! 내릴 수 없다! 내릴 수 없다! 내릴 수 없다! 내릴 수 없다!`
    );
  };

  const onFirstClick = async () => {
    const result = await alertComp(`공양물이 왔다`);
    return result && onEndClick();
  };

  const onEndClick = async () => {
    const result = await alertComp(`뱃길을 열어라`);
    localStorage.setItem("trickster", "KC");
    return result && navigate("/");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      onFirstClick();
    }, 23500); // 12초 후 실행

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <FiveText>남은 거리 : 5</FiveText>
          <FourText>남은 거리 : 4</FourText>
          <ThreeText>남은 거리 : 3</ThreeText>
          <TwoText>남은 거리 : 2</TwoText>
          <OneText>남은 거리 : 1</OneText>
          <EndText>0</EndText>
        </TextContainer>
      </BottomContainer>
    </Background>
  );
};

export default AltarPage;

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

const fadeOut = keyframes`
  85% {
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

const Blink = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const TextContainer = styled.div`
  color: #ffe500;
  font-size: 120px;

  white-space: nowrap;
  box-sizing: border-box;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const FiveText = styled.p`
  position: absolute;

  color: #ef0000;
  font-size: 120px;

  animation: ${fadeOut} 2s 2s forwards;
`;

const FourText = styled.p`
  position: absolute;
  opacity: 0;

  color: #ef0000;
  font-size: 120px;

  animation: ${Blink} 4s 4s forwards;
`;

const ThreeText = styled.p`
  position: absolute;
  opacity: 0;

  color: #ef0000;
  font-size: 120px;

  animation: ${Blink} 4s 8s forwards;
`;

const TwoText = styled.p`
  position: absolute;
  opacity: 0;

  color: #ef0000;
  font-size: 120px;

  animation: ${Blink} 4s 12s forwards;
`;

const OneText = styled.p`
  position: absolute;
  opacity: 0;

  color: #ef0000;
  font-size: 120px;

  animation: ${Blink} 4s 16s forwards;
`;

const EndText = styled.p`
  position: absolute;
  opacity: 0;

  color: #ef0000;
  font-size: 120px;

  animation: ${fadeIn} 2s 20s forwards;
`;
