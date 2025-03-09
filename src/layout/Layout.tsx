import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import ConfirmDialog from "../components/confirm/ConfirmDialog";
import AlertDialog from "../components/alert/AlertDialog";
import MemoDialog from "../components/memo/MemoDialog";
import styled from "styled-components";

const Layout = () => {
  const highSchool = localStorage.getItem("Qterw-B-191");

  return (
    <>
      {highSchool === "hangman" ? (
        <Highschool>
          <ConfirmDialog>
            <AlertDialog>
              <MemoDialog>
                <Outlet />
                <Footer />
              </MemoDialog>
            </AlertDialog>
          </ConfirmDialog>
        </Highschool>
      ) : (
        <ConfirmDialog>
          <AlertDialog>
            <MemoDialog>
              <Outlet />
              <Footer />
            </MemoDialog>
          </AlertDialog>
        </ConfirmDialog>
      )}
    </>
  );
};

export default Layout;

const Highschool = styled.div`
  font-family: "HakgyoansimDunggeunmisoTTF-R";

  & input,
  button,
  textarea {
    font-family: "HakgyoansimDunggeunmisoTTF-R";
  }
`;
