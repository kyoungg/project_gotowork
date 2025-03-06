import Daydream from "../../components/daydream/Daydream";
import Nav from "../../components/daydream/Nav";
import Login from "../../components/daydream/login";

const DaydreamPage = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      {token == "gerong" ? (
        <Daydream isLogin={true} component={<Nav />} />
      ) : (
        <Daydream isLogin={false} component={<Login />} />
      )}
    </>
  );
};

export default DaydreamPage;
