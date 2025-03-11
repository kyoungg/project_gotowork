import styled from "styled-components";
import { useContext, useEffect, useRef, useState } from "react";
import { MdLockOutline } from "react-icons/md";
import { GrPower, GrPowerReset } from "react-icons/gr";
import { FaKey } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaSchool } from "react-icons/fa";
import { MdCleaningServices } from "react-icons/md";
import { TbMoodKidFilled } from "react-icons/tb";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import AlertContext from "./alert/alertContext";
import ConfirmContext from "./confirm/confirmContext";

const Footer = () => {
  const [date, setDate] = useState<Date | Date[]>(new Date());

  const navigate = useNavigate();
  const [view, setView] = useState(false);
  const [calendar, setCalendar] = useState(false);

  //푸터 메뉴바 옵션
  const noname = localStorage.getItem("noname");
  const hangman = localStorage.getItem("Qterw-B-191");
  const highSchool = localStorage.getItem("Qterw-()-62");

  //달력 구현용
  const train = localStorage.getItem("train");
  const quizShow = localStorage.getItem("quizShow");

  //착한친구 구현용
  const doll = localStorage.getItem("doll");
  const coin = localStorage.getItem("coin");

  const powerRef = useRef<HTMLDivElement | null>(null);
  const calendarRef = useRef<HTMLDivElement | null>(null);

  const { alert: alertComp } = useContext(AlertContext);
  const { confirm: confirmComp } = useContext(ConfirmContext);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // Dropdown 외부 클릭 시 드롭다운을 닫기
      if (powerRef.current && !powerRef.current.contains(e.target as Node)) {
        setView(false);
      }
      // Calendar 외부 클릭 시 Calendar를 닫기
      if (
        calendarRef.current &&
        !calendarRef.current.contains(e.target as Node)
      ) {
        setCalendar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const currentDay = displayDate.getDay(); // 요일을 가져옴 (0: 일요일, 1: 월요일, ..., 2: 화요일, ...)
    const currentMonth = displayDate.getMonth(); // 월 (0: 1월, 1: 2월, ..., 11: 12월)
    const currentDate = displayDate.getDate(); // 날짜

    //1월 2일인 경우
    if (currentMonth === 0 && currentDate === 2) {
      if (train === "tamra") return;
      localStorage.setItem("train", "tamra");
      window.location.reload();
    }

    if (currentDay === 2) {
      if (quizShow === "tuesday") return;
      localStorage.setItem("quizShow", "tuesday");
      window.location.reload();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]); // date가 변경될 때마다 실행

  const onEndBtnClick = async () => {
    await alertComp(`해야 할 게 있다!`);
  };

  const handleReset = async () => {
    localStorage.clear();
    localStorage.setItem("isLogin", "success");
    navigate("/");
    window.location.reload();
  };

  const onLockBtnClick = () => {
    localStorage.removeItem("isLogin");
    navigate("/login");
  };

  const onResetBtnClick = async () => {
    const result = await confirmComp(
      `다시 시작 할까?\n(진행 상황이 초기화 됩니다)`
    );
    return result && handleReset();
  };

  const displayDate = Array.isArray(date) ? date[0] : date;
  const formattedDate = `${displayDate.getFullYear()}-${(
    displayDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${displayDate.getDate().toString().padStart(2, "0")}`;

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
          {highSchool === "세광공업고등학교" && <FaSchool size="28" />}
          {noname === "이름님" && <MdCleaningServices size="28" />}
          {hangman === "hangman" && <TbMoodKidFilled size="28" />}
        </IconContainer>
        <Clock
          onClick={() => {
            setCalendar(!calendar);
          }}
        >
          <p>{formattedDate}</p>
          <p>{displayDate.toLocaleDateString("ko-KR", { weekday: "long" })}</p>
        </Clock>
        {calendar && (
          <CalendarWrapper ref={calendarRef}>
            <StyledCalendar
              onChange={(value) => {
                setDate(value as Date);
                setCalendar(false);
              }}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              value={date}
            />
          </CalendarWrapper>
        )}
      </MenuContainer>
      {view && (
        <ResetContainer ref={powerRef}>
          <PowerBtn>
            <MdLockOutline />
            <BtnText onClick={() => onLockBtnClick()}>잠금</BtnText>
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
            <BtnText onClick={() => onResetBtnClick()}>다시 시작</BtnText>
          </PowerBtn>
        </ResetContainer>
      )}
      {doll && coin && <Friend src="/images/착한친구.png" />}
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
  height: 6vh;
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
  justify-content: flex-start;

  background-color: #c2c5b0;
  border: solid #9e9d90 2px;
  box-shadow: 1px 1px 2px 2px gray inset;

  width: 231px;
  height: 36px;
  margin-right: 15px;
`;

const Img = styled.img`
  height: 30px;
  width: 30px;
`;

const Clock = styled.div`
  position: absolute;
  right: 3vh;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 100px;
  height: 30px;
  margin-left: 10px;

  font-size: 16px;

  cursor: pointer;
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

  cursor: default;

  &:hover {
    background-color: #9fa192;
    width: 90%;

    cursor: pointer;
  }
`;

const BtnText = styled.div`
  margin-left: 5px;
`;

const IconContainer = styled.div`
  width: 80px;
  display: flex;

  padding-left: 8px;
`;

const CalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1px;
`;

// Calendar에 대한 스타일 적용
const StyledCalendar = styled(Calendar)`
  position: absolute;

  right: 1vh;
  bottom: 7vh;

  height: 312px;
  background: #d4d0c8;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-family: none;

  .react-calendar__navigation {
    background: #9fa192;
    margin-bottom: 10px;
  }

  .react-calendar__month-view__weekdays {
    text-transform: uppercase;
    font-size: 0.7rem;
    font-weight: bold;
    font-family: none;
    color: #555;
  }

  .react-calendar__tile {
    padding: 10px;
    border-radius: 5px;
    transition: 0.2s ease-in-out;
    &:hover {
      background: #9fa192;
    }
  }

  .react-calendar__tile--active {
    background: #254181;
    color: white;
    font-weight: bold;
  }
`;

const Friend = styled.img`
  position: absolute;
  width: 88px;

  bottom: 1.8%;
  right: 35%;
`;
