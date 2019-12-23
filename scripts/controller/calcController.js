class CalcController{

    constructor(){

        this._displayCalc = "0";
        this_currentDate;

    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(valor){
        this._displayCalc = valor;
    }

    
    get dataAtual(){
        return this_currentDate;
    }

    set dataAtual(valor){
        this_currentDate = valor;
    }
}