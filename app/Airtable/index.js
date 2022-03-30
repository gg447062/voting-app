import axios from 'axios';

axios.defaults.headers[
  'Authorization'
] = `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`;

const applicationsBaseURL =
  'https://api.airtable.com/v0/appZy0IcocUjMrryI/SC04%20Applications';

export const getRecords = async () => {
  const { data: res } = await axios.get(applicationsBaseURL, {
    params: {
      view: 'Final List',
      fields: ['Project Name', 'Contact Name', 'Video', 'Call to Adventure'],
      maxRecords: 30,
    },
  });

  const fields = res.records.map((record) => {
    const obj = { ...record.fields, inTop10: false };
    return obj;
  });

  return fields;
};
