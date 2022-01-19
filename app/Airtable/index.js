const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  'appZy0IcocUjMrryI'
);

const getRecords = () => {
  base('SC04 Applications')
    .select({
      view: 'Final 75',
      fields: ['Project Name', 'Contact Name', 'Video', 'Call to Adventure'],
    })
    .firstPage(function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log('Retrieved', record);
      });
    });
};

export { getRecords };
