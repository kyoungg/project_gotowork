import styled from "styled-components";
import { IoMdArrowForward } from "react-icons/io";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import AlertContext from "../../components/alert/alertContext";

const MainLoginPage = () => {
  const [password, setPassword] = useState("");
  const [hint, setHint] = useState(false);

  const navigate = useNavigate();

  const { alert: alertComp } = useContext(AlertContext);

  const onFail = async () => {
    alertComp(`잘못된 비밀번호를 입력하셨습니다.\n다시 확인해 주세요.`);
  };

  const handleSubmit = () => {
    if (password === "dmstlawkd") {
      localStorage.setItem("isLogin", "success");
      navigate("/");
    } else onFail();
  };

  return (
    <Background>
      <UserImg src="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MTBfMTY1/MDAxNTkxNzQ2ODcyOTI2.Yw5WjjU3IuItPtqbegrIBJr3TSDMd_OPhQ2Nw-0-0ksg.8WgVjtB0fy0RCv0XhhUOOWt90Kz_394Zzb6xPjG6I8gg.PNG.lamute/user.png?type=w800" />
      <Name>User</Name>
      <InputContainer>
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="암호를 입력하세요"
        />
        <SubmitBtn onClick={() => handleSubmit()}>
          <IoMdArrowForward size="20" />
        </SubmitBtn>
      </InputContainer>
      <HintContainer onClick={() => setHint(!hint)}>
        {hint || <p>암호를 잊으셨나요?</p>}
        {hint && <span>힌트 : 인성 인증배지</span>}
      </HintContainer>
    </Background>
  );
};

export default MainLoginPage;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #245c8d;

  /* background-image: url(${"https://advent.perl.kr/2012/2012-12-01-1.png"});
  background-size: 100% 100%; */

  width: 100%;
  height: 100vh;
`;

const UserImg = styled.img`
  border-radius: 50%;
  width: 20vh;
`;

const Name = styled.div`
  color: white;
  font-size: 55px;
  margin: 15px 0;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;

  height: 35px;

  &button,
  input,
  button:focus,
  button:active,
  input:active {
    border-style: none;
    box-shadow: none;
    outline: none;
    background-color: white;
  }

  & button:focus {
    background-color: #989da4;
  }
`;

const PasswordInput = styled.input`
  width: 250px;
  height: 25px;

  font-size: 18px;
`;

const SubmitBtn = styled.button`
  text-align: center;

  height: 29px;
  width: 30px;

  margin-right: 2px;

  background-color: #989da490;
  margin: 1px;
  border-style: none;
`;

const HintContainer = styled.div`
  margin-top: 10px;
  color: white;
  display: flex;
  align-items: center;

  & p {
    font-size: 18px;
  }

  & span {
    font-size: 18px;
  }
`;
