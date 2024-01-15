let array = [2, 6, 12, 7, 22, 35];

function exercise1() {
  let firstVal = array[0];
  console.log(firstVal);
}

function exercise2() {
  let lastVal = array[array.length - 1];
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

function exercise5() {
  let arrLength = array.length;
  console.log(arrLength);
}

function exercise6() {
  let newLength = array.push(5);
  console.log(array[array.length - 1]);
  //the returned value represents the new length
  console.log(newLength);
}

function exercise7() {
  let newLength = array.unshift(5);
  console.log(newLength, array[0]);
  //this value is the same as array.push, it returns the new length
}

function exercise8() {
  let removedElement = array.pop();
  console.log(removedElement, array[array.length - 1]);
  //pop returns the removed value
}

function exercise9() {
  let returnedElement = array.shift();
  console.log(returnedElement, array[0]);
  //shift does the same as pop
}

function exercise10() {
  array.forEach((element) => {
    console.log(element);
  });
}

exercise1();
exercise2();
exercise3();
exercise4();
exercise5();
exercise6();
exercise7();
exercise8();
exercise9();
exercise10();
