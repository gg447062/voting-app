const ADD_TO_TOP10 = 'ADD_TO_TOP10';
const REMOVE_FROM_TOP10 = 'REMOVE_FROM_TOP10';
const UPDATE_VOTES = 'UPDATE_VOTES';
const ADD_COMMENT = 'ADD_COMMENT';

export const addToTop10 = (idx, obj) => ({
  type: ADD_TO_TOP10,
  idx,
  obj,
});

export const removeFromTop10 = (idx) => ({
  type: REMOVE_FROM_TOP10,
  idx,
});

export const updateVotes = (id, votes) => ({
  type: UPDATE_VOTES,
  id,
  votes,
});

export const addComment = (id, comments) => ({
  type: ADD_COMMENT,
  id,
  comments,
});

const initState = {
  total: 0,
  votingPower: 100,
  top10: [],
};

const votesReducer = (state = initState, action) => {
  let _top10;

  switch (action.type) {
    case ADD_TO_TOP10:
      return { ...state, top10: [...state.top10, action.obj] };
    case REMOVE_FROM_TOP10:
      _top10 = state.top10
        .map((el, i) => {
          return i === parseInt(action.idx) ? 0 : el;
        })
        .filter((el) => el !== 0);
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
    case ADD_COMMENT:
      _top10 = state.top10.map((el) => {
        return el.id === action.id ? { ...el, comments: action.comments } : el;
      });
      return {
        ...state,
        top10: _top10,
      };

    default:
      return state;
  }
};

export default votesReducer;
