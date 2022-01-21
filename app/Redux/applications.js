import axios from 'axios';
import base from '../Airtable/index';

axios.defaults.headers[
  'Authorization'
] = `Bearer ${process.env.AIRTABLE_API_KEY}`;

axios.defaults.baseURL =
  'https://api.airtable.com/v0/appZy0IcocUjMrryI/SC04%20Applications';

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
      const { data: res } = await axios.get('/', {
        params: {
          view: 'Final List',
          fields: [
            'Project Name',
            'Contact Name',
            'Video',
            'Call to Adventure',
          ],
        },
      });

      const applicationsData = res.records.map((record) => {
        return record.fields;
      });

      dispatch(setRecords(applicationsData));
    } catch (error) {
      console.log(error);
    }
  };
};

const initState = { all: [], current: 0 };

const applicationsReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_RECORDS:
      return { ...state, all: action.records };
    case SET_CURRENT:
      return { ...state, current: action.index };
    default:
      return state;
  }
};

export default applicationsReducer;
