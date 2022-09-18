const findElement = (check, arrCheck) => {
  if (arrCheck.length == 1) {
    if (check === arrCheck[0]) return true;
    return false;
  }
  const cutNumber = Math.floor(arrCheck.length / 2);
  const rightArr = arrCheck.splice(cutNumber);
  if (check == rightArr[0]) return true;
  if (check < rightArr[0]) {
    return findElement(check, arrCheck);
  }
  return findElement(check, rightArr);
};
let arr = [3, 5, 7, 12, 17, 24];
console.log(findElement(1, arr));
