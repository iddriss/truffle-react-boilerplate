export function isNonZeroNumber(_input) {
  return _input !== undefined && _input !== "" && parseFloat(_input) !== 0.0;
}

export function onInputNumberChange(e, f) {
  const re = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;
  if (e.target.value === "" || re.test(e.target.value)) {
    f(e.target.value);
  }
}

function treatAsUTC(date) {
  var result = new Date(Number(date));
  result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
  return result.getTime();
}

export function timestampToNumberOfDay(timestamp) {
  const millisecondePerDay = 24 * 60 * 60 * 1000;
  let now = treatAsUTC(Date.now());
  let future = treatAsUTC(Number(timestamp));

  const dys = Math.ceil((future - now) / millisecondePerDay);
  return dys > 0 ? dys : 0;
}

export function numberOfDaysTimeStamp(days) {
  const millisecondePerDay = 24 * 60 * 60 * 1000;
  const daysTimestamp = Number(days) * millisecondePerDay;
  const finalDate = treatAsUTC(Date.now()) + treatAsUTC(daysTimestamp);
  return new Date(finalDate).getTime();
}

export function numberOfDaysToDateString(days) {
  const timestamp = numberOfDaysTimeStamp(days);
  const date = new Date(timestamp);
  const month = date.toLocaleString("default", {
    month: "long",
  });
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}

export function getPercentage(value, total) {
  return ((Number(value) / Number(total)) * 100).toFixed(1);
}

export const usdFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  notation: "compact",
});

export const genFormatter = new Intl.NumberFormat("en-US", {
  notation: "compact",
});

export const getUSDValue = (ethInLp, ethPrice) => {
  const supply = ethInLp * 2;
  return supply * ethPrice;
};

