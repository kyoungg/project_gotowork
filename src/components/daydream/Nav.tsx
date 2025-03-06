import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  const navigation = useNavigate();

  return (
    <>
      <ul>
        <Li
          onClick={() => {
            navigation("/daydream/point");
          }}
        >
          - 포인트 등록
        </Li>
        <Li
          onClick={() => {
            navigation("/daydream/shop");
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

  cursor: pointer;
`;
