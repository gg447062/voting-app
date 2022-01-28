const INIT_VOTES = 'INIT_VOTES';
const UPDATE_VOTES = 'UPDATE_VOTES';

export const setInitialVotes = (votes, list) => ({
  type: INIT_VOTES,
  votes,
  list,
});

export const updateVotes = (id, votes) => ({
  type: UPDATE_VOTES,
  id,
  votes,
});

const initState = { available: 0, used: 0, votingPower: 0, list: [] };

const votesReducer = (state = initState, action) => {
  switch (action.type) {
    case INIT_VOTES:
      return {
        ...state,
        available: action.votes,
        votingPower: action.votes,
        list: action.list,
      };

    case UPDATE_VOTES:
      const _list = [...state.list];
      _list[action.id].votes = action.votes;
      const total = _list.reduce((total, id) => {
        return (total += id.votes);
      }, 0);
      return {
        ...state,
        available: state.votingPower - total,
        used: total,
        list: _list,
      };
    default:
      return state;
  }
};

export default votesReducer;
