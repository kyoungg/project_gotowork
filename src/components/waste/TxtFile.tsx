import { useContext, useEffect, useRef } from "react";
import Draggable from "react-draggable";
import { IoMdClose } from "react-icons/io";
import styled from "styled-components";

import AlertContext from "../alert/alertContext";

interface FileProps {
  onClose: () => void;
}

const TxtFile = ({ onClose }: FileProps) => {
  const nodeRef = useRef(null);
  const { alert: alertComp } = useContext(AlertContext);

  useEffect(() => {
    const timer = setTimeout(async () => {
      localStorage.setItem("Qterw-()-62", "세광공업고등학교");

      const result = await alertComp("파일을 열 수 없습니다.");
      if (result) {
        window.location.reload();
      }
    }, 1500);

    return () => clearTimeout(timer); // 언마운트 시 타이머 정리
  }, [alertComp]);

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
            <Icon src={"/images/txt.png"} />
            {`검은 그늘 속에서 - txt`}
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
              <br />
              <br />이 모든 건 우리의 졸업식날 일어났다.
              <br />
              <br />
              <br /> <br /> <br />
              <br /> <br />
              <br />
              <br /> <br /> <br /> <br />
              <br /> <br />
              <br />
              ₩ub124₩uac00₩u0020₩uc774₩u0020₩uae00₩uc744₩u0020₩uc77d₩u
              b294₩ub2e4₩ub294₩u0020₩uac74₩u0020₩ud3b8₩ubc95₩uc744₩u00
              20₩uc4f0₩uace0₩u0020₩uc788₩ub2e4₩ub294₩u0020₩ub73b₩uc774
              ₩ub2e4₩u002e₩u0020Wuac10₩ud788₩u0020Wuc55e₩uc73c₩ub85c₩u
              0020₩uc77c₩uc5b4₩ub0a0₩u0020₩uc77c₩uc744Wu0020₩uc5ff₩ubc
              f4₩ub824Wuace0₩u0020₩ud55c₩u0020₩ub300₩uac00₩ub97c₩u0020
              ₩uce58₩ub97c₩u0020₩uac83₩uc774₩ub2e4₩u002e₩u0020₩ubc18₩u
              b4dc₩uc2dc₩u002e
              <br />
              <br />
            </Text>
          </TextContainer>
        </BottomContainer>
      </Container>
    </Draggable>
  );
};

export default TxtFile;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;

  top: 12vh;
  left: 35vh;

  width: 72vh;
  height: 55vh;

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
  height: 46vh;

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

  overflow-y: auto;

  height: 95%;
  width: 95%;

  border: none;
  outline: none;
  resize: none;
  word-wrap: break-word;
`;

const Text = styled.p`
  line-height: 1.3;
  white-space: normal;
  & span {
    text-decoration: line-through;
  }
`;
