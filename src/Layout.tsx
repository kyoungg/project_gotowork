import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import ConfirmDialog from "./components/confirm/ConfirmDialog";

const Layout = () => {
  return (
    <ConfirmDialog>
      <Outlet />
      <Footer />
    </ConfirmDialog>
  );
};

export default Layout;
