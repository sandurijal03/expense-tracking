import styled from 'styled-components';

import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import { GlobalProvider } from './context/GlobalState';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Container = styled.div`
  margin: 30px auto;
  width: 350px;

  @media (max-width: 320px) {
    width: 300px;
  }
`;

const Main = () => {
  return (
    <Wrapper>
      <GlobalProvider>
        <Header title='Expense Tracker' />
        <Container>
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </Container>
      </GlobalProvider>
    </Wrapper>
  );
};

export default Main;
