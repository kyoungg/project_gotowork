import { createContext } from "react";

type Type = {
  alert: (message?: string) => Promise<boolean>;
};

const AlertContext = createContext<Type>({
  alert: () => new Promise((_, reject) => reject()),
});

export default AlertContext;
