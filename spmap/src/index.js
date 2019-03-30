
//const express = require('express');
//import mapRouter from './routers/map'
//const app = express()





/* eslint-disable no-irregular-whitespace */

import "../assets/styles/index.scss";



//const puntos = [{"_id":"5ba6b67ab22f62939eba24cc","voucher":"77-SRNP-4","Collection Date":"1977-06-06T06:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Agrius","Herbivore species":"Agrius cingulata","Herbivore subfamily":"Sphinginae","Latitude":"10.83764","Locality":"Area Administrativa","Longitude":"-85.61871","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"},{"_id":"5ba6b67ab22f62939eba24ea","voucher":"78-SRNP-10","Collection Date":"1978-05-20T06:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Xylophanes","Herbivore species":"Xylophanes turbata","Herbivore subfamily":"Macroglossinae","Latitude":"10.80212","Locality":"Vado Nisperal","Longitude":"-85.65372","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"},{"_id":"5ba6b67ab22f62939eba24eb","voucher":"78-SRNP-10.02","Collection Date":"1978-05-20T06:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Xylophanes","Herbivore species":"Xylophanes turbata","Herbivore subfamily":"Macroglossinae","Latitude":"10.80212","Locality":"Vado Nisperal","Longitude":"-85.65372","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"},{"_id":"5ba6b67ab22f62939eba24ec","voucher":"78-SRNP-10.01","Collection Date":"1978-05-20T06:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Xylophanes","Herbivore species":"Xylophanes turbata","Herbivore subfamily":"Macroglossinae","Latitude":"10.80212","Locality":"Vado Nisperal","Longitude":"-85.65372","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"},{"_id":"5ba6b67ab22f62939eba24ee","voucher":"78-SRNP-10.05","Collection Date":"1978-05-20T06:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Xylophanes","Herbivore species":"Xylophanes turbata","Herbivore subfamily":"Macroglossinae","Latitude":"10.80212","Locality":"Vado Nisperal","Longitude":"-85.65372","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"},{"_id":"5ba6b67ab22f62939eba24ef","voucher":"78-SRNP-10.04","Collection Date":"1978-05-20T06:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Xylophanes","Herbivore species":"Xylophanes turbata","Herbivore subfamily":"Macroglossinae","Latitude":"10.80212","Locality":"Vado Nisperal","Longitude":"-85.65372","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"},{"_id":"5ba6b67ab22f62939eba24f0","voucher":"78-SRNP-10.03","Collection Date":"1978-05-20T06:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Xylophanes","Herbivore species":"Xylophanes turbata","Herbivore subfamily":"Macroglossinae","Latitude":"10.80212","Locality":"Vado Nisperal","Longitude":"-85.65372","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"},{"_id":"5ba6b67ab22f62939eba24f1","voucher":"78-SRNP-10.07","Collection Date":"1978-05-20T06:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Xylophanes","Herbivore species":"Xylophanes turbata","Herbivore subfamily":"Macroglossinae","Latitude":"10.80212","Locality":"Vado Nisperal","Longitude":"-85.65372","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"},{"_id":"5ba6b67ab22f62939eba24f2","voucher":"78-SRNP-10.08","Collection Date":"1978-05-20T06:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Xylophanes","Herbivore species":"Xylophanes turbata","Herbivore subfamily":"Macroglossinae","Latitude":"10.80212","Locality":"Vado Nisperal","Longitude":"-85.65372","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"},{"_id":"5ba6b67ab22f62939eba24f3","voucher":"78-SRNP-10.06","Collection Date":"1978-05-20T06:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Xylophanes","Herbivore species":"Xylophanes turbata","Herbivore subfamily":"Macroglossinae","Latitude":"10.80212","Locality":"Vado Nisperal","Longitude":"-85.65372","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"},{"_id":"5ba6b67ab22f62939eba2517","voucher":"78-SRNP-27","Collection Date":"1978-05-26T06:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Xylophanes","Herbivore species":"Xylophanes turbata","Herbivore subfamily":"Macroglossinae","Latitude":"10.79796","Locality":"Vado Poza Salada","Longitude":"-85.64984","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"},{"_id":"5ba6b67ab22f62939eba2673","voucher":"79-SRNP-50","Collection Date":"1979-05-23T05:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Xylophanes","Herbivore species":"Xylophanes turbata","Herbivore subfamily":"Macroglossinae","Latitude":"10.80212","Locality":"Vado Nisperal","Longitude":"-85.65372","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"},{"_id":"5ba6b67ab22f62939eba2691","voucher":"79-SRNP-58.1","Collection Date":"1979-05-30T05:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Xylophanes","Herbivore species":"Xylophanes turbata","Herbivore subfamily":"Macroglossinae","Latitude":"10.83575","Locality":"Sendero Natural","Longitude":"-85.61253","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"},{"_id":"5ba6b67ab22f62939eba2692","voucher":"79-SRNP-58","Collection Date":"1979-05-30T05:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Xylophanes","Herbivore species":"Xylophanes turbata","Herbivore subfamily":"Macroglossinae","Latitude":"10.83575","Locality":"Sendero Natural","Longitude":"-85.61253","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"},{"_id":"5ba6b67ab22f62939eba269a","voucher":"79-SRNP-63a","Collection Date":"1979-06-01T05:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Xylophanes","Herbivore species":"Xylophanes turbata","Herbivore subfamily":"Macroglossinae","Latitude":"10.83575","Locality":"Sendero Natural","Longitude":"-85.61253","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"},{"_id":"5ba6b67ab22f62939eba2cc5","voucher":"81-SRNP-222","Collection Date":"1981-06-10T06:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Xylophanes","Herbivore species":"Xylophanes turbata","Herbivore subfamily":"Macroglossinae","Latitude":"10.85827","Locality":"Cafetal","Longitude":"-85.61089","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"},{"_id":"5ba6b67ab22f62939eba3a1f","voucher":"83-SRNP-484","Collection Date":"1983-06-20T06:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Agrius","Herbivore species":"Agrius cingulata","Herbivore subfamily":"","Latitude":"10.84389","Locality":"Bosque San Emilio","Longitude":"-85.61384","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"},{"_id":"5ba6b67ab22f62939eba3b5f","voucher":"83-SRNP-642","Collection Date":"1983-06-29T06:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Agrius","Herbivore species":"Agrius cingulata","Herbivore subfamily":"","Latitude":"10.85145","Locality":"Bosque Humedo","Longitude":"-85.60801","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"}];

