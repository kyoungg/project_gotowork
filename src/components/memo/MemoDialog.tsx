import { useState } from "react";
import Memo from "./Memo";
import MemoContext from "./memoContext";

type MemoState = {
  onClickCancel: () => void;
};

const MemoDialog = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<MemoState>();

  const memo = (): Promise<boolean> => {
    return new Promise((resolve) => {
      setState({
        onClickCancel: () => {
          setState(undefined);
          resolve(false);
        },
      });
    });
  };

  return (
    <MemoContext.Provider value={{ memo }}>
      {children}
      {state && <Memo onClickCancel={state.onClickCancel} />}
    </MemoContext.Provider>
  );
};

export default MemoDialog;
