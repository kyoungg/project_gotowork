import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Main = () => {
  const navigation = useNavigate();

  return (
    <Background>
      <Text>
        <Title>
          <A>{"<"}</A>
          {"우주 쇼핑몰"}
          <A>{">"}</A>
        </Title>
        <Detaile>※외계에서 온 멋진 물건※~!!</Detaile>
        <Link
          onClick={() => {
            navigation("/spaceshop/pay");
          }}
        >
          {">>나는 물건을 본다"}
        </Link>
      </Text>
      <Ufo src="/images/ufo.png" />
    </Background>
  );
};

export default Main;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(#ff2323, #018b1a, #8100e3);

  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  display: flex;

  font-size: 64px;
  color: #44ff00;
  padding-top: 47%;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const A = styled.div`
  color: #d400ff;
`;

const Detaile = styled.div`
  color: white;
  font-size: 36px;
`;

const Link = styled.div`
  color: #00ffff;
  font-size: 36px;

  cursor: pointer;
`;

const moving = keyframes`
  0%{
    top: 10%;
    left: 10%;
    transform : rotate(0deg);
  }
  30%{
    top: 40%;
    left: 60%;
    transform : rotate(360deg)
  }
  60%{
    top: 55%;
    left: 10%;
    transform : rotate(0deg)
  }
  100%{
    top: 10%;
    left: 10%;
    transform : rotate(360deg)
  }
`;

const Ufo = styled.img`
  width: 200px;
  height: 200px;

  position: absolute;
  animation: ${moving} 7s 0s linear alternate infinite;
`;
