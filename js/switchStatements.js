function howManydays(month) {
  let days;
  switch (month) {
    case 2:
      days = 28;
      break;
    case 4:
      days = 30;
      break;
    case 6:
      days = 30;
      break;
    case 9:
      days = 30;
      break;
    case 11:
      days = 30;
      break;
    default:
      days = 31;
      break;
  }
  return days;
}

console.log(howManydays(4));

//https://www.codewars.com/kata/572059afc2f4612825000d8a/solutions/javascript
