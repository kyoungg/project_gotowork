import { useState } from "react";
import Alert from "./Alert";
import AlertContext from "./alertContext";

type AlertState = {
  message: string;
  onClickOK: () => void;
  onClickCancel: () => void;
};

const AlertDialog = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<AlertState>();

  const alert = (message?: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setState({
        message: message ?? "",
        onClickOK: () => {
          setState(undefined);
          resolve(true);
        },
        onClickCancel: () => {
          setState(undefined);
          resolve(false);
        },
      });
    });
  };

  return (
    <AlertContext.Provider value={{ alert }}>
      {children}
      {state && (
        <Alert
          message={state.message}
          onClickOK={state.onClickOK}
          onClickCancel={state.onClickCancel}
        />
      )}
    </AlertContext.Provider>
  );
};

export default AlertDialog;
