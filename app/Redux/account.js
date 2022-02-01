const SET_ACCOUNT = 'SET_ACCOUNT';

export const setAccount = (account) => ({
  type: SET_ACCOUNT,
  account,
});

const initState = { address: null, votingPower: 0 };

const accountReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ACCOUNT:
      return {
        ...state,
        address: action.account.address,
        votingPower: action.account.votingPower,
      };
    default:
      return state;
  }
};

export default accountReducer;
