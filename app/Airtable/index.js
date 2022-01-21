const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  'appZy0IcocUjMrryI'
);

const getRecords = async (cb) => {
  await base('SC04 Applications')
    .select({
      view: 'Final List',
      fields: ['Project Name', 'Contact Name', 'Video', 'Call to Adventure'],
    })
    .firstPage(function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
      const applications = [];
      records.forEach((record) => {
        applications.push(record.fields);
      });
      cb(applications);
    });
};

export { getRecords };
