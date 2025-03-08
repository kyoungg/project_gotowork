import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import Draggable from "react-draggable";

import data from "../../assets/data/icon";
import ConfirmContext from "../../components/confirm/confirmContext";
import AlertContext from "../../components/alert/alertContext";
import MemoContext from "../../components/memo/memoContext";

const MainPage = () => {
  const navigate = useNavigate();
  const weHelp = localStorage.getItem("weHelp");

  const { confirm: confirmComp } = useContext(ConfirmContext);
  const { alert: alertComp } = useContext(AlertContext);
  const { memo: memoComp } = useContext(MemoContext);

  const [isDragging, setIsDragging] = useState(false);
  const nodeRef = useRef(null);

  const onWehelpClick = async () => {
    if (isDragging) return;
    const result = await confirmComp(`정말 누를까?`);
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
    await alertComp(`좋은 생각이 아닌 것 같다...`);
  };

  const onNothingClick = async () => {
    await alertComp(`딴짓 할 때가 아니다!`);
  };

  const onMemoClick = async () => {
    if (isDragging) return;
    await memoComp();
  };

  const handleOnDrag = () => {
    setIsDragging(true); // 드래그 중에는 드래그 state를 true로 전환한다.
  };

  const handleStopDrag = () => {
    // 드롭 후 100ms 후에 드래그 상태를 false로 전환한다.
    setTimeout(() => {
      setIsDragging(false);
    }, 100);
  };

  return (
    <Background>
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
          <Img src={"images/메모.png"} />
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

  width: 80px;
  padding: 5px;

  cursor: pointer;
`;

const Img = styled.img`
  height: 60px;
  width: 60px;
`;

const Name = styled.div`
  display: flex;
  flex-direction: column-reverse;

  font-size: 16px;
  color: white;

  text-align: center;

  width: 100%;
`;
