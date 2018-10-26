
//import express from 'express'
//import mapRouter from './routers/map'
//const app = express()





/* eslint-disable no-irregular-whitespace */

import legendComponent from "./components/legend";

import getMap, { handleInitialLoad } from "./map";

import "../assets/styles/index.scss";

// instantiate the map instance
const map = getMap();

map.initialLoaded = false;
map.visibleLayers = {};
map.layerList = [];

// debugging only
// window.map = map;
window.tcat = window.tcat || {};

map.on("data", () => {
    if (!map.initialLoaded && !map.loaded()) {
        handleInitialLoad(map);
        map.initialLoaded = true;
    }
});

map.on("load", () => {
    window.map = map;
    const legendEl = document.getElementById(`legend`);
    const wrapperEl = document.getElementById(`legend-wrapper`);
    const legendInnerEl = legendComponent([...map.filteredLayers]);
    wrapperEl
        ? legendEl.replaceChild(legendInnerEl, wrapperEl)
        : legendEl.appendChild(legendInnerEl);

    // Press Command to Scrollzoom
    document.body.addEventListener("keydown", function(event) {
        const { metaKey, ctrlKey } = event;
        if (metaKey || ctrlKey) {
            map.scrollZoom.enable();
        }
    });
    document.body.addEventListener("keyup", function(event) {
        const { metaKey, ctrlKeyg } = event;
        if (metaKey || ctrlKey) {
            map.scrollZoom.disable();
        }
    });
});


