import { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

const Wrapper = styled.div`
  margin: 20px;
  width: 300px;
  h3 {
    border-bottom: 1px solid #bbb;
    padding-bottom: 10px;
    margin: 40px 0 10px;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 40px;
`;

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <Wrapper>
      <h3>History</h3>
      <List>
        {transactions.map((transaction: any) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </List>
    </Wrapper>
  );
};

export default TransactionList;
