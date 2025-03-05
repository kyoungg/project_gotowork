import styled from "styled-components";

const MainPage = () => {
  return (
    <Background>
      <Icon>
        <Img src="./public/빈창.png" />
        <p>휴지통</p>
      </Icon>
      <Icon>
        <Img src="./public/내컴퓨터.png" />
        <p>내 컴퓨터</p>
      </Icon>
      <Icon>
        <Img src="./public/쇼핑몰.png" />
        <p>임직원</p>
        <p>복지몰</p>
      </Icon>
      <Icon>
        <Img src="./public/말풍선.png" />
        <p>메신저</p>
      </Icon>
      <Icon>
        <Img src="./public/메모.png" />
        <p>&#91;이자헌</p>
        <p>조-...</p>
      </Icon>
    </Background>
  );
};

export default MainPage;

const Background = styled.div`
  background-color: #245c8d;

  width: 1024px;
  height: 708px;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: white;
  font-size: 16px;
  align-content: center;

  width: 80px;
  padding: 5px;
`;

const Img = styled.img`
  height: 60px;
  width: 60px;
`;
