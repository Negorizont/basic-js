module.exports = function getSeason(date) {
  if(!date) return "Unable to determine the time of year!";
  if(!date.getTime()) throw new Error();

  let month = date.getMonth() + 1;
  if(month === 12 || month < 3)
    return "winter";
  if(month >= 3 && month < 6)
    return "spring";
  if(month >= 6 && month < 9)
    return "summer";
  if(month >= 9 && month < 12)
    return "autumn";
};
