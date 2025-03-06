import Daydream from "../../components/daydream/Daydream";
import Point from "../../components/daydream/Point";

const PointPage = () => {
  return (
    <>
      <Daydream isLogin={true} component={<Point />} />
    </>
  );
};

export default PointPage;
