const SET_ACCOUNT = 'SET_ACCOUNT';

export const setAccount = (id, address, votingPower) => ({
  type: SET_ACCOUNT,
  id,
  address,
  votingPower,
});

const initState = { id: null, address: null, votingPower: 0 };

const accountReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ACCOUNT:
      return {
        ...state,
        id: action.id,
        address: action.address,
        votingPower: action.votingPower,
      };
    default:
      return state;
  }
};

export default accountReducer;
