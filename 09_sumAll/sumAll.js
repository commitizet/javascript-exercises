const sumAll = function (...nums) {
  if (
    nums.some(
      (num) =>
        typeof num !== "number" || num < 0 || (num + "").split("").includes(".")
    )
  )
    return "ERROR";

  let arr = [];
  if (nums[0] > nums[1]) {
    for (let i = nums[0]; i >= nums[1]; i--) {
      arr.push(i);
    }
  } else {
    for (let i = nums[0]; i <= nums[1]; i++) {
      arr.push(i);
    }
  }

  return arr.reduce((acc, curr) => acc + curr, 0);
};

// Do not edit below this line
module.exports = sumAll;