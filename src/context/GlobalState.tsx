import { FC, createContext, useReducer } from 'react';
import AppReducer, { initialState } from './AppReducer';

interface Transaction {
  amount: number;
  id: string;
  text: string;
}

export const GlobalContext = createContext(initialState);

interface GlobalProviderProps {
  children: any;
}

export const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTransaction = (id: string) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  };

  const addTransaction = (transaction: Transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
