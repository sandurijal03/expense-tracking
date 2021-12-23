import { FC, useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../context/GlobalState';

const ListItem = styled.li`
  background-color: #fff;
  box-shadow: var(--box-shadow);
  color: #333;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 10px;
  margin: 10px 0;

  .plus {
    border-right: 5px solid #2ecc71;
  }

  .minus {
    border-right: 5px solid #c0392b;
  }

  :hover {
    opacity: 1;
  }
`;

const DeleteButton = styled.button`
  cursor: pointer;
  background-color: #e74c3c;
  border: 0;
  color: black;
  font-size: 20px;
  line-height: 20px;
  padding: 2px 5px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-100%, -50%);
  transition: opacity 0.3s ease;

  :focus {
    outline: 0;
  }
`;

export const moneyFormatter = (num: number) => {
  let p = num.toFixed(2).split('.');
  return (
    'Rs ' +
    p[0]
      .split('')
      .reverse()
      .reduce((acc, num, index) => {
        return num === '-'
          ? acc
          : num + (index && !(index % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
};

interface Transactions {
  amount: number;
  id: string;
  text: string;
}

export const Transaction: FC<{ transaction: Transactions }> = ({
  transaction,
}) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <ListItem className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}
      <span>
        {sign}
        {moneyFormatter(transaction.amount)}
      </span>
      <DeleteButton onClick={() => deleteTransaction(transaction.id)}>
        x
      </DeleteButton>
    </ListItem>
  );
};
