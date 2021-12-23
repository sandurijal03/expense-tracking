import { useContext, useState } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../context/GlobalState';
import { v4 } from 'uuid';

const Wrapper = styled.div`
  h1 {
    letter-spacing: 1px;
    margin: 0;
    font-size: 1.5rem;
  }
`;

const Form = styled.form`
  label {
    display: inline-block;
    margin: 10px 0;
  }

  input[type='text'],
  input[type='number'] {
    border: 1px solid #dedede;
    border-radius: 2px;
    display: block;
    font-size: 16px;
    padding: 10px;
    width: 100%;
  }
`;

const Button = styled.button`
  cursor: pointer;
  background-color: #39a388;
  box-shadow: var(--box-shadow);
  color: #fff;
  border: 0;
  display: block;
  font-size: 16px;
  margin: 10px 0 30px;
  padding: 10px;
  width: 100%;
  :focus {
    outline: 0;
  }
`;

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(e);

    const newTransaction = {
      id: v4(),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };

  return (
    <Wrapper>
      <h1>Add new Transaction</h1>
      <Form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Label</label>
          <input
            type='text'
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setText(e.target.value)
            }
            placeholder='enter label...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor=''>
            (<strong>-</strong>/<strong>+</strong>)Amount &nbsp; &nbsp;
            [-expense, +income]
          </label>
          <input
            type='number'
            value={amount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAmount(+e.target.value)
            }
            placeholder='enter amount'
          />
        </div>
        <Button>Add transaction</Button>
      </Form>
    </Wrapper>
  );
};

export default AddTransaction;
