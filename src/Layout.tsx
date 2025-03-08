import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import ConfirmDialog from "./components/confirm/ConfirmDialog";
import AlertDialog from "./components/alert/AlertDialog";
import MemoDialog from "./components/memo/MemoDialog";

const Layout = () => {
  return (
    <ConfirmDialog>
      <AlertDialog>
        <MemoDialog>
          <Outlet />
          <Footer />
        </MemoDialog>
      </AlertDialog>
    </ConfirmDialog>
  );
};

export default Layout;
