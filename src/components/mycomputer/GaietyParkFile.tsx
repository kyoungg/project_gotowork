import { useContext, useRef } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";

import AlertContext from "../alert/alertContext";
import ConfirmContext from "../confirm/confirmContext";

interface FileProps {
  onClose: () => void;
}

const GaietyParkFile = ({ onClose }: FileProps) => {
  const nodeRef = useRef(null);

  const { alert: alertComp } = useContext(AlertContext);
  const { confirm: confirmComp } = useContext(ConfirmContext);

  const onStartClick = async () => {
    await alertComp(`게임할 때가 아니다!`);
  };

  const onGetDollClick = async () => {
    localStorage.setItem("doll", "rabbit");
    await alertComp(`[착한친구] 인형을 얻었다.`);
  };

  const onShopClick = async () => {
    const result = await confirmComp(
      `손바닥에 들어올 정도로 \n 작고 복슬복슬한 봉제인형.\n 받을까?`
    );
    return result && onGetDollClick();
  };

  return (
    <Draggable
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      nodeRef={nodeRef}
      handle=".top-container"
    >
      <Container ref={nodeRef}>
        <TopContainer className="top-container">
          <TitleContainer>
            <Icon src={"/images/보드게임.png"} />
            {`유쾌 테마파크!`}
          </TitleContainer>
        </TopContainer>
        <MiddleContainer>
          <Title>[유쾌 테마파크!]</Title>
          <Detail>~즐거운 판타지랜드 여행~</Detail>
          <Detail>
            :팀원들과 함께 3개의 판타지 어트랙션에 가장 빨리 탑승하고 상품을
            받아보세요!
          </Detail>
        </MiddleContainer>
        <BottomContainer>
          <TextContainer>
            <Text onClick={() => onStartClick()}>게임 시작 </Text>
            <Text onClick={() => onShopClick()}>기념품 상점 </Text>
            <Text onClick={onClose}>종료</Text>
          </TextContainer>
        </BottomContainer>
      </Container>
    </Draggable>
  );
};

export default GaietyParkFile;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;

  top: 30vh;
  left: 40vh;

  width: 390px;
  height: 300px;

  background-color: #d4d0c8;
  border: solid #808080 1px;
`;

const Icon = styled.img`
  height: 25px;
  width: 25px;

  margin: 5px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 96%;
  height: 30px;

  margin-top: 5px;

  background: linear-gradient(to right, #254181, 80%, #a3c7ee);

  color: white;
  font-size: 20px;
`;

const MiddleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: #4c2f9c;

  width: 95%;
  height: 40%;

  margin-top: 10px;

  background-image: url(${"https://img.freepik.com/free-vector/silhouette-amusement-park-template_1308-22884.jpg?ga=GA1.1.1497433201.1712836880&semt=ais_hybrid"});
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 95%;
  height: 40%;

  margin-top: 5px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;

  font-size: 20px;

  height: 95%;
  width: 95%;

  border: none;
  outline: none;
  resize: none;
  word-wrap: break-word;
`;

const Text = styled.p`
  text-align: center;

  width: 94%;
  margin: 5px;
  padding: 4px;

  background-color: #d9d9d9;

  border: solid #808080 1px;
  box-shadow: 1px 1px 0px 0.2px gray;

  cursor: pointer;
`;

const Title = styled.p`
  color: white;
  font-size: 24px;
  padding-bottom: 4px;
  margin: 5px;
`;

const Detail = styled.p`
  font-size: 16px;
  color: white;

  text-align: center;

  width: 70%;
`;
