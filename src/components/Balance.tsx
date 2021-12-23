import { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../context/GlobalState';
import { moneyFormatter } from './Transaction';

const Wrapper = styled.div`
  h3 {
    border-bottom: 1px solid #bbb;
    padding-bottom: 10px;
    margin: 40px 0 10px;
  }

  h4 {
    margin: 0;
    text-transform: uppercase;
  }
`;

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <Wrapper>
      <h3>Balance</h3>
      <h4>{moneyFormatter(total)}</h4>
    </Wrapper>
  );
};

export default Balance;
