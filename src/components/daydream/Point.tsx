import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { GiHelp } from "react-icons/gi";

import rankData from "../../assets/data/rank";
import Ranklist from "./Ranklist";
import AlertContext from "../alert/alertContext";
import ConfirmContext from "../confirm/confirmContext";

const Point = () => {
  const [view, setView] = useState(false);
  const [isHelp, setIsHelp] = useState(false);
  const [rank, setRank] = useState("F 등급");
  const [name, setName] = useState("");
  const [file, setFile] = useState("");

  const { alert: alertComp } = useContext(AlertContext);
  const { confirm: confirmComp } = useContext(ConfirmContext);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const helpRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // Dropdown 외부 클릭 시 드롭다운을 닫고
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setView(false);
      }

      // Ranklist 외부 클릭 시 isHelp를 false로 설정
      if (helpRef.current && !helpRef.current.contains(e.target as Node)) {
        setIsHelp(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onSubmitClick = async () => {
    const result = await confirmComp(`조장님 계정으로 \n포인트를 등록할까?`);
    return result && onYesClick();
  };

  const onYesClick = async () => {
    await alertComp(`들킬 것 같다 그만두자...`);
  };

  return (
    <Container>
      <InputContainer>
        <Title>어둠 등급</Title>
        <DropdownContainer ref={dropdownRef}>
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
          {isHelp && (
            <div ref={helpRef}>
              <Ranklist />
            </div>
          )}
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
  width: 100%;
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
  padding-left: 140px;
  margin-bottom: 8px;

  cursor: pointer;
`;
