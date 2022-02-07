import { getRecords } from '../Airtable/index';

const SET_APPLICATIONS = 'SET_APPLICATIONS';
const SET_CURRENT = 'SET_CURRENT';

const setApplications = (records) => ({
  type: SET_APPLICATIONS,
  records,
});

export const setCurrent = (index) => ({
  type: SET_CURRENT,
  index,
});

export const fetchRecords = () => {
  return async (dispatch) => {
    try {
      const applicationsData = await getRecords();

      dispatch(setApplications(applicationsData));
    } catch (error) {
      console.log(error);
    }
  };
};

const initState = { all: [], current: 0 };

const applicationsReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_APPLICATIONS:
      return { ...state, all: action.records };
    case SET_CURRENT:
      return { ...state, current: action.index };
    default:
      return state;
  }
};

export default applicationsReducer;
