const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function generateRandomTimestamp(offset: number) {
  const todaysTimestamp = Date.now();
  const lowerLimitTimestamp = todaysTimestamp - offset;
  return Math.floor(offset * Math.random() + lowerLimitTimestamp);
}

export { monthNames, generateRandomTimestamp };
