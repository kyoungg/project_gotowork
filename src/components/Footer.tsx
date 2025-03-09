import styled from "styled-components";
import { useContext, useEffect, useRef, useState } from "react";
import { MdLockOutline } from "react-icons/md";
import { GrPower, GrPowerReset } from "react-icons/gr";
import { FaKey } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaSchool } from "react-icons/fa";
import { MdCleaningServices } from "react-icons/md";
import { TbMoodKidFilled } from "react-icons/tb";

import AlertContext from "./alert/alertContext";
import ConfirmContext from "./confirm/confirmContext";

const Footer = () => {
  const navigate = useNavigate();
  const [view, setView] = useState(false);

  const noname = localStorage.getItem("noname");
  const hangman = localStorage.getItem("Qterw-B-191");
  const highSchool = localStorage.getItem("Qterw-()-62");

  const powerRef = useRef<HTMLDivElement | null>(null);
  const { alert: alertComp } = useContext(AlertContext);
  const { confirm: confirmComp } = useContext(ConfirmContext);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // Dropdown 외부 클릭 시 드롭다운을 닫고
      if (powerRef.current && !powerRef.current.contains(e.target as Node)) {
        setView(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onEndBtnClick = async () => {
    await alertComp(`아직 해야 할 게 있다!`);
  };

  const handleReset = async () => {
    localStorage.clear();
    navigate("/");
  };

  const onResetBtnClick = async () => {
    const result = await confirmComp(`초기화 할까?\n(정말 초기화 됩니다)`);
    return result && handleReset();
  };

  return (
    <Background>
      <StartBtn
        onClick={() => {
          setView(!view);
        }}
      >
        <Img src="/images/windowslogo.png" />
        시작
      </StartBtn>
      <MenuContainer>
        <IconContainer>
          {highSchool && <FaSchool size="28" />}
          {noname && <MdCleaningServices size="28" />}
          {hangman && <TbMoodKidFilled size="28" />}
        </IconContainer>
        <Clock>
          <p>2025-03-05</p>
          <p>화 요일</p>
        </Clock>
      </MenuContainer>
      {view && (
        <ResetContainer ref={powerRef}>
          <PowerBtn>
            <MdLockOutline />
            <BtnText>잠금</BtnText>
          </PowerBtn>
          <PowerBtn>
            <FaKey />
            <BtnText onClick={() => onEndBtnClick()}>힌트</BtnText>
          </PowerBtn>
          <PowerBtn onClick={() => onEndBtnClick()}>
            <GrPower />
            <BtnText>시스템 종료</BtnText>
          </PowerBtn>
          <PowerBtn>
            <GrPowerReset />
            <BtnText onClick={() => onResetBtnClick()}>초기화</BtnText>
          </PowerBtn>
        </ResetContainer>
      )}
    </Background>
  );
};

export default Footer;

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #c2c5b0;

  width: 100%;
  /* height: 60px; */
  height: 7vh;
`;

const StartBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #c2c5b0;
  border: solid #9e9d90 2px;
  box-shadow: 1px 1px 1px 1px gray;

  width: 85px;
  height: 35px;
  margin-left: 15px;

  font-size: 24px;

  cursor: pointer;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: #c2c5b0;
  border: solid #9e9d90 2px;
  box-shadow: 1px 1px 2px 2px gray inset;

  width: 231px;
  height: 35px;
  margin-right: 15px;
`;

const Img = styled.img`
  height: 30px;
  width: 30px;
`;

const Clock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 80px;
  height: 30px;
  padding-left: 10px;

  font-size: 16px;
`;

const ResetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 150px;
  height: 160px;

  bottom: 35px;
  left: 50px;

  background-color: #c2c5b0;
  border: solid #9e9d90 1px;
  box-shadow: 1px 1px 1px 1px gray;

  position: absolute;
`;

const PowerBtn = styled.div`
  display: flex;

  margin: 10px 5px;

  width: 100%;
  font-size: 20px;

  cursor: pointer;
`;

const BtnText = styled.p`
  margin-left: 5px;
`;

const IconContainer = styled.div`
  width: 80px;
  display: flex;
`;
