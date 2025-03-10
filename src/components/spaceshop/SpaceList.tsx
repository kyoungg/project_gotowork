import styled from "styled-components";
import { useEffect, useState } from "react";

import shopData from "../../assets/data/spaceshop";
import { useNavigate } from "react-router-dom";

interface ProductType {
  id: string;
  name: string;
  price: number;
  selected: boolean;
}

const SpaceList = () => {
  const [payList, setPayList] = useState<ProductType[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const total = payList.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  }, [payList]);

  const handleAddToCart = (product: ProductType) => {
    setPayList((prev) => {
      if (prev.find((item) => item.id === product.id)) return prev; // 중복 방지
      console.log(payList);
      return [...prev, product];
    });
  };

  const handleRemoveFromCart = (id: string) => {
    setPayList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSubmit = () => {
    if (payList.find((item) => item.id === "article04")) {
      localStorage.setItem("weHelp", "change");
    } //우리가 도움!
    if (payList.find((item) => item.id === "article05")) {
      localStorage.setItem("coin", "uroboros");
    } //은화뱀
    if (payList.find((item) => item.id === "article06")) {
      localStorage.setItem("candleKit", "mystery");
    } //신비한 양초 키트
    if (payList.find((item) => item.id === "article08")) {
      localStorage.setItem("edition", "foot");
    } //혈욕조
    if (payList.find((item) => item.id === "article09")) {
      localStorage.setItem("happyMaker", "analgesic");
    } //해피 메이커
    if (payList.find((item) => item.id === "article10")) {
      localStorage.setItem("candy", "nostalgia");
    } //노스텔지어 사탕
    if (payList.find((item) => item.id === "article12")) {
      localStorage.setItem("isfake", "haha");
    } //네크로노미콘
    return navigate("/spaceshop/delivery");
  };

  return (
    <Background>
      <Container>
        <Top>
          <Left>
            <Title>물건 목록</Title>
            <Ul>
              {shopData.map((product) => {
                return (
                  <Li
                    key={product.id}
                    id={product.id}
                    onClick={() => handleAddToCart(product)}
                  >
                    {product.name} - W{product.price.toLocaleString("ko-KR")}
                  </Li>
                );
              })}
            </Ul>
          </Left>
          <Right>
            <CartList>
              <Title>장바구니</Title>
              <Ul>
                {payList.map((product) => {
                  return (
                    <Li
                      key={product.id}
                      onClick={() => handleRemoveFromCart(product.id)}
                    >
                      {product.name} - W{product.price.toLocaleString("ko-KR")}
                    </Li>
                  );
                })}
              </Ul>
            </CartList>
            <Viptext>
              <P>정말 1억 이상 사면 20% 할인!</P>
              <P>우주 쇼핑몰 VIP 된다!</P>
            </Viptext>
          </Right>
        </Top>
        <Bottom>
          <Price>
            = W{totalPrice.toLocaleString("ko-KR")}
            {totalPrice >= 100000000 && (
              <DiscountPrice>
                ※할인했다!※ : W
                {Math.floor(totalPrice * 0.8).toLocaleString("ko-KR")}
              </DiscountPrice>
            )}
          </Price>
          <PayBtn onClick={handleSubmit}>물건 산다</PayBtn>
        </Bottom>
      </Container>
    </Background>
  );
};

export default SpaceList;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(#ff2323, #018b1a, #8100e3);

  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: white;

  width: 90%;
  height: 100%;
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  width: 95%;
  height: 65%;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 48%;
  height: 100%;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  width: 50%;
  height: 100%;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  overflow-y: auto;
`;

const Li = styled.li`
  padding: 15px 10px;
  font-size: 24px;

  cursor: pointer;
`;

const Bottom = styled.div`
  height: 27%;
  width: 95%;
  margin-top: 15px;

  border: solid black 3px;

  font-size: 36px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 36px;
  padding-bottom: 7px;
`;

const P = styled.p`
  font-size: 21px;
  color: #ff0000;
`;

const Viptext = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin-top: 5px;
`;

const CartList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  overflow-y: auto;
`;

const Price = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50%;
`;

const DiscountPrice = styled.div`
  color: #ff0000;
`;

const PayBtn = styled.button`
  width: 220px;
  height: 60px;

  font-size: 36px;

  background-color: #44ff00;
  border: none;
`;
