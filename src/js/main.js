// import modules
import { yearCreateor } from "./yearCreateor";
import { Factor } from "./calclatour";
import silverBox from "./silverBox";


//Selector
let carSelect = document.getElementById("carSelect");
let yearSelect = document.getElementById("yearSelect");
let insurance = document.querySelectorAll('input[name="level"]');
let submitBtn = document.getElementById("submit");
let result = document.getElementById("result");
let insuranceClicked = "";
let car = "";
let year = "";
let yearList = [];


// Make years
yearCreateor(yearList);

//event listeners
function eventListener() {
  carSelect.addEventListener("change", findCar);
  yearSelect.addEventListener("change", findYear);
  submitBtn.addEventListener("click", start);
}
eventListener();


//start calclator
function start() {
  //find insurance
  findWhicheinsuranc();
  //check feild value
  if (
    insuranceClicked.length == 0 ||
    car.length == 0 ||
    car == "-انتخاب خودرو-" ||
    year.length == 0 ||
    year == "-انتخاب سال ساخت-"
  ) {
    //show error
    silverBox({
      alertIcon: "error",
      text: "لطفا همه فیلد ها را پر کنید.",
      centerContent: true,
      cancelButton: {
        text: "باشه",
      },
    });
  } 
  //Make factor
  else {
    let factor = new Factor(car, year, insuranceClicked, yearList);
    //result is empty
    result.innerHTML = "";
  }
}

//find incurance
function findWhicheinsuranc() {
  for (let index = 0; index < insurance.length; index++) {
    const element = insurance[index];
    if (element.checked) {
      insuranceClicked = element.value;
      return true;
    }
  }
}
//find car
function findCar(e) {
  let i = e.target.selectedIndex;
  car = e.target.options[i].text;
}


//find year
function findYear(e) {
  let i = e.target.selectedIndex;
  year = e.target.options[i].text;
}
