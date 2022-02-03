const APPROVE = 'APPROVE';
const UPDATE_VOTES = 'UPDATE_VOTES';

export const approve = (obj) => ({
  type: APPROVE,
  obj,
});

export const updateVotes = (id, votes) => ({
  type: UPDATE_VOTES,
  id,
  votes,
});

const initState = { total: 0, approved: [] };

const votesReducer = (state = initState, action) => {
  switch (action.type) {
    case APPROVE:
      return { ...state, approved: [...state.approved, action.obj] };
    case UPDATE_VOTES:
      const _approved = state.approved.map((el) => {
        return el.id === action.id ? { ...el, votes: action.votes } : el;
      });
      const _total = _approved.reduce(
        (total, current) => (total += current.votes),
        0
      );
      return {
        ...state,
        total: _total,
        approved: _approved,
      };
    default:
      return state;
  }
};

export default votesReducer;
