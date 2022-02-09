import axios from 'axios';

axios.defaults.headers[
  'Authorization'
] = `Bearer ${process.env.AIRTABLE_API_KEY}`;

const applicationsBaseURL =
  'https://api.airtable.com/v0/appZy0IcocUjMrryI/SC04%20Applications';

const votesBaseURL =
  'https://api.airtable.com/v0/appZy0IcocUjMrryI/Votes%20Test';

export const getRecords = async () => {
  const { data: res } = await axios.get(applicationsBaseURL, {
    params: {
      view: 'Final List',
      fields: ['Project Name', 'Contact Name', 'Video', 'Call to Adventure'],
    },
  });

  const fields = res.records.map((record) => {
    return record.fields;
  });

  return fields;
};

export const getVoter = async (id) => {
  const { data: res } = await axios.get(votesBaseURL, {
    params: {
      view: 'Main',
      fields: ['Voter ID', 'Voted'],
    },
  });

  const voter = res.records.filter(
    (record) => record.fields['Voter ID'].toLowerCase() == id.toLowerCase()
  )[0];

  return voter;
};

export const vote = async (id, votes) => {
  try {
    const { data } = await axios.patch(`${votesBaseURL}/${id}`, {
      fields: {
        Voted: 'yes',
        Votes: votes,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const newVote = async (address, votingPower, votes) => {
  try {
    const { data } = await axios.post(votesBaseURL, {
      fields: {
        'Voter ID': address,
        'Voting Power': votingPower,
        Voted: 'yes',
        Votes: votes,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
