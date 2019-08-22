

document.getElementById('submit').addEventListener('click', calculate)

function calculate(e){
  let numberOne = document.getElementById('number-one')
  let numberTwo = document.getElementById('number-two')
  
  var nm1 = sort(numberOne.value);
  var nm2 = sort(numberTwo.value);

  var addition = awesome(nm1, nm2);
  var header = document.getElementsByTagName('h1')[0];
  header.textContent = "Result is: " + addition;
}


// Implementation goes here

function awesome (num1Arr, num2Arr) {

  let total = new Array(), arrLen = null;

  if(num1Arr.length > num2Arr.length) {
    arrLen = num1Arr.length;
    let diffrence = num1Arr.length - num2Arr.length;
    for (let i = 0; i < diffrence; i++) {
      num2Arr.unshift(0)
    }
  }
  else if (num1Arr.length < num2Arr.length) {
    arrLen = num2Arr.length;
    let diffrence = num2Arr.length - num1Arr.length;

    for (let i = 0; i < diffrence; i++) {
      num1Arr.unshift(0)
    }
  }
  else {
    arrLen = num2Arr.length
  }

  let temp = 0;
  for (let i = arrLen - 1; i >= 0; i--) {
    let add = num1Arr[i] + num2Arr[i];
    add = add + temp

    if (add > 10) {
      temp = 1
      total.unshift(add-10)
    }
    else if (add === 10) {
      temp = 1
      total.unshift(0)
    }
    else {
      temp = 0
      total.unshift(add)
    }
  }

  if (temp > 0) { total.unshift(temp) }

  return total.join('');
}    


function sort(num) {
  let arr = [];
  for (let i = 0; i < num.length; i++) {
    arr.push(parseInt(num.charAt(i)))
  }

  return arr;
}
