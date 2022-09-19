function narcissistic(value) {
  const length = value.toString().length;
  const arrNumber = [...value.toString().split("")];
  let sum = 0;
  for (let i = 0; i < arrNumber.length; i++) {
    sum += Number(arrNumber[i]) ** length;
  }
  return sum === value ? true : false;
}
console.log(narcissistic(153));
