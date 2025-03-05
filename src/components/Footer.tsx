import styled from "styled-components";

import { MdOutlineBroadcastOnHome } from "react-icons/md";
import { AiOutlineCloudSync } from "react-icons/ai";
import { IoIosArrowUp } from "react-icons/io";
import { AiOutlineSound } from "react-icons/ai";

const Footer = () => {
  return (
    <Background>
      <StartBtn>
        <Img src="./public/windowslogo.png" />
        시작
      </StartBtn>
      <MenuContainer>
        <IoIosArrowUp size="28" />
        <MdOutlineBroadcastOnHome size="28" />
        <AiOutlineCloudSync size="28" />
        <AiOutlineSound size="28" />
        <Clock>
          <p>오후 5:13</p>
          <p>2025-03-05</p>
        </Clock>
      </MenuContainer>
    </Background>
  );
};

export default Footer;

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #c2c5b0;

  width: 1024px;
  height: 60px;
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
