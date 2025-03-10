import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";

import AlertContext from "../alert/alertContext";

const Nav = () => {
  const navigate = useNavigate();

  const { alert: alertComp } = useContext(AlertContext);

  const onShopClick = async () => {
    await alertComp(`지금 상점에선 확인 할 게 없다.`);
  };

  return (
    <>
      <ul>
        <Li
          key="point01"
          onClick={() => {
            navigate("/daydream/point");
          }}
        >
          - 포인트 등록
        </Li>
        <Li
          key="shop01"
          onClick={() => {
            // navigate("/daydream/shop");
            onShopClick();
          }}
        >
          - 포인트 상점
        </Li>
      </ul>
    </>
  );
};

export default Nav;

const Li = styled.li`
  font-size: 20px;
  padding: 15px 20px;

  width: 15%;

  cursor: pointer;
`;
