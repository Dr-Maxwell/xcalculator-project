const switchers = document.querySelectorAll(".switcher span");
const display = document.querySelector(".display p");
const btns = document.querySelectorAll(".btns button");
let wipe = true;

switchers.forEach((switcher, index) => {
  switcher.addEventListener("click", (e) => {
    switchers.forEach((sw) => {
      sw.classList.remove("active");
    });
    console.log(index + 1);
    switcher.classList.add("active");
    document.body.classList.remove(...["theme-2", "theme-3"]);
    if (index + 1 !== 1) {
      document.body.classList.add(`theme-${index + 1}`);
    }
  });
});

btns.forEach((btn) => {
  btn.addEventListener("click", calculator);
});

function calculator(e) {
  const val = e.target.innerText;
  try {
    switch (val) {
      case "=":
        const rs = `${eval(display.innerHTML)}`;
        if (rs.includes(".")) {
          display.innerHTML = Number(rs).toFixed(2);
        } else {
          display.innerHTML = rs;
        }
        wipe = true;
        break;
      case "RESET":
        display.innerHTML = "0.00";
        wipe = true;
        break;
      case "DEL":
        const ds = display.innerHTML;
        wipe = true;
        if (ds.length === 1) {
          display.innerHTML = "0.00";
        } else {
          display.innerHTML = ds.substring(0, ds.length - 1);
        }
        break;
      default:
        if (wipe) {
          display.innerHTML = val;
          wipe = false;
        } else {
          display.innerHTML += val;
        }
        break;
    }
  } catch (error) {
    display.innerHTML = "Math Error";
  }
}

//higher order function
//callback -> function supplied as parameter

// console.log([3, 3, 5]);

//primitive type: number(float,int), string, boolean, undefined, null, symbol
//object(complex, compound)--> Date, Array {properties, method}

//method -> function belonging to object

// // function keyword
// function functionaname(sw) {}
// const functionname2 = function (sw) {};
// const functionname3 = (sw1, sw2) => {};

// // const performAction = (e)=>{}
