const addDays = require("date-fns/addDays");

const days = (days) => {
  const date = addDays(new Date(2020, 8, 22), day);
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
};

module.exports = days;
