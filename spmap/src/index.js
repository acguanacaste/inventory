import "../assets/styles/index.scss";

const species ="Agrius cingulata, Xylophanes turbata";

const url = 'http://localhost:3000/api/species/'+encodeURI(species)


mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VhbmFjYXN0ZSIsImEiOiJjamowNzhuYnAwZXU2M2txczhsc21mbDVsIn0.amJMu3O1jfjcbg-B1qC7ww';
const map = new mapboxgl.Map({
    container: 'mapasp',
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
       // map.removeLayer('toggle-sectores');
        //yarmap.removeLayer('toggle-turismo');
        map.removeLayer('toggle-unesco');
        const nav = new mapboxgl.NavigationControl({ showCompass: false });
        map.addControl(nav, "top-left");
        map.initialLoaded = true;
    }
});
