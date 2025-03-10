import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

import GaietyParkFile from "../../components/mycomputer/GaietyParkFile";
import GaietyParkHelp from "../../components/mycomputer/GaietyParkHelp";

const MyComputerPage = () => {
  const [selectedFile, setSelectedFile] = useState<
    "유쾌 테마파크!" | "유쾌 테마파크 지침서" | null
  >(null);
  const navigate = useNavigate();

  const handleClose = () => {
    setSelectedFile(null); // 모든 컴포넌트를 닫음
  };

  return (
    <Background>
      <TopContainer>
        <Title>
          <Logo src="/images/내컴퓨터.png" />내 컴퓨터
        </Title>
        <CloseBtn
          onClick={() => {
            navigate("/");
          }}
        >
          <IoMdClose />
        </CloseBtn>
      </TopContainer>
      <MiddleContainer></MiddleContainer>
      <BottomContainer>
        <Icon onClick={() => setSelectedFile("유쾌 테마파크!")}>
          <Img src={"/images/보드게임.png"} />
          <Name>{"유쾌 테마파크!"}</Name>
        </Icon>
        {selectedFile === "유쾌 테마파크!" && (
          <GaietyParkFile onClose={handleClose} />
        )}
        <Icon onClick={() => setSelectedFile("유쾌 테마파크 지침서")}>
          <Img src={"/images/교육서.png"} />
          <Name>{"유쾌 테마파크···"}</Name>
        </Icon>
        {selectedFile === "유쾌 테마파크 지침서" && (
          <GaietyParkHelp onClose={handleClose} />
        )}
      </BottomContainer>
    </Background>
  );
};

export default MyComputerPage;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #d4d0c8;

  width: 100%;
  min-height: 94vh;
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
  background-color: white;

  width: 98%;
  height: 86vh;

  border: solid #acacac 1px;
`;

const Icon = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80px;
  height: 80px;
  margin: 7px;

  cursor: pointer;
`;

const Img = styled.img`
  height: 60px;
  width: 60px;
`;

const Name = styled.div`
  display: flex;
  justify-content: center;

  font-size: 16px;
  color: black;

  text-align: center;
  margin-top: 2px;

  width: 100%;

  & p {
    font-size: 18px;
    font-family: "HakgyoansimDunggeunmisoTTF-B";
  }
`;
