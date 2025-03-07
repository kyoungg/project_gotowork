import styled from "styled-components";
import { useRef } from "react";
import Draggable from "react-draggable";
import { IoMdClose } from "react-icons/io";

interface Props {
  message: string;
  onClickOK: () => void;
  onClickCancel: () => void;
}

const Confirm = ({ message, onClickOK, onClickCancel }: Props) => {
  const nodeRef = useRef(null);

  return (
    <Draggable
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      nodeRef={nodeRef}
      bounds={{ left: -300, top: -75, right: 265, bottom: 450 }}
    >
      <Container ref={nodeRef}>
        <TopContainer>
          <TitleContainer>
            <Icon src={"/images/경고.png"} />
            {"시스템 메세지"}
          </TitleContainer>
          <CloseBtn onClick={onClickCancel}>
            <IoMdClose />
          </CloseBtn>
        </TopContainer>
        <BottomContainer>
          <Text>{message}</Text>
          <BtnContainer>
            <Btn onClick={onClickOK}>확인</Btn>
            <Btn onClick={onClickCancel}>취소</Btn>
          </BtnContainer>
        </BottomContainer>
      </Container>
    </Draggable>
  );
};

export default Confirm;

const Container = styled.div`
  position: absolute;

  top: 10%;
  right: 30%;

  width: 445px;
  height: 230px;

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

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  margin: 15px 0 15px;

  height: 50%;
  width: 75%;

  white-space: pre-line;
  margin-right: 12px;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  width: 100%;
`;

const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 124px;
  height: 27px;
  margin: 0 10px;

  background-color: #d4d0c8;
  border: solid #808080 1px;
  box-shadow: 1px 1px 1px 1px gray;

  font-size: 20px;

  cursor: pointer;
`;
