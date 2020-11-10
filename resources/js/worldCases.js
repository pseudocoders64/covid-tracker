// import 'https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js';
var lat,long;

const map_token="pk.eyJ1Ijoic2hhbGx5OXNoYXJtYSIsImEiOiJja2d5c3U5YWkwZ3MxMzBxdnM2c3N2NDdqIn0.WG1TVBcTJme3pqkCBL_skQ";
mapboxgl.accessToken = map_token;
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/dark-v10',
center: [0, 20],
zoom: 2,
renderWorldCopies: false,
continuousWorld: false,
noWrap: false,
overflow: 'clip' | 'wrap' 
});


fetch('https://api.covid19api.com/summary',{
    "method": "GET",
    "headers": {
    "X-Access-Token": "5cf9dfd5-3449-485e-b5ae-70a60e997864",
    }
})
.then(response=>{
return response.json();
}).then(data=>{
    const markerObjs=[];
    let i=0;
    indexes=Object.keys(data.Countries);    
    indexes.forEach(index=>{               
        let DATA=data.Countries[index];
        var el = document.createElement('div');
        el.className = 'marker';
    
        getData(DATA.Slug);
    
        markerObjs[i]=new mapboxgl.Marker(el)
        .setLngLat([long, lat])
        .setPopup(new mapboxgl.Popup({ offset: 25 })
        .setHTML('<h3>' + DATA.Country + '</h3><p> TOTAL CASES: ' + DATA.TotalConfirmed + '</p>'))
        .addTo(map);
        // console.log('country:'+ DATA.Country+'  confirmed: '+DATA.TotalConfirmed+'  NewConfirmed: '+DATA.NewConfirmed);
    });
});

function getData(slug){
    country_list.forEach(obj=>{
        if(obj.slug === slug){
            lat=obj.Lat;
            long=obj.Lon;
        }
    })
}















// const markerObjs=[];
// let i=0;

// country_list.forEach(country=>{
//     console.log('latLong: '+country);

//     var el = document.createElement('div');
//     el.className = 'marker';
    
//     markerObjs[i]=new mapboxgl.Marker(el)
//     .setLngLat([country.Lon, country.Lat])
//     // .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
//     // .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
//     .addTo(map);

//     i++;
//     // var popup = new mapboxgl.Popup({ closeOnClick: false, closeButton: false })
//     // .setHTML("<h1>Hello World!</h1>")
//     // .trackPointer()
//     // .addTo(map);

//     // popup.on('close', function(){
//     //     console.log('popup was closed');
//     //     });
// });

// map.on('load', function () {
//     map.loadImage(
//         'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',