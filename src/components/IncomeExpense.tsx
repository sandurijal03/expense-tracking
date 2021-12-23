import { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../context/GlobalState';
import { moneyFormatter } from './Transaction';

const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;

  .money {
    font-size: 20px;
    letter-spacing: 1px;
    margin: 5px 0;
  }
`;

const Left = styled.div`
  .plus {
    color: #2ecc71;
  }
`;

const Right = styled.div`
  .minus {
    color: #c0392b;
  }
`;

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts
      .filter((amount) => amount < 0)
      .reduce((acc, item) => (acc += item), 0) * -1;

  return (
    <Wrapper>
      <Left>
        <h3>Income</h3>
        <p className='money plus'>{moneyFormatter(income)}</p>
      </Left>
      <hr />
      <Right>
        <h3>Expense</h3>
        <p className='money minus'>{moneyFormatter(expense)}</p>
      </Right>
    </Wrapper>
  );
};

export default IncomeExpense;
