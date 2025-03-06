import Daydream from "../../components/daydream/Daydream";
import Nav from "../../components/daydream/Nav";

const DaydreamPage = () => {
  return (
    <>
      <Daydream isLogin={true} component={<Nav />} />
    </>
  );
};

export default DaydreamPage;
