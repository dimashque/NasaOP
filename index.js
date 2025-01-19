import { NasaObject, SolarObject, ObserverUI, Utility } from './base.js';
import { EventHandeler } from './eventHandler.js';


const eventHandler = new EventHandeler();
const button = document.getElementById('button-addon2');
var nasaSubject = new NasaObject();
var solarSubject = new SolarObject();
var observer = new ObserverUI();


// Attach the event handler to the button
button.addEventListener('click', function() {
    const keyword = document.getElementById('input').value
    
    nasaSubject.ObserverUI = observer;
    observer.subject = nasaSubject;

    nasaSubject.data = eventHandler.getNasaSearch(keyword); // Call the method with the keyword

});