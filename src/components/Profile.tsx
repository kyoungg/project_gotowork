import styled from "styled-components";

const Profile = () => {
  return (
    <>
      <Name>환영합니다 [ 이자헌 과장 ] 님</Name>
      <Point>현재 가지고 계신 포인트는 총 [ ◼◼◼,◼◼◼p ] 입니다</Point>
    </>
  );
};

export default Profile;

const Name = styled.div`
  font-size: 20px;
`;

const Point = styled.div`
  font-size: 20px;
`;
