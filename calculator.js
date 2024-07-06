let button = document.querySelectorAll(".button");
let displaybtn = document.querySelector("p");
let str = "";

let mAddArr = [];

function power(str, str1) {
  display(Math.pow(str, str1));
}
function factorial(no) {
  let fact = 1;
  for (let i = 1; i <= no; i++) {
    fact = fact * i;
  }
  display(fact);
}

function percentage(str) {
  str = eval(str);
  str = str / 100;
  display(str);
}

function display(str) {
  if (str == "NaN") {
    displaybtn.innerText = "Error";
  } else {
    displaybtn.innerText = str;
  }
}

function mAdd(str) {
  mAddArr.push(str);
}

function mSub(str) {
  mAddArr.push(-str);
}

function mRecall(str) {
  let sum = 0;
  for (let i = 0; i < mAddArr.length; i++) {
    sum = sum + Number(mAddArr[i]);
  }
  display(sum);
  mClear(mAddArr);
}

function mClear(str) {
  for (let i = 0; i < mAddArr.length; i++) {
    mAddArr[i] = 0;
  }
}

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    try {
      if (btn.innerText === "=") {
        str = eval(str);
        display(str);
      } else if (btn.innerText === "AC") {
        str = "";
        display(str);
      } else if (btn.innerText === "Back") {
        str = str.slice(0, -1);
        display(str);
      } else if (btn.innerText === "+/-") {
        str = str * -1;
        display(str);
      } else if (btn.innerText === "%") {
        if (str.isEmpty) {
          str = str / 10;
          display(str);
        } else {
          persentage(str);
        }
      } else if (btn.innerText === "x^2") {
        str = power(str, 2);
      } else if (btn.innerText === "x^3") {
        str = power(str, 3);
      } else if (btn.innerText === "10^y") {
        str = power(10, str);
      } else if (btn.innerText === "pi") {
        str = Math.PI;
        display(str);
      } else if (btn.innerText === "x^y") {
        str = power(str, str);
      } else if (btn.innerText === "x!") {
        str = factorial(str);
      } else if (btn.innerText === "m+") {
        mAdd(str);
      } else if (btn.innerText === "mr") {
        mRecall(str);
      } else if (btn.innerText === "mc") {
        mClear(str);
      } else if (btn.innerText === "m-") {
        mSub(str);
      } else {
        str = str + btn.innerText;
        display(str);
      }
    } catch (e) {
      display("Invalid Operation");
    }
  });
});
