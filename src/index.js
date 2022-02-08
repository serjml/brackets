module.exports = function check(str, arr) {
  let arr2 = arr.map(el => el.join(''))

  for (let i = 0; i < arr.length; i){
    if (str.includes(arr2[i])){
      str = str.replace(arr2[i],'');
      i = 0;
    } else {
      i++;
    } 
  }

  if (str.length) {
    return false
  } else {
    return true
  }
}
