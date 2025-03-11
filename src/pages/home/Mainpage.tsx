import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import Draggable from "react-draggable";
import useSound from "use-sound";

import data from "../../assets/data/icon";
import ConfirmContext from "../../components/confirm/confirmContext";
import AlertContext from "../../components/alert/alertContext";
import MemoContext from "../../components/memo/memoContext";

interface BackgroundProps {
  bgImage?: string | null;
}

const MainPage = () => {
  const navigate = useNavigate();

  //우주쇼핑몰
  const weHelp = localStorage.getItem("weHelp"); //우리가 도움! "change"
  const coin = localStorage.getItem("coin"); //은화뱀 "uroboros"
  const candleKit = localStorage.getItem("candleKit"); //신비한 양초 키트 "mystery"
  const edition = localStorage.getItem("edition"); //혈욕조 "foot"
  const happyMaker = localStorage.getItem("happyMaker"); //해피 메이커 "analgesic"
  const candy = localStorage.getItem("candy"); //노스텔지어 사탕 "nostalgia"
  const isfake = localStorage.getItem("isfake"); //네크로노미콘 "haha"

  //탐라
  const train = localStorage.getItem("train"); //"tamra"
  const trickster = localStorage.getItem("trickster"); //"KC"

  //브라운
  const quizShow = localStorage.getItem("quizShow"); //"tuesday"
  const doll = localStorage.getItem("doll"); //"rabbit"
  const friend = localStorage.getItem("friend"); //"big"

  const [play] = useSound("/sounds/Cat Mew 3.mp3");

  const { confirm: confirmComp } = useContext(ConfirmContext);
  const { alert: alertComp } = useContext(AlertContext);
  const { memo: memoComp } = useContext(MemoContext);

  const [isDragging, setIsDragging] = useState(false);
  const nodeRef = useRef(null);

  const bgImage = trickster === "KC" ? "/images/바다.jpg" : undefined;

  const onWehelpClick = async () => {
    if (isDragging) return;
    const result = await confirmComp(`버튼을 누를까?`);
    return result && onRealhelpClick();
  };

  const onRealhelpClick = async () => {
    const result = await confirmComp(`정말?`);
    return result && onRealRealhelpClick();
  };

  const onRealRealhelpClick = async () => {
    const result = await confirmComp(`진짜로?`);
    return result && onDontClick();
  };

  const onDontClick = async () => {
    await alertComp(`지금은 긴급상황이 아니다...`);
  };

  const onNothingClick = async () => {
    await alertComp(`여긴 확인할 게 없다.`);
  };

  const onCoinClick = async () => {
    await alertComp(`스스로 꼬리를 물고 있는 \n뱀의 그림이 새겨져 있다.`);
  };

  const onBrownBathClick = async () => {
    const result = await confirmComp(`브라운을 욕조에 넣어줄까?`);
    return result && onBrownBathAfter();
  };

  const onBrownBathAfter = async () => {
    localStorage.setItem("friend", "big");
    await alertComp(`인형이 조금 커진 것 같다.`);
    window.location.reload();
  };

  const onBathClick = async () => {
    if (coin === "uroboros" && doll === "rabbit" && !friend) {
      return onBrownBathClick();
    }
    // if (coin === "uroboros" && doll === "rabbit" && friend === "big") {
    //   return onBrownNoBath();
    // }
    await alertComp(
      `[젊음의 욕조-풋 마사지 에디션] \n10년 무상 A/S가 가능하다. `
    );
  };

  const onCandleClick = async () => {
    await alertComp(`[권장 사용 인원: 3인]\n혼자서는 사용할 수 없다.`);
  };

  const onHappyMakerClick = async () => {
    await alertComp(`빠르고 편안한 샷\n당신의 고통과 작별하세요!`);
  };

  const onDollEndClick = async () => {
    await alertComp(`언제나.`);
  };

  const onDollClick = async () => {
    const result = await alertComp(
      `당신의 귀여운 동물 인형이에요. \n언제나 함께 다니며 \n당신을 지켜줄 거예요.`
    );
    return result && onDollEndClick();
  };

  const onCandyClick = async () => {
    const result = await alertComp(
      `따스한 그시절,\n마법의 사탕!\n노스텔지어 캔-디\n사탕을 입에서 굴릴 때\n되살아나는 옛 추억!`
    );
    return result && onResetBtnClick();
  };

  const handleReset = async () => {
    localStorage.clear();
    localStorage.setItem("isLogin", "success");
    navigate("/");
    window.location.reload();
  };

  const onResetBtnClick = async () => {
    const result = await confirmComp(
      `...먹어볼까?\n(진행 상황이 초기화 됩니다)`
    );
    return result && handleReset();
  };

  const onMemoClick = async () => {
    if (isDragging) return;
    await memoComp();
  };

  const handleOnDrag = () => {
    setIsDragging(true); // 드래그 중에는 드래그 state를 true로 전환한다.
  };

  const onTrainClick = async () => {
    const result = await confirmComp(`목포행 기차다.`);
    return result && navigate("/train/mokpo");
  };

  const handleStopDrag = () => {
    // 드롭 후 100ms 후에 드래그 상태를 false로 전환한다.
    setTimeout(() => {
      setIsDragging(false);
    }, 100);
  };

  return (
    <>
      <Background bgImage={bgImage}>
        <IconList>
          {data.map((icon) => {
            return (
              <Draggable
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                nodeRef={nodeRef}
                onDrag={() => handleOnDrag()} // 드래그 시 실행되는 부분
                onStop={handleStopDrag} // 드롭 시 실행되는 부분
                key={icon.name}
              >
                <Icon
                  key={icon.id}
                  onClick={() => {
                    if (isDragging) return; // 드래그 중일 때 클릭 무시
                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                    icon.isModal ? onNothingClick() : navigate(icon.path);
                  }}
                  ref={nodeRef}
                >
                  <Img src={icon.img} />
                  <Name>{icon.name}</Name>
                </Icon>
              </Draggable>
            );
          })}
          <Draggable //메모
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            nodeRef={nodeRef}
            onDrag={() => handleOnDrag()}
            onStop={handleStopDrag}
          >
            <Icon
              onClick={() => {
                onMemoClick();
              }}
              ref={nodeRef}
            >
              <Img src={"/images/교육서.png"} />
              <Name>{"이자헌 조-..."}</Name>
            </Icon>
          </Draggable>
          {weHelp && ( //우리가 도움
            <Draggable
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              nodeRef={nodeRef}
              onDrag={() => handleOnDrag()}
              onStop={handleStopDrag}
            >
              <Icon
                onClick={() => {
                  if (isDragging) return;
                  onWehelpClick();
                }}
                ref={nodeRef}
              >
                <Img src={"/images/redbutton.png"} />
                <Name>{"우리가 도움!"}</Name>
              </Icon>
            </Draggable>
          )}
          {doll && ( //착한친구
            <Draggable
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              nodeRef={nodeRef}
              onDrag={() => handleOnDrag()}
              onStop={handleStopDrag}
            >
              <Icon
                onClick={() => {
                  if (isDragging) return;
                  onDollClick();
                }}
                ref={nodeRef}
              >
                <Img src={"/images/토끼.png"} />
                <Name>{"착한친구"}</Name>
              </Icon>
            </Draggable>
          )}
          {coin && ( //은화뱀
            <Draggable
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              nodeRef={nodeRef}
              onDrag={() => handleOnDrag()}
              onStop={handleStopDrag}
            >
              <Icon
                onClick={() => {
                  if (isDragging) return;
                  onCoinClick();
                }}
                ref={nodeRef}
              >
                <Img src={"/images/coin.png"} />
                <Name>{"은화뱀"}</Name>
              </Icon>
            </Draggable>
          )}
          {candleKit && ( //신비한 양초키트
            <Draggable
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              nodeRef={nodeRef}
              onDrag={() => handleOnDrag()}
              onStop={handleStopDrag}
            >
              <Icon
                onClick={() => {
                  if (isDragging) return;
                  onCandleClick();
                }}
                ref={nodeRef}
              >
                <Img src={"/images/양초.png"} />
                <Name>{`신비한 양초키트`}</Name>
              </Icon>
            </Draggable>
          )}
          {edition && ( //혈욕조
            <Draggable
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              nodeRef={nodeRef}
              onDrag={() => handleOnDrag()}
              onStop={handleStopDrag}
            >
              <Icon
                onClick={() => {
                  if (isDragging) return;
                  onBathClick();
                }}
                ref={nodeRef}
              >
                <Img src={"/images/욕조.png"} />
                <Name>{"혈욕조"}</Name>
              </Icon>
            </Draggable>
          )}
          {happyMaker && ( //해피메이커
            <Draggable
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              nodeRef={nodeRef}
              onDrag={() => handleOnDrag()}
              onStop={handleStopDrag}
            >
              <Icon
                onClick={() => {
                  if (isDragging) return;
                  onHappyMakerClick();
                }}
                ref={nodeRef}
              >
                <Img src={"/images/주사기.png"} />
                <Name>{`해피메이커`}</Name>
              </Icon>
            </Draggable>
          )}
          {candy && ( //노스텔지어 사탕
            <Draggable
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              nodeRef={nodeRef}
              onDrag={() => handleOnDrag()}
              onStop={handleStopDrag}
            >
              <Icon
                onClick={() => {
                  if (isDragging) return;
                  onCandyClick();
                }}
                ref={nodeRef}
              >
                <Img src={"/images/사탕.png"} />
                <Name>{`노스텔지어 사탕`}</Name>
              </Icon>
            </Draggable>
          )}
          {isfake && ( //네크로노미콘
            <Draggable
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              nodeRef={nodeRef}
              onDrag={() => handleOnDrag()}
              onStop={handleStopDrag}
            >
              <Icon
                onClick={() => {
                  if (isDragging) return;
                  play();
                }}
                ref={nodeRef}
              >
                <Img src={"/images/spellbook.png"} />
                <Name>{"Necronomicon"}</Name>
              </Icon>
            </Draggable>
          )}
          {train && ( //지하철
            <Draggable
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              nodeRef={nodeRef}
              onDrag={() => handleOnDrag()}
              onStop={handleStopDrag}
            >
              <Icon
                onClick={() => {
                  if (isDragging) return;
                  onTrainClick();
                }}
              >
                <Img src={"/images/지하철.png"} />
                <Name>{"목포행"}</Name>
              </Icon>
            </Draggable>
          )}
          {quizShow && <></>}
        </IconList>
        <Draggable
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          nodeRef={nodeRef}
          onDrag={() => handleOnDrag()}
          onStop={handleStopDrag}
          bounds="body"
        >
          <PostitContainer ref={nodeRef}>
            <Postit src="/images/포스트잇.png" />
            <PostitText>
              신년 첫 번째 계획: <br /> 1월 2일에 진입할 어둠에서, 무슨 수로
              탈주할지 방법을 찾아내기.
            </PostitText>
          </PostitContainer>
        </Draggable>
      </Background>
    </>
  );
};

