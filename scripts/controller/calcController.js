class CalcController{

    constructor(){
        
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();

    }

    initialize(){

        
        
        this._dateEl.innerHTML = "01/01/2020";
        this._timeEl.innerHTML = "00:00";

    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(valor){
        this._displayCalcEl.innerHTML= newDate.getDate();
    }

    
    get currentDate(){
        return this._currentDate;
    }

    set currentDate(valor){
        this._currentDate = new Date();
    }
}