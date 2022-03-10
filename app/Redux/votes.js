const ADD = 'ADD';
const REMOVE = 'REMOVE';
const UPDATE_VOTES = 'UPDATE_VOTES';

export const addToTop10 = (idx, obj) => ({
  type: ADD,
  idx,
  obj,
});

export const removeFromTop10 = (idx) => ({
  type: REMOVE,
  idx,
});

export const updateVotes = (id, votes) => ({
  type: UPDATE_VOTES,
  id,
  votes,
});

const initState = {
  total: 0,
  top10: new Array(10).fill({
    id: -1,
    src: null,
    name: 'empty',
    votes: 0,
  }),
};

const votesReducer = (state = initState, action) => {
  let _top10;
  switch (action.type) {
    case ADD:
      _top10 = state.top10.map((el, i) => {
        return i === parseInt(action.idx) ? action.obj : el;
      });
      return { ...state, top10: _top10 };
    case REMOVE:
      _top10 = state.top10.map((el, i) => {
        return i === parseInt(action.idx) ? null : el;
      });
      return { ...state, top10: _top10 };
    case UPDATE_VOTES:
      _top10 = state.top10.map((el) => {
        return el.id === action.id ? { ...el, votes: action.votes } : el;
      });
      const _total = _top10.reduce(
        (total, current) => (total += current.votes),
        0
      );
      return {
        ...state,
        total: _total,
        top10: _top10,
      };
    default:
      return state;
  }
};

export default votesReducer;
