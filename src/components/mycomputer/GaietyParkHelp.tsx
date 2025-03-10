import { useRef } from "react";
import Draggable from "react-draggable";
import { IoMdClose } from "react-icons/io";
import styled from "styled-components";

interface FileProps {
  onClose: () => void;
}

const GaietyParkHelp = ({ onClose }: FileProps) => {
  const nodeRef = useRef(null);

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
            <Icon src={"/images/교육서.png"} />
            {`유쾌 테마파크 이용 지침서 - 도움말`}
          </TitleContainer>
          <CloseBtn onClick={onClose}>
            <IoMdClose />
          </CloseBtn>
        </TopContainer>
        <MiddleContainer>
          <MiddleBtn>파일(F)</MiddleBtn>
          <MiddleBtn>편집(E)</MiddleBtn>
          <MiddleBtn>서식(O)</MiddleBtn>
          <MiddleBtn>보기(V)</MiddleBtn>
          <MiddleBtn>도움말(H)</MiddleBtn>
        </MiddleContainer>
        <BottomContainer>
          <TextContainer>
            <Text>
              <p>유쾌 테마파크 이용 지침서</p>
              <br />
              <br />
              <br /> 3. 울음, 통곡, 절규 등 부정적이고 격한 감정표현은
              자제하세요!
              <br /> 유쾌 테마파크에 어울리지 않습니다.
              <br />
              <br />
              <br />
              <br /> 7. 퍼레이드는 즐거운 얼굴로 응원해 주세요!
              <br />
              <br /> 유쾌 테마파크의 퍼레이드에서 벌어지는 모든 일은 즐거우며
              절대 부정적이지 않습니다. 절대절대 부정적이지 않습니다. <br />
              <br />
              <br />
              <br />
              2. 테마파크 안에서 같은 색 팀원은 꼭 함께 다녀요!
              <br />
              <br /> 어트랙션 탑승 중이 아닌데 5m 이상 떨어질 시 처형됩니다.
              목이 졸립니다. 아파요 더 떨어지지 마세요 안 돼요
              <br />
              <br />
              <br /> <br /> 4. 테마파크의 각 구역은 테마에 따라 색칠되어
              있습니다! 처음 눈을 뜨는 곳이 바로 당신의 팀이 속한 구역이에요!
              <br />
              <br />
              구역을 존중하세요. 구역은 무엇보다 중요합니다 색깔을 보세요
              마스코트의 심기를 거스르지 마세요 마스코트는 구역의 전부예요
              <br />
              <br />
              <br />
              <br />
              1. 입장권 팔찌를 깨끗하게 쓰세요!
              <br />
              <br />
              분실 및 훼손 시 당신은 더 이상 입장객이 아닙니다. 입장객이 아니면
              불청객입니다. 도둑! 범법자! 끔찍한 처벌이 기다리고 있습니다.
              아니면 <br />
              <br />
              직원이 될래? <br />
              <br />
              <br />
              <br />
              5. 다양한 구역을 즐겨요! <br />
              <br />
              마스코트의 외양과 어트랙션 색이 달라졌나요? 당신은 새로운 구역에
              서 있는 거예요.
              <br />
              <br /> 안타깝지만, 다른 구역의 마스코트는 새로운 구역엔 존재할 수
              없습니다.
              <br />
              <br /> 작별 인사를 해주세요. 다정하게!
              <br />
              <br />
              <br />
              <br /> 6. 테마파크는 공용 공간인 것을 잊지 마세요!
              <br />
              <br />
              공공시설을 이용할 때의 에티켓과 매너를 지켜요! 수많은 시선이
              여러분을 지켜보고 있으며 아무도 잊지 않습니다.
              <br /> 저기, 마스코트가 뒤에.
              <br />
              <br />
            </Text>
          </TextContainer>
        </BottomContainer>
      </Container>
    </Draggable>
  );
};

export default GaietyParkHelp;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;

  top: 10vh;
  left: 24vh;

  width: 85vh;
  height: 78vh;

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

  width: 98%;
  height: 30px;

  margin-top: 5px;
  margin-left: 4px;

  background: linear-gradient(to right, #254181, 80%, #a3c7ee);

  color: white;
  font-size: 20px;
`;

const CloseBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #d9d9d9;

  font-size: 21px;
  color: black;

  text-align: center;

  width: 20px;
  height: 20px;
  margin-right: 10px;

  border: solid #808080 1px;
  box-shadow: 1px 1px 0.2px 0.2px gray;

  cursor: pointer;
`;

const MiddleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-size: 20px;
  color: black;

  width: 97%;
  height: 2vh;
`;

const MiddleBtn = styled.div`
  margin-right: 15px;
  height: 15px;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 10px;

  background-color: white;

  width: 97%;
  height: 69vh;

  overflow-y: auto;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  align-content: flex-start;

  font-size: 20px;
  margin: 15px 0 15px;

  height: 95%;
  width: 95%;

  border: none;
  outline: none;
  resize: none;
  word-wrap: break-word;
`;

const Text = styled.p`
  line-height: 1.3;

  & p {
    font-size: 36px;
  }
  & span {
    text-decoration: line-through;
  }
`;
