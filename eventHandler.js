import { NasaObject, SolarObject, ObserverUI, Utility } from './base.js';


export class EventHandeler{

    constructor() {
        this.getNasaSearch = this.getNasaSearch.bind(this);
    }

    getSearchType(){
        var rdbImage = document.getElementById('btnradio1');
        var rdbVid = document.getElementById('btnradio2');
        var rdbAudio = document.getElementById('btnradio3');
    
        if (rdbImage.checked || rdbVid.checked ||rdbAudio.checked){
            if (rdbImage.checked){
                return 'image';
            }
            if (rdbVid.checked){
                return 'video';
            }
            if (rdbAudio.checked){
                return 'audio';
            }
        }
    }

    getNasaSearch(keyword){

    document.getElementById("img").innerHTML = "";

    var mediaType = this.getSearchType();
    const url = `https://images-api.nasa.gov/search?q=${encodeURIComponent(keyword)}&media_type=${mediaType}`;
    const data = Utility.fetchUrlAndReturndata(url);
    console.log("data " + data);
    return data;

    }


    


}