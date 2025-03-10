import { useContext, useRef } from "react";
import Draggable from "react-draggable";
import { IoMdClose } from "react-icons/io";
import styled from "styled-components";

import AlertContext from "../alert/alertContext";

interface FileProps {
  onClose: () => void;
}

const EducatuonFile = ({ onClose }: FileProps) => {
  const nodeRef = useRef(null);
  const { alert: alertComp } = useContext(AlertContext);

  const onBtnClick = async () => {
    const result = await alertComp(`신 규 선 생 님 이 네 !`);
    localStorage.setItem("Qterw-B-191", "hangman");
    return result && window.location.reload();
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
            <Icon src={"/images/교육서.png"} />
            {`교육서 - 메모장`}
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
              <br />
              <br />
              <p> ■■■ 선생님, 들어보세요. </p>
              <p>나는 교육서를 다 읽었어요!</p>
              <br />
              <br />
              <br /> 1. ■■부속유치원은 영원합니다.
              <br /> 2. 나는 규칙을 준수합니다.
              <br />
              <br />
              <br /> 그럼 완벽해 나는 완벽한 선생님이야 모두가 안전해 행복 해
              절대 사고는 없고 뛰어내린 사람도 없고 완벽하고 안전 한 유치원이야
              모두가 규칙을 지키며 보육하지 완벽한 선생 님이야 모두가 규칙을
              지켜 계속 끝없이 이곳에서 교육서를 다 읽으면 우리 ■■부속유치원에
              다니면 ■■■ 선생님도 곧 나처럼 될 거야 이제 교육서만 읽어 빨리
              <br />
              <br />
              <br />
              <br />
              <br />
              <Hangman>
                나는완벽한선<span>생님</span>
                이야!나는완벽한선생님이야!<span>나는</span>
                완벽한선생님이야!나는완<span>벽한</span>
                선생님이야!나는완벽한선생<span>님이</span>
                야!나는완벽한선생님이야!나
                <span>는완</span>벽한선생님이야!나는완
                <span>벽한</span>선<span>생님</span>이야!나는완벽한
                <span>선생</span>님이야!
                <span>님이</span>야!나는완벽
                <span>한선</span>생님이야!나<span>는완</span>벽한 선생
                <span>님이</span>야!나는완벽한<span>선생</span>님이야!나
                <span>는완</span>벽한선생님
                <span>이야!</span>나는완벽한
                <span>선생님이야!왜</span>나하면
              </Hangman>
              <RedText>규칙을 어기지 않을 거니까!</RedText>
              <p>
                너는죽어너는죽어너는죽어나는아니야나는아니야나는아니야정말다행이야정말다행이야완벽해완벽해너는죽어너는죽어너는죽어나는아니야나는아니야나는아니야정말다행이야정말다행이야완벽해완벽해너는죽어너는죽어너는죽어나는아니야나는아니야나는아니야정말다행이야정말다행이야완벽해완벽해왜냐하면
              </p>
              <button onClick={() => onBtnClick()}>
                나는교육서를완독했어!{" "}
              </button>
            </Text>
          </TextContainer>
        </BottomContainer>
      </Container>
    </Draggable>
  );
};

export default EducatuonFile;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;

  top: 12vh;
  left: 35vh;

  width: 593px;
  height: 78vh;

  background-color: #d4d0c8;
  border: solid #808080 1px;

  font-family: "HakgyoansimDunggeunmisoTTF-R";
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
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  line-height: 1.3;
  font-family: "HakgyoansimDunggeunmisoTTF-R";

  & p {
    font-size: 40px;
    font-family: "HakgyoansimDunggeunmisoTTF-B";
  }

  & span {
    text-decoration: line-through;
  }

  & button {
    font-family: "HakgyoansimDunggeunmisoTTF-B";
    font-size: 50px;
    color: #ff0000;
    padding: 3px;
    margin: 5px;

    cursor: pointer;
  }
`;

const Hangman = styled.p`
  color: #bebebe;

  & span {
    color: black;
    text-decoration: none;
  }
`;

const RedText = styled.p`
  color: #ff0000;
`;
