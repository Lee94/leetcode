/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = {};
  for(var i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }

  for(var i = 0; i < nums.length; i++) {
    var tmp = target - nums[i];
    if(map[tmp] && map[tmp] !== i) {
      return [i, map[tmp]];
    }
  }

  return [];
};