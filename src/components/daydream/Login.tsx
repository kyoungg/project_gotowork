import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const navigation = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (id == "yongj1111" && password == "Dydajflgodks!111") {
      alert("성공");
      localStorage.setItem("token", "gerong");
      navigation("/daydream");
    } else alert("실패");
  };

  return (
    <Container>
      <InputContainer>
        <Title>아이디</Title>
        <InputText
          type="text"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
      </InputContainer>
      <InputContainer>
        <Title>비밀번호</Title>
        <InputText
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </InputContainer>
      <UploadBtn onClick={handleSubmit}>제출</UploadBtn>
    </Container>
  );
};

export default Login;

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

const InputText = styled.input`
  width: 250px;
  height: 30px;

  background-color: #d9d9d9;
  border-style: none;

  font-size: 20px;
`;

const UploadBtn = styled.button`
  width: 70px;
  height: 30px;

  border-style: none;
  background-color: #254181;

  margin: 50px 0 50px;

  font-size: 21px;
  color: white;
`;
