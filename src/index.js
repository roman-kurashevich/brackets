module.exports = function check(str, bracketsConfig) {

let arr = str.split("");
if (arr.length % 2) return false;
else {
  if (arr.lengt === 2) {
    for (let x = 0; x < bracketsConfig.length; x++) {
      if ((bracketsConfig[x][0] == arr[0]) && (bracketsConfig[x][1] == arr[1])) {
        return true;
      } else return false;
    }
  } else {

    for (let i = 0; i < arr.length; i++) {
      if (arr.length === 2) {
        for (let x = 0; x < bracketsConfig.length; x++) {
          if ((bracketsConfig[x][0] == arr[0]) && (bracketsConfig[x][1] == arr[1])) {
            return true;
          }
        }
      } else {
        for (let x = 0; x < bracketsConfig.length; x++) {
          if ((bracketsConfig[x][0] == arr[i]) && (bracketsConfig[x][1] == arr[i+1])) {
            arr.splice(i, 2);
            i = 0;
            break;
          }
        }
      }

    }
    if (arr.join("") == '') return true
    else return false
  }



}

}
