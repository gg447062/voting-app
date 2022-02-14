export const getPercentage = (a, b, stripped = false) => {
  if (a == 0 || b == 0) {
    return '0%';
  }

  const percent = ((100 * a) / b).toFixed(2);
  const digits = percent.toString().split('.');

  if (stripped) {
    return parseInt(digits[0]);
  } else {
    return digits[1] == '00' ? `${digits[0]}%` : `${percent}%`;
  }
};

export const getFinalList = (list, total, asObject = true) => {
  if (asObject) {
    const mappedList = list
      .filter((el) => el.votes !== 0)
      .map((el) => {
        const _el = {
          name: el.name,
          votes: getPercentage(el.votes, total, true),
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
