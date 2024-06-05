import domGenerator from "dom-generator";
let yaerSelect = document.getElementById("yearSelect");
let result = document.getElementById("result");
let spinner = document.getElementById("spinner");

class showData {
  showYear(year) {
    //check year children
    if (yaerSelect.children.length == 0) {
      yaerSelect.innerHTML += `<option value = "">-انتخاب سال ساخت-</option>`;
    }
    // create years 
    yaerSelect.innerHTML += `<option value = "${year}">-${year}-</option>`;
  }
  // show factor
  showFactor(car, year, insurance, price) {
    //create factor template
    let p = document.createElement("p")
    p.innerText = `ماشین : ${car}      سال ساخت : ${year}       نوع بیمه : ${insurance}         قیمت نهایی بیمه : ${price}`
    setTimeout(() => {
      //show spiner
      spinner.style.display = "block"
    }, 500);
    setTimeout(() => {
      //hide spiner
      spinner.style.display = "none"
      //show factor
      result.append(p)
    },5000)

  }
}

export { showData };
