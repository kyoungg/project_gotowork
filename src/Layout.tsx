import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import ConfirmDialog from "./components/confirm/ConfirmDialog";
import AlertDialog from "./components/alert/AlertDialog";

const Layout = () => {
  return (
    <ConfirmDialog>
      <AlertDialog>
        <Outlet />
        <Footer />
      </AlertDialog>
    </ConfirmDialog>
  );
};

export default Layout;
