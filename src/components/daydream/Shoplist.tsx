import styled from "styled-components";

import shopData from "../../assets/data/daydreamshop";

const Shoplist = () => {
  const data = shopData;

  return (
    <Container>
      <Ul>
        {data.map((product) => {
          return (
            <Li>
              - {product.name} : {product.price} p
            </Li>
          );
        })}
      </Ul>
    </Container>
  );
};

export default Shoplist;

const Container = styled.div`
  width: 80%;
  margin: 20px;
  padding-top: 20px;
`;

const Ul = styled.ul``;

const Li = styled.li`
  font-size: 20px;

  padding: 15px 10px;
`;
