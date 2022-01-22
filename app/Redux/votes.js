const ADD_VOTE = 'ADD_VOTE';

export const addVote = (vote) => ({
  type: ADD_VOTE,
  vote,
});

const initState = { votes: [] };

const votesReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default votesReducer;
