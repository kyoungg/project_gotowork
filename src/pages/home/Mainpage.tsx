import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import data from "../../assets/data/icon";

import { useContext } from "react";
import ConfirmContext from "../../components/confirm/confirmContext";
import AlertContext from "../../components/alert/alertContext";

const MainPage = () => {
  const navigation = useNavigate();
  const weHelp = localStorage.getItem("weHelp");

  const { confirm: confirmComp } = useContext(ConfirmContext);
  const { alert: alertComp } = useContext(AlertContext);

  const onWehelpClick = async () => {
    const result = await confirmComp(`정말 누를까?`);
    return result == true && onRealhelpClick();
  };

  const onRealhelpClick = async () => {
    const result = await confirmComp(`정말?`);
    return result == true && onDontClick();
  };

  const onDontClick = async () => {
    await alertComp(`좋은 생각이 아닌 것 같다...`);
  };

  const onNothingClick = async () => {
    await alertComp(`해야할 게 있다!`);
  };

  return (
    <Background>
      <ul>
        {data.map((icon) => {
          return (
            <Icon
              key={icon.id}
              onClick={() =>
                icon.isModal ? onNothingClick() : navigation(icon.path)
              }
            >
              <Img src={icon.img} />
              <Name>{icon.name}</Name>
            </Icon>
          );
        })}
        {weHelp && (
          <Icon
            onClick={() => {
              onWehelpClick();
            }}
          >
            <Img src={"/images/redbutton.png"} />
            <Name>{"우리가 도움!"}</Name>
          </Icon>
        )}
      </ul>
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

  cursor: pointer;
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