const puntos = [{"_id":"5ba6b67ab22f62939eba24cc","voucher":"77-SRNP-4","Collection Date":"1977-06-06T06:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Agrius","Herbivore species":"Agrius cingulata","Herbivore subfamily":"Sphinginae","Latitude":"10.83764","Locality":"Area Administrativa","Longitude":"-85.61871","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"},{"_id":"5ba6b67ab22f62939eba24ea","voucher":"78-SRNP-10","Collection Date":"1978-05-20T06:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Xylophanes","Herbivore species":"Xylophanes turbata","Herbivore subfamily":"Macroglossinae","Latitude":"10.80212","Locality":"Vado Nisperal","Longitude":"-85.65372","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"},{"_id":"5ba6b67ab22f62939eba24eb","voucher":"78-SRNP-10.02","Collection Date":"1978-05-20T06:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Xylophanes","Herbivore species":"Xylophanes turbata","Herbivore subfamily":"Macroglossinae","Latitude":"10.80212","Locality":"Vado Nisperal","Longitude":"-85.65372","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"},{"_id":"5ba6b67ab22f62939eba24ec","voucher":"78-SRNP-10.01","Collection Date":"1978-05-20T06:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Xylophanes","Herbivore species":"Xylophanes turbata","Herbivore subfamily":"Macroglossinae","Latitude":"10.80212","Locality":"Vado Nisperal","Longitude":"-85.65372","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"},{"_id":"5ba6b67ab22f62939eba24ee","voucher":"78-SRNP-10.05","Collection Date":"1978-05-20T06:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Xylophanes","Herbivore species":"Xylophanes turbata","Herbivore subfamily":"Macroglossinae","Latitude":"10.80212","Locality":"Vado Nisperal","Longitude":"-85.65372","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"},{"_id":"5ba6b67ab22f62939eba24ef","voucher":"78-SRNP-10.04","Collection Date":"1978-05-20T06:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Xylophanes","Herbivore species":"Xylophanes turbata","Herbivore subfamily":"Macroglossinae","Latitude":"10.80212","Locality":"Vado Nisperal","Longitude":"-85.65372","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"},{"_id":"5ba6b67ab22f62939eba24f0","voucher":"78-SRNP-10.03","Collection Date":"1978-05-20T06:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Xylophanes","Herbivore species":"Xylophanes turbata","Herbivore subfamily":"Macroglossinae","Latitude":"10.80212","Locality":"Vado Nisperal","Longitude":"-85.65372","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"},{"_id":"5ba6b67ab22f62939eba24f1","voucher":"78-SRNP-10.07","Collection Date":"1978-05-20T06:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Xylophanes","Herbivore species":"Xylophanes turbata","Herbivore subfamily":"Macroglossinae","Latitude":"10.80212","Locality":"Vado Nisperal","Longitude":"-85.65372","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"},{"_id":"5ba6b67ab22f62939eba24f2","voucher":"78-SRNP-10.08","Collection Date":"1978-05-20T06:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Xylophanes","Herbivore species":"Xylophanes turbata","Herbivore subfamily":"Macroglossinae","Latitude":"10.80212","Locality":"Vado Nisperal","Longitude":"-85.65372","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"},{"_id":"5ba6b67ab22f62939eba24f3","voucher":"78-SRNP-10.06","Collection Date":"1978-05-20T06:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Xylophanes","Herbivore species":"Xylophanes turbata","Herbivore subfamily":"Macroglossinae","Latitude":"10.80212","Locality":"Vado Nisperal","Longitude":"-85.65372","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"},{"_id":"5ba6b67ab22f62939eba2517","voucher":"78-SRNP-27","Collection Date":"1978-05-26T06:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Xylophanes","Herbivore species":"Xylophanes turbata","Herbivore subfamily":"Macroglossinae","Latitude":"10.79796","Locality":"Vado Poza Salada","Longitude":"-85.64984","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"},{"_id":"5ba6b67ab22f62939eba2673","voucher":"79-SRNP-50","Collection Date":"1979-05-23T05:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Xylophanes","Herbivore species":"Xylophanes turbata","Herbivore subfamily":"Macroglossinae","Latitude":"10.80212","Locality":"Vado Nisperal","Longitude":"-85.65372","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"},{"_id":"5ba6b67ab22f62939eba2691","voucher":"79-SRNP-58.1","Collection Date":"1979-05-30T05:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Xylophanes","Herbivore species":"Xylophanes turbata","Herbivore subfamily":"Macroglossinae","Latitude":"10.83575","Locality":"Sendero Natural","Longitude":"-85.61253","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"},{"_id":"5ba6b67ab22f62939eba2692","voucher":"79-SRNP-58","Collection Date":"1979-05-30T05:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Xylophanes","Herbivore species":"Xylophanes turbata","Herbivore subfamily":"Macroglossinae","Latitude":"10.83575","Locality":"Sendero Natural","Longitude":"-85.61253","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"},{"_id":"5ba6b67ab22f62939eba269a","voucher":"79-SRNP-63a","Collection Date":"1979-06-01T05:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Xylophanes","Herbivore species":"Xylophanes turbata","Herbivore subfamily":"Macroglossinae","Latitude":"10.83575","Locality":"Sendero Natural","Longitude":"-85.61253","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"},{"_id":"5ba6b67ab22f62939eba2cc5","voucher":"81-SRNP-222","Collection Date":"1981-06-10T06:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Xylophanes","Herbivore species":"Xylophanes turbata","Herbivore subfamily":"Macroglossinae","Latitude":"10.85827","Locality":"Cafetal","Longitude":"-85.61089","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"},{"_id":"5ba6b67ab22f62939eba3a1f","voucher":"83-SRNP-484","Collection Date":"1983-06-20T06:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Agrius","Herbivore species":"Agrius cingulata","Herbivore subfamily":"","Latitude":"10.84389","Locality":"Bosque San Emilio","Longitude":"-85.61384","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"},{"_id":"5ba6b67ab22f62939eba3b5f","voucher":"83-SRNP-642","Collection Date":"1983-06-29T06:00:00.000Z","Herbivore family":"Sphingidae","herbivore genus name":"Agrius","Herbivore species":"Agrius cingulata","Herbivore subfamily":"","Latitude":"10.85145","Locality":"Bosque Humedo","Longitude":"-85.60801","primary ecosystem":"dry forest","Sector":"Sector Santa Rosa"}];

const url = 'http://localhost:3000/api/species/Agrius%20cingulata/Xylophanes%20turbata'


/*app.get('/map/:species/:species2*?', (req,res) => {
    const colors = {
        color1 : ""
    }
    if (req.params.species != undefined){

    }
})*/

fetch(url).then(response => {
    response.json().then(json => {
        let data = json;
        console.log(data)
        const bug1 = data[0]["Herbivore species"]
        console.log("bug1" +bug1)
        data.forEach(function (marker){
            var el = document.createElement('div')
            var classType = (marker["Herbivore species"] == bug1)? "marker1":"marker2"
            console.log(data["Herbivore species"])
            el.className = 'marker '+classType


            new mapboxgl.Marker(el)
                .setLngLat([marker.Longitude, marker.Latitude])
                .addTo(map)
            console.log('marker added')
        });

    });
});



