import { createContext } from "react";

type Type = {
  memo: () => Promise<boolean>;
};

const MemoContext = createContext<Type>({
  memo: () => new Promise((_, reject) => reject()),
});

export default MemoContext;