const url = 'http://localhost:3000/api/species/Agrius%20cingulata/Xylophanes%20turbata'

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VhbmFjYXN0ZSIsImEiOiJjamowNzhuYnAwZXU2M2txczhsc21mbDVsIn0.amJMu3O1jfjcbg-B1qC7ww';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/guanacaste/cjpuc9ful00ce2sl3u1pfvezx',
    center: [-85.61365526723557, 10.838261234356153],
    zoom: 9.6
});
map.initialLoaded = false;

map.on('load',function (){

    fetch(url).then(response => {
        response.json().then(json => {
            let data = json;
            let typeCounter = 1;
            //var spName = data[0]["Herbivore species"];
            let markerClasses = [];
            let legend = [];
            data.forEach(function (marker){
                let el = document.createElement('div');
                if (typeof markerClasses[marker["Herbivore species"]] === 'undefined'){
                    markerClasses[marker["Herbivore species"]]="marker"+typeCounter.toString();
                    typeCounter++;
                    legend.push({
                        species:marker["Herbivore species"],
                        color:markerClasses[marker["Herbivore species"]]
                    })
                }
                el.className = "marker "+markerClasses[marker["Herbivore species"]];

                let popup = new mapboxgl.Popup({ offset: 25 })
                    .setHTML("Voucher: "+marker['Voucher']+ "<br> Herbivore species: "+marker["Herbivore species"]);

                new mapboxgl.Marker(el)
                    .setLngLat([marker.Longitude, marker.Latitude])
                    .setPopup(popup)
                    .addTo(map);
            });

            let legendEl = document.getElementById("legend");
            let node = document.createElement("ul");
            let lastUpdate = "Marzo, 2019";

            legendEl.appendChild(node);
            legendEl.innerHTML =`<h3 class="mapLegendTitle">Mapa de sitios de colecta para:</h3>`;
            legend.map (item => {
                let childItem = document.createElement("li");
                childItem.innerHTML = `<div class="marker ${item.color}"></div><span>${item.species}</span>`;
                node.appendChild(childItem);

            });
            legendEl.appendChild(node);
            legendEl.innerHTML +=`<span class="legendFooter">Datos obtenidos del inventario de lepidoptera de ACG por Daiel Janzen y Winnie Hallwachs. Datos actualizados a ${lastUpdate}. <a href=" http://janzen.sas.upenn.edu" target="_blank"> http://janzen.sas.upenn.edu</a> </span>`;
            console.log(markerClasses)
        });
    });
});

map.on("data", () => {
    if (!map.initialLoaded && !map.loaded()) {
        map.removeLayer('toggle-ecosistemas');
        map.removeLayer('toggle-sectores');
        map.removeLayer('toggle-turismo');
        map.removeLayer('toggle-unesco');
        const nav = new mapboxgl.NavigationControl({ showCompass: false });
        map.addControl(nav, "top-left");
        map.initialLoaded = true;
    }
});

/*function createLegen(sp1, sp2){

}*/
