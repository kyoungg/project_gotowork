import { Outlet } from "react-router-dom";

import ConfirmDialog from "../components/confirm/ConfirmDialog";
import AlertDialog from "../components/alert/AlertDialog";
import MemoDialog from "../components/memo/MemoDialog";
import styled from "styled-components";

const NothingLayout = () => {
  const highSchool = localStorage.getItem("Qterw-B-191");

  return (
    <>
      {highSchool === "hangman" ? (
        <Highschool>
          <ConfirmDialog>
            <AlertDialog>
              <MemoDialog>
                <Outlet />
              </MemoDialog>
            </AlertDialog>
          </ConfirmDialog>
        </Highschool>
      ) : (
        <ConfirmDialog>
          <AlertDialog>
            <MemoDialog>
              <Outlet />
            </MemoDialog>
          </AlertDialog>
        </ConfirmDialog>
      )}
    </>
  );
};

export default NothingLayout;

const Highschool = styled.div`
  font-family: "HakgyoansimDunggeunmisoTTF-R";

  & input,
  button,
  textarea {
    font-family: "HakgyoansimDunggeunmisoTTF-R";
  }
`;
