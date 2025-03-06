import styled from "styled-components";

import rankData from "../../assets/data/rank";

const Ranklist = () => {
  const data = rankData;
  return (
    <Ul>
      {data.map((rank) => {
        return (
          <Li>
            {rank.rank} : {rank.Point}
          </Li>
        );
      })}
    </Ul>
  );
};

export default Ranklist;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  background-color: #d7e1eb;
  opacity: 0.97;

  width: 188px;
  height: 138px;

  position: absolute;
  top: 110px;
  left: 320px;
`;

const Li = styled.li`
  width: 99%;
  font-size: 20px;
  padding: 1px;
`;
