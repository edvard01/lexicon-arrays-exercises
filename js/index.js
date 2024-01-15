const array = [2, 6, 12, 7, 22, 35];

function exercise1() {
  let firstVal = array[0];
  console.log(firstVal);
}

function exercise2() {
  let lastVal = array[-1];
  console.log(lastVal);
}

function exercise3() {
  let fourthVal = array[3];
  console.log(fourthVal);
}

function exercise4() {
  let secondVal = array[1];
  let fifthVal = array[4];

  let newArray = [secondVal, fifthVal];

  console.log(newArray[0], newArray[1]);
}
