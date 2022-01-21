import { getRecords } from '../Airtable/index';

const SET_RECORDS = 'SET_RECORDS';
const SET_CURRENT = 'SET_CURRENT';

export const setRecords = (records) => ({
  type: SET_RECORDS,
  records,
});

export const setCurrent = (index) => ({
  type: SET_CURRENT,
  index,
});

export const fetchRecords = () => {
  return async (dispatch) => {
    try {
      const records = await getRecords();
      dispatch(setRecords(records));
    } catch (error) {
      console.log(error);
    }
  };
};

const initState = { all: [], current: {} };

const applicationsReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_RECORDS:
      return { ...state, all: action.records };
    case SET_CURRENT:
      return { ...state, current: all[action.index] };
    default:
      return state;
  }
};

export default applicationsReducer;
