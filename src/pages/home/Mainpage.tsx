import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import Draggable from "react-draggable";
import useSound from "use-sound";

import data from "../../assets/data/icon";
import ConfirmContext from "../../components/confirm/confirmContext";
import AlertContext from "../../components/alert/alertContext";
import MemoContext from "../../components/memo/memoContext";

const MainPage = () => {
  const navigate = useNavigate();
  const weHelp = localStorage.getItem("weHelp");
  const coin = localStorage.getItem("coin");
  const edition = localStorage.getItem("edition");
  const isfake = localStorage.getItem("isfake");
  const train = localStorage.getItem("train");
  // const quizShow = localStorage.getItem("quizShow");

  const [play] = useSound("/sounds/Cat Mew 3.mp3");

  const { confirm: confirmComp } = useContext(ConfirmContext);
  const { alert: alertComp } = useContext(AlertContext);
  const { memo: memoComp } = useContext(MemoContext);

  const [isDragging, setIsDragging] = useState(false);
  const nodeRef = useRef(null);

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
    await alertComp(`딴짓 할 때가 아니야!`);
  };

  const onCoinClick = async () => {
    await alertComp(`스스로 꼬리를 물고 있는 \n뱀의 그림이 새겨져 있다.`);
  };

  const onBathClick = async () => {
    await alertComp(
      `[젊음의 욕조-풋 마사지 에디션] \n10년 무상 A/S가 가능하다. `
    );
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
    <Background>
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
        <Draggable
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          nodeRef={nodeRef}
          onDrag={() => handleOnDrag()} // 드래그 시 실행되는 부분
          onStop={handleStopDrag} // 드롭 시 실행되는 부분
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
        {weHelp && (
          <Draggable
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            nodeRef={nodeRef}
            onDrag={() => handleOnDrag()} // 드래그 시 실행되는 부분
            onStop={handleStopDrag} // 드롭 시 실행되는 부분
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
        {coin && (
          <Draggable
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            nodeRef={nodeRef}
            onDrag={() => handleOnDrag()} // 드래그 시 실행되는 부분
            onStop={handleStopDrag} // 드롭 시 실행되는 부분
          >
            <Icon
              onClick={() => {
                if (isDragging) return;
                onCoinClick();
              }}
              ref={nodeRef}
            >
              <CoinImg src={"/images/coin.png"} />
              <Name>{"은화뱀"}</Name>
            </Icon>
          </Draggable>
        )}
        {edition && (
          <Draggable
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            nodeRef={nodeRef}
            onDrag={() => handleOnDrag()} // 드래그 시 실행되는 부분
            onStop={handleStopDrag} // 드롭 시 실행되는 부분
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
        {isfake && (
          <Draggable
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            nodeRef={nodeRef}
            onDrag={() => handleOnDrag()} // 드래그 시 실행되는 부분
            onStop={handleStopDrag} // 드롭 시 실행되는 부분
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
        {train && (
          <Draggable
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            nodeRef={nodeRef}
            onDrag={() => handleOnDrag()} // 드래그 시 실행되는 부분
            onStop={handleStopDrag} // 드롭 시 실행되는 부분
          >
            <Icon
              onClick={() => {
                if (isDragging) return;
                onTrainClick();
              }}
              ref={nodeRef}
            >
              <Img src={"/images/지하철.png"} />
              <Name>{"목포행"}</Name>
            </Icon>
          </Draggable>
        )}
      </IconList>
    </Background>
  );
};

export default MainPage;

const Background = styled.div`
  background-color: #245c8d;

  width: 100%;
  min-height: 93vh;
`;

const IconList = styled.ul`
  display: flex;
  flex-wrap: wrap; /* 왼쪽 위에서부터 정렬 */
  justify-content: flex-start; /* 왼쪽 정렬 */
  align-content: flex-start; /* 위쪽부터 채우기 */
  flex-direction: column;

  max-height: 100%;
  height: 93vh;
`;

const Icon = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80px;
  height: 80px;
  margin: 8px;

  cursor: pointer;
`;

const Img = styled.img`
  height: 60px;
  width: 60px;
`;

const Name = styled.div`
  display: flex;
  justify-content: center;

  font-size: 16px;
  color: white;

  text-align: center;
  margin-top: 2px;

  width: 100%;
`;

const CoinImg = styled.img`
  height: 55px;
  width: 55px;
  padding-bottom: 5px;
`;
