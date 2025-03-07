import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoMdRefresh } from "react-icons/io";

interface SpaceshopProps {
  component?: React.ReactNode; // React 컴포넌트 노드
}

const Spaceshop: React.FC<SpaceshopProps> = ({ component }) => {
  const navigation = useNavigate();
  const pathname = window.location.pathname;

  return (
    <Background>
      <TopContainer>
        <Title>
          <Img src="/images/alien.png" />
          우주 쇼핑몰
        </Title>
        <CloseBtn
          onClick={() => {
            navigation("/");
          }}
        >
          X
        </CloseBtn>
      </TopContainer>
      <MiddleContainer>
        <AiOutlineArrowLeft size="36" onClick={() => navigation(-1)} />
        <AiOutlineArrowRight size="36" color="#898989" />
        <IoMdRefresh
          size="36"
          onClick={() => {
            window.location.reload();
          }}
        />
        <Url>
          <p>
            htps://www.spaceshop.com{pathname}
            /we-are?who=gerong&thief?mask=capreolus-pygargus
          </p>
        </Url>
        <BiDotsVerticalRounded size="36" />
      </MiddleContainer>
      <BottomContainer>{component}</BottomContainer>
    </Background>
  );
};

export default Spaceshop;

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

  cursor: default;
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

  font-size: 16px;
`;

const BottomContainer = styled.div`
  background-color: white;

  width: 98%;
  height: 86%;

  border: solid #acacac 1px;
`;
