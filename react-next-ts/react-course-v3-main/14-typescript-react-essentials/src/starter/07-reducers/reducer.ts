type UpdateCountAction = {
  type: 'INCREMENT' | 'DECREMENT' | 'RESET';
};

type UpdateStatusAction = {
  type: 'SET_STATUS';
  payload: 'active' | 'inactive';
}

type CounterAction = UpdateCountAction | UpdateStatusAction;

type CounterState = {
  count: number;
  status: string;
};

export const initialState: CounterState = {
  count: 0,
  status: 'pending'
};

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch(action.type) {
    case 'INCREMENT': return { ...state, count: state.count + 1 };
    case 'DECREMENT': return { ...state, count: state.count - 1 };
    case 'RESET': return { ...state, count: 0 };
    case 'SET_STATUS': return { ...state, status: action.payload };
    default: {
      const unhandledAction: never = action;
      throw new Error(`Unhandled action type: ${unhandledAction}`);
    }
  }
};