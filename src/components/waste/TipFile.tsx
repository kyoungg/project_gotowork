import { useContext, useRef } from "react";
import Draggable from "react-draggable";
import { IoMdClose } from "react-icons/io";
import styled from "styled-components";

import AlertContext from "../alert/alertContext";

interface FileProps {
  onClose: () => void;
}

const TipFile = ({ onClose }: FileProps) => {
  const nodeRef = useRef(null);
  const { alert: alertComp } = useContext(AlertContext);

  const onBtnClick = async () => {
    const result = await alertComp(`... 무사히 청소를 마쳤다!`);
    localStorage.setItem("noname", "이름님");
    return result && window.location.reload();
  };

  return (
    <Draggable
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      nodeRef={nodeRef}
      handle=".top-container"
    >
      <Container ref={nodeRef}>
        <TopContainer className="top-container">
          <TitleContainer>
            <Icon src={"/images/교육서.png"} />
            {`야간청소근무팁 - 메모장`}
          </TitleContainer>
          <CloseBtn onClick={onClose}>
            <IoMdClose />
          </CloseBtn>
        </TopContainer>
        <MiddleContainer>
          <MiddleBtn>파일(F)</MiddleBtn>
          <MiddleBtn>편집(E)</MiddleBtn>
          <MiddleBtn>서식(O)</MiddleBtn>
          <MiddleBtn>보기(V)</MiddleBtn>
          <MiddleBtn>도움말(H)</MiddleBtn>
        </MiddleContainer>
        <BottomContainer>
          <TextContainer>
            <Text>
              안녕! 이 글을 읽고 있다면 넌 재수 없게도 야밤 청소가 걸린 거겠지.
              <br />
              그래 맞아. 보안팀 구역에는 미친 새끼들과 오염이 즐비한데 야간에
              둘만 들어가면 더 기괴한 경험하기 딱 좋지 뭐. <br />
              하지만 너무 걱정하지는 마. 내가 적어두는 꿀팁만 읽으면 너도 별문제
              없이 해치우고 나올 수 있어. <br />
              <br />
              어떤 의미에서는 꿀이라니까? 이거 수당이 붙잖아. 네가 원한게 돈이든
              포인트든 노스텔지어 장비든, 그것만 생각하면서 버티자고.
              <br /> 징계라면 뭐… 힘내세요.
              <br /> 부디 현장탐사팀이길 바란다.
              <br />
              <br />
              <br />
              <br /> 1. 물걸레는 더러워지면 바로 세척해. 그게 더 낫더라. <br />
              세척 용액이 강해서 몇 번 헹구기만 하면 된다니까. 쉽지?
              <br />
              <br /> 2. 무슨 일이 벌어지든 태연하게 청소만 해. <br />
              보안팀 구역에 야간에 들어오면 원래 별별 일이 다 일어나니까. <br />
              그래도 대여창고 정도면 나쁘지 않은 곳이라고! <br />
              <br />
              3. 청소하면서 어떤 경리실이든 문을 열지 마. 뭐, 우리 회사 직원이면
              모를 리가 없지만… 혹시 해서 적어둠.
              <br />
              <br /> 4. 아냐 다시 한번 강조해둔다 격리실에서 들리는 소리 그냥
              무시해. 대답하지 마. <br />
              안에서 누가 애원하든 네 가족이나 친구라고 하든 절대 사실이
              아니니까 열지 말라고!! <br />
              <br />
              <WhiteText>
                킥킥키키킥킥.살려주셔요살려주세요저는여기
                있을사람이아닙니다저는여기
                있을사람이아닙니다저는사람이아닙니다킥킥키기킥킥나가면죽어야지
              </WhiteText>
              <br />
              5. 파트너가 미친 소리하면 버리고 너라도 튀어. 알았지? 괜히
              도우려다가 너도 죽는다. 경비팀 신입들 특히 명심하라고!! <br />
              <br />
              7. 가끔 야간 순찰 중인 대원을 만나기도 하는데, 물 한 병 주면
              좋아하거든. <br />
              있으면 줘. 뭐, 야간에 같이 일하는 사이에 분위기 망치는 건 안 좋은
              선택이니까. <br />
              <br />
              근데 말이야. <br />이 회사 경비팀에 '대원' 같은 직위 체계는 없어.
              <br />
              기억해. 쓸데 없는 말은 하지 마. . . . <br />
              <br />
              <br />
              <br />
              11. 하… 이 이야기를 할 때가 됐네. 아마 청소를 시작하고 3시간쯤
              지났을 거야. 그렇지?
              <br /> …그때부터 슬슬, B14 격리실에서 미친 새끼가 떠드는 소리가
              들리기 시작하거든.
              <br />
              <br />
              <WhiteText>
                거기 누구 있어?거기 누구 있구나?거기 누구 있어?거기 누구
                있구나?거기 누구 있어?거기 누구 있구나?거기 누구 있어?거기 누구
                있구나?
              </WhiteText>
              <WhiteText>
                내가 여기서 나가는 방법 알려줄까? 살아남는 방법 알려줄까? 죽은
                사람을 살리는 방법을 알려줄까? 이 회사의 비밀을 알려줄까? 그냥
                알려줄게 가까이와 조금만 가까이 오면 세상의 진실을 알려줄
              </WhiteText>
              <br /> <span>이름님?</span> 아무튼 이상한 거 부르짖으면서 무슨
              행복해지는 방법 알려주겠다고 하는 새끼인데, 대충 욕이나 해주면
              조용해질 거야.
              <br />
              욕하기 싫으면 대충 꺼지라고만 해도 괜찮음. <br />
              <br />
              <br />
              12. 문틈에서 혹시 이상한 냄새가 나거나 뭐가 흘러나오기 시작하면
              무조건 도망쳐. <br />
              문이 열리기 전에 반드시 나타나는 징조거든. 역으로 말하자면, 보통은
              안전함. <br />그 외의 예외 상황들에 대해서 자세히 다음 번호에서
              말하겠음.
              <br /> 조금 시간을 두고 읽는 걸 추천함. <br />
              <br />
              <WhiteText>
                <p> </p>
              </WhiteText>
              <br />
              13. 어? 문이 열렸어?
              <br />
              ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
              <WhiteText>
                어떻게 알았어? 어떻게 알았어? 어떻게 알았어? 어떻게 알았어?
                어떻게 알았어? 어떻게 알았어? 어떻게 알았어? 어떻게 알았어?
                어떻게 알았어? 어떻게 알았어? 어떻게 알았어? 어떻게 알았어?
                어떻게 알았어? 어떻게 알았어? 어떻게 알았어? 어떻게 알았어?
                어떻게 알았어? 어떻게 알았어? 어떻게 알았어? 어떻게 알았어?
                <p>어떻게 알았어?</p>
                낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄낄!!
                <button onClick={() => onBtnClick()}>
                  안녕!!! 너희 이름님을 믿니이이이??
                </button>
                <br />
                <br />
                <br />
              </WhiteText>
            </Text>
          </TextContainer>
        </BottomContainer>
      </Container>
    </Draggable>
  );
};

