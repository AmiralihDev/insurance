import { showData } from "./showData";
class Factor {
  constructor(car, year, insurance, yearList) {
    let isYear = false;
    let defaultPrice = 0;
    let price = 0;
    let yearIndex = 0;

    //check year list and year select
    for (let index = 0; index < yearList.length; index++) {
      const element = yearList[index];
      if (year == `-${element}-`) {
        yearIndex = index;
        isYear = true;
        year = element;
        break;
        
      }
    }
    if (isYear) {
      //check car and set base price
      switch (car) {
        case "-اپتیما-":
          defaultPrice = 2_000_000;
          car = "اپتیما";
          break;
        case "-پورشه-":
          defaultPrice = 4_000_000;
          car = "پورشه";
          break;
        case "-پراید-":
          defaultPrice = 1_000_000;
          car = "پراید";
          break;
      }
      //check insurance and add to base price
      switch (insurance) {
        case "advance":
          defaultPrice *= 1.5;
          insurance = "شخص ثالث و بدنه";
          break;
        case "static":
          defaultPrice *= 1.2;
          insurance = "شخص ثالث ";
          break;
      }
      //check year index
      if (yearIndex == 0) {
        yearIndex = 1;
      } else {
        yearIndex += 1;
      }
      //Make price
      price = defaultPrice * yearIndex;
      let i = new showData();
      //show factor
      i.showFactor(car, year, insurance, price);
    }
  }
}

export { Factor };
