import styled from "styled-components";

interface Props {
  message: string;
  type: "error" | "warning";
  isAlert?: boolean;
  title: string;
  onClickOK?: () => void;
  onClickCancel?: () => void;
}

const Confirm = ({
  message,
  type,
  title,
  onClickOK,
  onClickCancel,
  isAlert = false,
}: Props) => {
  return (
    <Container>
      <TopContainer>
        <TitleContainer>
          <Icon
            src={type == "error" ? "/images/출입불가.png" : "/images/경고.png"}
          />
          {title}
        </TitleContainer>
        <CloseBtn onClick={onClickCancel}>X</CloseBtn>
      </TopContainer>
      <BottomContainer>
        <Text>{message}</Text>

        <BtnContainer>
          <Btn onClick={onClickOK}>확인</Btn>
          {isAlert || <Btn onClick={onClickCancel}>취소</Btn>}
        </BtnContainer>
      </BottomContainer>
    </Container>
  );
};

export default Confirm;

const Container = styled.div`
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

  width: 20px;
  height: 20px;
  margin-right: 12px;

  border: solid #808080 1px;
  box-shadow: 1px 1px 1px 1px gray;

  cursor: default;
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
  margin: 10px 0 15px;

  height: 50%;
  width: 75%;
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
`;
