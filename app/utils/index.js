export const getPercentage = (a, b, c = 0, stripped = false) => {
  if (a == 0 || b == 0) {
    return '0%';
  }

  const percent = ((100 * a) / b).toFixed(2);
  const digits = percent.toString().split('.');

  if (c != 0) {
    const decimal = parseInt(digits[0]) / 100;
    return decimal * parseInt(c);
  }

  if (stripped) {
    return parseInt(digits[0]);
  } else {
    return digits[1] == '00' ? `${digits[0]}%` : `${percent}%`;
  }
};

export const getFinalList = (list, total, votingPower, asObject = true) => {
  if (asObject) {
    const mappedList = list
      .filter((el) => el && el.votes !== 0)
      .map((el) => {
        const _el = {
          name: el.name,
          votes: getPercentage(el.votes, total, votingPower, true),
        };
        return _el;
      });

    return mappedList;
  } else {
    const mappedList = list
      .filter((el) => el.votes !== 0)
      .map((curr) => {
        return `${curr.name}: ${getPercentage(curr.votes, total)}`;
      })
      .join(', ');
    return mappedList;
  }
};

const urls = [
  { name: 'Boys Club', url: 'https://youtube.com/embed/NtbiE6qXV_c' },
  { name: 'Breaking The Lines', url: 'https://youtube.com/embed/1k-qdSfSb_Q' },
  { name: 'Caféteria DAO', url: 'https://www.youtube.com/embed/exvjqpvyiJw' },
  { name: 'ClimateDAO', url: 'https://www.youtube.com/embed/OIq6DAqzFsM' },
  {
    name: 'COLORS Community DAO',
    url: 'https://www.youtube.com/embed/Hl7JX4B6rqQ',
  },
];

export const getUrl = (url, name) => {
  for (let i = 0; i < 5; i++) {
    const curr = urls[i];
    if (curr.name === name) return curr.url;
  }
  const exp = /youtu\.*be/;
  if (exp.test(url)) {
    if (url.includes('watch')) {
      const id = url.split('=')[1].split('&')[0];
      return `https://www.youtube.com/embed/${id}`;
    } else if (url.includes('tu.be')) {
      const id = url.split('/')[3];
      return `https://www.youtube.com/embed/${id}`;
    } else {
      return url;
    }
  } else {
    return 'https://www.youtube.com/embed/nU21rCWkuJw';
  }
};

const imageUrls = {
  'Boys Club': { url: 'boysclub.jpeg' },
  'Breaking The Lines': { url: 'breakingthelines.jpeg' },
  'Caféteria DAO': { url: 'cafeteria.jpeg' },
  ClimateDAO: { url: 'climate.png' },
  'COLORS Community DAO': { url: 'colors.jpeg' },
  FLOPPY: { url: 'floppy.jpeg' },
  'gmgn Supply DAO': { url: 'gmgn.jpeg' },
  'Grow Your Own Cloud': { url: 'gyoc.jpeg' },
  Impssbl: { url: 'impssbl.jpeg' },
  Kali: { url: 'kali.jpeg' },
  'Metalabel ': { url: 'chip_1_1.png' },
  Mirage: { url: 'mirage.jpeg' },
  Mochi: { url: 'mochi.png' },
  'MUSE DAO': { url: 'muse.jpeg' },
  'Music OS': { url: 'chip_1_1.png' },
  Pentagraph: { url: 'pentagraph.jpeg' },
  'SongADAO!': { url: 'songadao.jpeg' },
  'The Destiny Magi': { url: 'destinymagi.jpeg' },
  'The Sports DAO': { url: 'sportsicon.png' },
  'Thirsty Thirsty': { url: 'thirstythirsy.jpeg' },
  Twali: { url: 'twali.png' },
};

export const getImageURL = (name) => {
  const url = imageUrls[name].url;
  const domainName = 'https://d3c3p3kzkks69a.cloudfront.net';
  return `${domainName}/${url}`;
};
