import { useRef, useState } from "react";
import Draggable from "react-draggable";
import { IoMdClose } from "react-icons/io";
import styled from "styled-components";

interface Props {
  onClickCancel: () => void;
}

const Memo = ({ onClickCancel }: Props) => {
  const [inputValue, setInputValue] = useState(
    `[이자헌 조장 / 105105301]\n\nID : yongj1111\n\nPW : dydajflgodks!111`
  );

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
            <Icon src={"/images/메모.png"} />
            {`[이자헌 조장·· - 메모장`}
          </TitleContainer>
          <CloseBtn onClick={onClickCancel}>
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
          <Text
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </BottomContainer>
      </Container>
    </Draggable>
  );
};

export default Memo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;

  top: 15%;
  right: 7%;

  width: 500px;
  height: 400px;

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
  height: 5%;
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
  height: 82%;
`;

const Text = styled.textarea`
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