export default TipFile;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;

  top: 10vh;
  left: 24vh;

  width: 85vh;
  height: 78vh;

  background-color: #d4d0c8;
  border: solid #808080 1px;
`;

const Icon = styled.img`
  height: 25px;
  width: 25px;

  margin: 5px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 98%;
  height: 30px;

  margin-top: 5px;
  margin-left: 4px;

  background: linear-gradient(to right, #254181, 80%, #a3c7ee);

  color: white;
  font-size: 20px;
`;

const CloseBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #d9d9d9;

  font-size: 21px;
  color: black;

  text-align: center;

  width: 20px;
  height: 20px;
  margin-right: 10px;

  border: solid #808080 1px;
  box-shadow: 1px 1px 0.2px 0.2px gray;

  cursor: pointer;
`;

const MiddleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-size: 20px;
  color: black;

  width: 97%;
  height: 2vh;
`;

const MiddleBtn = styled.div`
  margin-right: 15px;
  height: 15px;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 10px;

  background-color: white;

  width: 97%;
  height: 69vh;

  overflow-y: auto;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  align-content: flex-start;

  font-size: 20px;
  margin: 15px 0 15px;

  height: 95%;
  width: 95%;

  border: none;
  outline: none;
  resize: none;
  word-wrap: break-word;
`;

const Text = styled.p`
  line-height: 1.3;

  & span {
    text-decoration: line-through;
  }
`;

const WhiteText = styled.p`
  color: white;

  & p {
    font-size: 40px;
  }

  & button {
    font-size: 60px;
    border: solid white 2px;
    background-color: white;
    color: white;
    cursor: pointer;
  }
`;
