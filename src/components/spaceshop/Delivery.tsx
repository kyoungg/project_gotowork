import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Delivery = () => {
  const MINUTES_IN_SE = 8 * 1000;
  const INTERVAL = 1000;
  const [timeLeft, setTimeLeft] = useState<number>(MINUTES_IN_SE);

  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft <= 0) {
      navigate("/daydream"); // 타이머가 끝나면 페이지 이동
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - INTERVAL);
    }, INTERVAL);

    return () => clearInterval(timer);
  }, [timeLeft]); // timeLeft가 변경될 때마다 실행

  return (
    <Background>
      <Container>
        <Title>성공 구매!</Title>
        <Text>물건이 로켓을 탔다!</Text>
        <Text>도착까지</Text>
        <Clock>00 : 00 : 0{timeLeft / 1000}</Clock>
      </Container>
    </Background>
  );
};

export default Delivery;

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(#ff2323, #018b1a, #8100e3);

  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: white;
  width: 50%;
  height: 80%;
`;

const Title = styled.div`
  padding-bottom: 25px;
  font-size: 48px;
`;

const Text = styled.div`
  padding-bottom: 5px;
  font-size: 36px;
`;

const Clock = styled.div`
  font-size: 36px;
  color: #ff0000;
`;
