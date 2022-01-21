// import { getRecords } from '../Airtable/index';
const Airtable = require('airtable');
new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  'appZy0IcocUjMrryI'
);
import axios from 'axios';

axios.defaults.headers[
  'Authorization'
] = `Bearer ${process.env.AIRTABLE_API_KEY}`;

const fullUrl =
  'https://api.airtable.com/v0/appZy0IcocUjMrryI/SC04%20Applications?view=Final+List&fields%5B%5D=Project+Name&fields%5B%5D=Contact+Name&fields%5B%5D=Video&fields%5B%5D=Call+to+Adventure';

const baseUrl =
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
      const { data: records } = await axios.get(baseUrl, {
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

      const applicationsData = records.map((record) => {
        return record.fields;
      });

      dispatch(setRecords([]));
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
