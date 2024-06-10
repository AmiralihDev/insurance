import { showData } from "./showData"

function yearCreateor(yearList){
    let date = new Date().toLocaleDateString('fa-IR-u-nu-latn')
    // get year from date
    let FaYear = date.slice(0,4) 

    //Make year
    for (let index = 0; index < 21; index++) {
        //make 20years later
        let year = parseInt(FaYear) - index
        let s = new showData
        //show year
        s.showYear(year)
        //add to yearList 
        yearList.push(year)   
    }

}
export {yearCreateor}