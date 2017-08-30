/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let result = "";
  let p =0;
  for (let i = 0; i < s.length; i++) {
    if(s.substring(p, i).indexOf(s[i]) === -1) {
      if(s.substring(p, i+1).length > result.length) {
        result = s.substring(p, i+1);
      }
    } else {
      p = p + s.substring(p, i).indexOf(s[i]) + 1;
    }
  }

  return result.length;
};
