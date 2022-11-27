let sum = 0;
let res = [];

let runningSum = function (nums) {
  nums.forEach((num, idx, arr) => {
    sum += arr[idx];
    res.push(sum);
  });
  console.log(res);
};

runningSum([3, 1, 2, 10, 1]);
