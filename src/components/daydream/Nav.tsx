import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  const navigate = useNavigate();

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
            navigate("/daydream/shop");
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
