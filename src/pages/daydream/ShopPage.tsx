import Daydream from "../../components/daydream/Daydream";
import Shoplist from "../../components/daydream/Shoplist";

const ShopPage = () => {
  return (
    <>
      <Daydream isLogin={true} component={<Shoplist />} />
    </>
  );
};

export default ShopPage;
