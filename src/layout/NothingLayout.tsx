import { Outlet } from "react-router-dom";

import ConfirmDialog from "../components/confirm/ConfirmDialog";
import AlertDialog from "../components/alert/AlertDialog";
import MemoDialog from "../components/memo/MemoDialog";

const NothingLayout = () => {
  return (
    <>
      <ConfirmDialog>
        <AlertDialog>
          <MemoDialog>
            <Outlet />
          </MemoDialog>
        </AlertDialog>
      </ConfirmDialog>
    </>
  );
};

export default NothingLayout;
