import styled from "styled-components";

const Profile = () => {
  return (
    <Container>
      <P>환영합니다 [ 이자헌 과장 ] 님</P>
      <P>현재 가지고 계신 포인트는 총 [ ◼◼◼,◼◼◼p ] 입니다.</P>
    </Container>
  );
};

export default Profile;

const P = styled.div`
  font-size: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 80%;
  height: 15%;

  margin: 0 20px;
`;
