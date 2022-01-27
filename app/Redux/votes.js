const SET_VOTES = 'SET_VOTES';
const ADD_VOTES = 'ADD_VOTES';

export const setVotes = (votes) => ({
  type: SET_VOTES,
  votes,
});

export const addVotes = (votes) => ({
  type: ADD_VOTES,
  votes,
});

const initState = { available: 20, used: 0 };

const votesReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_VOTES:
      return { ...state, available: action.votes };
    case ADD_VOTES:
      return {
        ...state,
        available: state.available - action.votes,
        used: state.used + action.votes,
      };
    default:
      return state;
  }
};

export default votesReducer;
