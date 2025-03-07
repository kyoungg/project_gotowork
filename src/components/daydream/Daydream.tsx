import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoMdClose, IoMdRefresh } from "react-icons/io";
import { useState } from "react";

import Profile from "./Profile";

interface DaydreamProps {
  component?: React.ReactNode; // React 컴포넌트 노드
  isLogin?: boolean; // true 또는 false 값
}

const Daydream: React.FC<DaydreamProps> = ({ component, isLogin }) => {
  const [count, setCount] = useState(1);

  const navigate = useNavigate();
  const pathname = window.location.pathname;

  return (
    <Background>
      <TopContainer>
        <Title>
          <Img src="/images/쇼핑몰.png" />
          백일몽주식회사 임직원복지몰
        </Title>
        <CloseBtn
          onClick={() => {
            navigate("/");
          }}
        >
          <IoMdClose />
        </CloseBtn>
      </TopContainer>
      <MiddleContainer>
        <AiOutlineArrowLeft size="36" onClick={() => navigate(-1)} />
        <AiOutlineArrowRight
          size="36"
          color="#898989"
          onClick={() => {
            setCount(count + 1);
            console.log(count);
          }}
        />
        <IoMdRefresh
          size="36"
          onClick={() => {
            window.location.reload();
          }}
        />
        <Url>
          <p>https://www.daydream.com{pathname}</p>
        </Url>
        <BiDotsVerticalRounded size="36" />
      </MiddleContainer>
      <BottomContainer>
        {isLogin && <Profile />}
        {component}
        {count % 6 == 0 && (
          <GotoSpace>
            <Pngwing>
              <SpaceImg src="/images/pngwing.png" />
              <SpaceText onClick={() => navigate("/spaceshop")}>
                <p>{`1주년 감사 할인중! ~80%`}</p>
                <p>{`직장이 지루한가요? >>클릭`}</p>
                <p>{`멋진 물건을 가지고 싶나요? >>클릭`}</p>
              </SpaceText>
            </Pngwing>
            <Spacehand src="/images/hand.gif" />
          </GotoSpace>
        )}
      </BottomContainer>
    </Background>
  );
};

export default Daydream;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #d4d0c8;

  width: 1024px;
  height: 708px;
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

const Img = styled.img`
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

const MiddleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 99%;
  height: 40px;

  padding-bottom: 3px;
`;

const Url = styled.div`
  display: flex;
  align-items: center;

  width: 80%;
  height: 32px;
  padding-left: 5px;

  background-color: #acacac;

  font-size: 21px;

  user-select: none;
`;

const BottomContainer = styled.div`
  background-color: white;

  width: 98%;
  height: 86%;

  border: solid #acacac 1px;
`;

const GotoSpace = styled.div`
  padding-top: 190px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const SpaceImg = styled.img`
  width: 210px;
  height: 140px;
  padding-right: 70px;
`;

const Spacehand = styled.img`
  width: 82px;
  height: 82px;
`;

const Pngwing = styled.div`
  position: relative;
  cursor: pointer;
`;

const SpaceText = styled.div`
  position: absolute;
  text-align: center;
  font-size: 12px;

  top: 35px;
`;
