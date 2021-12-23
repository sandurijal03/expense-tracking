interface Transaction {
  text: string;
  id: string;
  amount: number;
}

interface InitialState {
  transactions: Transaction[];
  deleteTransaction: (id: string) => any;
  addTransaction: (transaction: Transaction) => any;
}

export const initialState: InitialState = {
  transactions: [],
  deleteTransaction: (id: string) => {},
  addTransaction: (transaction: Transaction) => {},
};

const AppReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction: any) => transaction.id !== action.payload,
        ),
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};

export default AppReducer;
