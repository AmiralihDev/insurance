import { showData } from "./showData"

function yearCreateor(yearList){
    let date = new Date
    //get en year
    let enYear = date.getFullYear()
    //change to fa year
    let FaYear = enYear - 621
    //Make year
    for (let index = 0; index < 21; index++) {
        //make 20years later
        let year = FaYear - index
        let s = new showData
        //show year
        s.showYear(year)
        //add to yearList 
        yearList.push(year)   
    }

}
export {yearCreateor}