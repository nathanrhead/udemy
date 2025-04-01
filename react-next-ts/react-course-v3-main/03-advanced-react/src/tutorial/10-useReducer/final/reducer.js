import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions';
import { data } from '../../../data';

const reducer = (state, action) => {
  if (action?.type && action.type !== CLEAR_LIST && action.type !== RESET_LIST && action.type !== REMOVE_ITEM) throw new Error(`No matching "${action.type}" action type`);
  if (!action?.type) throw new Error('No action type provided');
  
  return (
    action.type === CLEAR_LIST ? { ...state, people: [] } : 
    action.type === RESET_LIST ? { ...state, people: data } : 
    action.type === REMOVE_ITEM ? { ...state, people: state.people.filter(person => person.id !== action.payload.id) } : 
    state
  );
};

export default reducer;