export default MainPage;

const Background = styled.div<BackgroundProps>`
  width: 100%;
  min-height: 94vh;
  background-color: #245c8d;

  position: relative;

  ${({ bgImage }) =>
    bgImage && `background: url(${bgImage}) no-repeat center center/cover;`}
`;

const IconList = styled.ul`
  display: flex;
  flex-wrap: wrap; /* 왼쪽 위에서부터 정렬 */
  justify-content: flex-start; /* 왼쪽 정렬 */
  align-content: flex-start; /* 위쪽부터 채우기 */
  flex-direction: column;

  max-height: 100%;
  height: 94vh;
`;

const Icon = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80px;
  height: 85px;
  margin: 8px;

  cursor: pointer;
`;

const Img = styled.img`
  height: 60px;
  width: 60px;
`;

const Name = styled.p`
  display: flex;
  justify-content: center;

  word-break: keep-all;

  font-size: 16px;
  color: white;

  text-align: center;
  margin-top: 2px;

  width: 100%;
`;

const PostitContainer = styled.div`
  position: absolute;

  top: 1vh;
  right: 1vh;

  cursor: default;
`;

const Postit = styled.img`
  width: 220px;
  height: 230px;
`;

const PostitText = styled.p`
  position: absolute;

  width: 150px;
  top: 5vh;
  right: 4vh;

  font-size: 24px;

  font-family: "ANDONG264TTF";

  cursor: default;
`;
