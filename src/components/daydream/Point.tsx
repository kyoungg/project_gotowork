import { useContext, useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { GiHelp } from "react-icons/gi";

import rankData from "../../assets/data/rank";
import Ranklist from "./Ranklist";
import AlertContext from "../alert/alertContext";

const Point = () => {
  const [view, setView] = useState(false);
  const [isHelp, setIsHelp] = useState(false);
  const [rank, setRank] = useState("F 등급");
  const [name, setName] = useState("");
  const [file, setFile] = useState("");

  const { alert: alertComp } = useContext(AlertContext);

  const onSubmitClick = async () => {
    await alertComp(`지금은 내 계정이 아니다...`);
  };

  return (
    <Container>
      <InputContainer>
        <Title>어둠 등급</Title>
        <DropdownContainer>
          <Ul
            onClick={() => {
              setView(!view);
            }}
          >
            <DropdownBox>
              <InputDrop value={rank} />
              {view ? <IoIosArrowUp size="30" /> : <IoIosArrowDown size="30" />}
            </DropdownBox>
            {view &&
              rankData.map((rank) => {
                return (
                  <Li
                    key={rank.Point}
                    onClick={() => {
                      setRank(rank.rank);
                    }}
                  >
                    {rank.rank}
                  </Li>
                );
              })}
          </Ul>
        </DropdownContainer>
        <HelpBtn
          onClick={() => {
            setIsHelp(!isHelp);
          }}
        >
          <GiHelp size="28" />
          {isHelp && <Ranklist />}
        </HelpBtn>
      </InputContainer>
      <InputContainer>
        <Title>이름</Title>
        <InputText
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </InputContainer>
      <InputContainer>
        <Title>첨부 자료</Title>
        <InputFile
          type="file"
          id="file"
          value={file}
          onChange={(e) => {
            setFile(e.target.value);
          }}
        />
      </InputContainer>
      <UploadBtn
        onClick={() => {
          onSubmitClick();
        }}
      >
        제출
      </UploadBtn>
    </Container>
  );
};

export default Point;

const Container = styled.div`
  width: 80%;
  margin: 20px;
  padding-top: 20px;
`;

const Title = styled.div`
  font-size: 20px;
  margin-right: 25px;

  width: 110px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  height: 40px;
  width: 50%;
`;

const DropdownContainer = styled.div`
  height: 100%;
  position: relative;
`;

const InputDrop = styled.input`
  width: 100px;
  height: 30px;

  background-color: #d9d9d9;
  border-style: none;

  font-size: 20px;
`;

const InputText = styled.input`
  width: 250px;
  height: 30px;

  background-color: #d9d9d9;
  border-style: none;

  font-size: 20px;
`;

const InputFile = styled.input`
  width: 250px;
  height: 30px;

  background-color: #d9d9d9;
  border-style: none;

  font-size: 20px;
`;

const DropdownBox = styled.div`
  display: flex;
  align-items: center;

  background-color: #d9d9d9;
`;

const Ul = styled.ul`
  position: absolute;
  align-items: center;
`;

const Li = styled.li`
  color: #6c6c6c;
  font-size: 20px;

  width: 100px;
  padding: 3px 2px;

  background-color: #d9d9d9;

  &:hover {
    color: black;
    cursor: pointer;
  }
`;

const UploadBtn = styled.button`
  width: 70px;
  height: 30px;

  border-style: none;
  background-color: #254181;

  margin: 50px 0 50px;

  font-size: 21px;
  color: white;

  cursor: pointer;
`;

const HelpBtn = styled.div`
  padding-left: 35%;
  padding-bottom: 2px;

  cursor: pointer;
`;
