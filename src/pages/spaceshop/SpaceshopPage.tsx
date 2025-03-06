import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Spaceshop from "../../components/spaceshop/Spaceshop";
import Main from "../../components/spaceshop/main";

const SpaceshopPage = () => {
  return (
    <>
      <Spaceshop component={<Main />} />
    </>
  );
};

export default SpaceshopPage;
