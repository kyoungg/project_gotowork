import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import data from "../../assets/data/icon";
import Confirm from "../../components/Confirm";

const MainPage = () => {
  const navigation = useNavigate();
  const weHelp = localStorage.getItem("weHelp");

  return (
    <Background>
      <ul>
        {data.map((icon) => {
          return (
            <Icon
              key={icon.id}
              onClick={() => !icon.isModal && navigation(icon.path)}
            >
              <Img src={icon.img} />
              <Name>{icon.name}</Name>
            </Icon>
          );
        })}
        {weHelp && (
          <Icon>
            <Img src={"/images/redbutton.png"} />
            <Name>{"우리가 도움!"}</Name>
          </Icon>
        )}
      </ul>
      <Confirm message="아임 에러" type="error" title="오류" />
    </Background>
  );
};

export default MainPage;

const Background = styled.div`
  background-color: #245c8d;

  width: 1024px;
  height: 708px;
`;

const Icon = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80px;
  padding: 5px;
`;

const Img = styled.img`
  height: 60px;
  width: 60px;
`;

const Name = styled.div`
  display: flex;
  flex-direction: column-reverse;

  font-size: 16px;
  color: white;

  text-align: center;

  width: 100%;
`;
