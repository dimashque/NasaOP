// Utility class for data procesing 
export class Utility {
    // Static method
    static async fetchUrlAndReturndata(url) {
        try{
            
           const response = await fetch(url);
           if (!response.ok){
               throw new Error('Network response was not ok');
       
           }
           const data = await response.json();
           console.log("Data ", data);
           return data;
           
       }
       catch(error){
           console.log("error", error);
       }
    }
}

// Observer Section

export class ObserverUI{

    constructor(uiELement, subject){
        this._uiELementuiELement = uiELement;
        this._subject = subject;

        
    }

    get uiELement(){
        return this._uiELement
    }

    set uiELement(element){
        this._uiELement = element;
    }

    get subject(){
       return Object.prototype.toString.call(this._subject);
    }

    set subject(subject){
        this._subject = subject;
    }

    update(subject){
        // do s
        if (subject instanceof NasaObject ){
            this._uiELement = "<img>",
            console.log(this._subject._data);
            console.log( this._uiELement);
            
        }
        if (subject instanceof SolarObject){
            
        }
    }
}

// Subjct section

/**
 * @interface ISubject
 * @method notifyObserver
 * @returns {void}
 * @method addObserver
 * @param {ObserverUI} observerUi
 * @method removeObserver
 * @param {ObserverUI} observerUi
 */
/**
 * @implements {ISubject}
 */
export class NasaObject {
    
    constructor(data, dataType, ObserverUI){
        this._data = data;
        this._dataType = dataType;
        this._ObserverUI = ObserverUI;
    }

    get data(){
        return this._data;
    }

    set data(value){

        this._data = value;
        this.notifyObserver();
    }

    get dataType(){
        return this._dataType;
    }

    set dataType(dataType){
        this._dataType = dataType;
    }

    get ObserverUI(){
        return this._ObserverUI;
    }

    set ObserverUI(observer){

        this._ObserverUI = observer;
    }

    notifyObserver(){
        this._ObserverUI.update(this);
    }
 }

 export class NasaObjectImages extends NasaObject {
    
 }

 /**
 * @interface ISubject
 * @method notifyObserver
 * @returns {void}
 * @method addObserver
 * @param {ObserverUI} observerUi
 * @method removeObserver
 * @param {ObserverUI} oobserverUi
 */
/**
 * @implements {ISubject}
 */
export class SolarObject {
    
    constructor(data, ObserverUI ){
        this._data = data;
        this._ObserverUI = ObserverUI;
        
    }

    get data(){
        return this._data;
    }

    set data(data){

        this._data = data;
        this.notifyObserver();
    }

    get ObserverUI(){
        return this._ObserverUI;
    }

    set ObserverUI(observer){

        this._ObserverUI = observer;
    }

    notifyObserver(){
        this._ObserverUI.update(this);
    }

    
 }