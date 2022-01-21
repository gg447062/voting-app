const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  'appZy0IcocUjMrryI'
);

const getRecords = async () => {
  const records = await base('SC04 Applications')
    .select({
      view: 'Final List',
      fields: ['Project Name', 'Contact Name', 'Video', 'Call to Adventure'],
    })
    .firstPage(function (err, records) {
      if (err) {
        console.error(err);
        return;
      }

      // records.forEach((record) => {
      //   records.push(record.fields);
      // });
    });
  const data = records.map((record) => {
    return record.fields;
  });
  return data;
};

export { getRecords };
