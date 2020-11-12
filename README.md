_________________________________________________________________________
Extensions:
Path Intellisense
npm
Code Spell Checker
Material Icon Theme
REST Client
npm intellisense
Bracket Pair Colorizer 2
open in browser
_
_________________________________________________________________________________________________
git init
git remote add origin https://github.com/pseudocoders64/covid-tracker.git
git config --global user.email "email"
git config --global user.password "password"
git config --global user.name "name"
git checkout -b dev
git commit -m "phase1"
git add .
git push -u origin dev


git add .
git commit -m  "phase1-bugsmash1"
git push
_____________________________________________________________________________________________________
To know the location of the person:
/*Doesn't work without ssl*/
https://www.geoplugin.com/webservices/javascript
1. add  in your index.html
<script language="JavaScript" src="http://www.geoplugin.net/javascript.gp" type="text/javascript"></script>

2.use this in countryApp.js
//geoplugin_countryCode()
function geoplugin_countryCode() { return 'IN'; }

______________________________________________________________________________________________________
open source APIs:

https://documenter.getpostman.com/view/10808728/SzS8rjbc

test the api:
fetch(`https://api.covid19api.com/country/south-africa?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z`, {
		"method": "GET",
		"headers": {
			"X-Access-Token": "5cf9dfd5-3449-485e-b5ae-70a60e997864",
			
		}
	})
	.then(response=>{
		return response.json();
	}).then(data=>{
		
		console.log(data);
	})

0:{Active: 0,City: "",CityCode: "",Confirmed: 0,Country: "South Africa",CountryCode: "ZA",Date: "2020-03-01T00:00:00Z",Deaths: 0
Lat: "-30.56",Lon: "22.94",Province: "",Recovered: 0}
1: {Country: "South Africa", CountryCode: "ZA", Province: "", City: "", CityCode: "", …}
2: {Country: "South Africa", CountryCode: "ZA", Province: "", City: "", CityCode: "", …}
__________________________________________________________________________________________________________
Chart:

https://www.chartjs.org/docs/latest/

Add this in index.html
<div class="chart">
    <canvas id="axes_line_chart"></canvas>
</div>

->Installation->CDN Js->https://cdnjs.com/libraries/Chart.js

copy the script tag for chart.min.js and add it in index.html
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js" integrity="sha512-d9xgZrVZpmmQlfonhQUvTR7lMPtO7NkZMkA0ABN3PHCbKA5nqylQ/yWlFAyY6hYgdF1Qh6nYiuADWwKB4C2WSw==" crossorigin="anonymous"></script>


->Axis->linear
https://www.chartjs.org/docs/latest/axes/cartesian/linear.html
use this in countryApp.js /*changed chart to my_chart*/
let chart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: 'First dataset',
            data: [0, 20, 40, 50]
        }],
        labels: ['January', 'February', 'March', 'April']
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMin: 50000,
                    stepSize: 500000
                }
            }]
        }
    }
});


_______________________________________________________________________________________________
Utilities.

1. to remove / from integer string
parseInt(DATA.toal_cases.replace(/,/g,""))
________________________________________________________________________________________________

heart beat pulse

1. add this in html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
2. add inside p
<div class="pulse"></div>
3. in css add this to @media
.pulse{           
        background: none;
        animation: none;
        display: none;
    }
4. add this in css outside media
.pulse{           
            background: url('data:image/svg+xml;utf8,<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"  xml:space="preserve" > <polyline fill="none"  stroke-width="2px" stroke="white" points="2.4,58.7 70.8,58.7 76.1,46.2 81.1,58.7 89.9,58.7 93.8,66.5 102.8,32.7 110.6,78.7 115.3,58.7 126.4,58.7 134.4,54.7 142.4,58.7 197.8,58.7"/></svg>') 0 0 no-repeat;
            width:100%;
            height: 100%;
            position: absolute ;
            animation: 3s pulse linear infinite;
            top: -30;
            left: 545px;
            opacity: 0.1;
        }
       
        @keyframes pulse {
            0% {
                clip: rect(0,0,100px,0);
            }
            4% {
                clip: rect(0,66.66667px,100px,0);
            }
            15% {
                clip: rect(0,133.3333px,100px,0);
            }
            20% {
                clip: rect(0,300px,100px,0);
                opacity: 1;
            }
            80%{
                clip: rect(0,300px,100px,0);
                opacity: 0;
            }
            90%{
               
                opacity: 0;
            }
            100%{
                clip: rect(0,300px,100px,0);
                opacity: 0;
            }
        }
________________________________________________________________________________________________

Maps:
MAP api: https://docs.mapbox.com/mapbox-gl-js/api/

Include the JavaScript and CSS files in the <head> of your HTML file.
<script src='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js'></script>
<link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
Include the following code in the <body> of your HTML file.
<div id='map' style='width: 400px; height: 300px;'></div>
<script>
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhbGx5OXNoYXJtYSIsImEiOiJja2d5c3U5YWkwZ3MxMzBxdnM2c3N2NDdqIn0.WG1TVBcTJme3pqkCBL_skQ';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
center: [-74.5, 40], // starting position [lng, lat]
zoom: 9 // starting zoom
});
</script>


to set markers: include the following code in js file

var marker = new mapboxgl.Marker()
.setLngLat([30.5, 50.5])    // this will set the long and lat[long, lat] -> long first and then lat else 
.addTo(map);                //it will throw error that the cordinated must be in the range of -90 to 90


get country list having slug and lat and long cordinates, used following code to fetch: 

country_list.forEach(element=>{
    fetch(`https://api.covid19api.com/dayone/country/${element.Slug}`, {    // element.slug =countryname
        "method": "GET",
				"headers": {
				"X-Access-Token": "5cf9dfd5-3449-485e-b5ae-70a60e997864",
				}
		})
		.then(response=>{
			return response.json();
		}).then(data=>{
            console.log(`{'name':'${data[0].Country}', 'slug':'${element.Slug}','code':'${data[0].CountryCode}','Lat':'${data[0].Lat}','Lon':'${data[0].Lon}'}`);
         });
 })

________________________________________________________________________________________________

get countries data and link thm with maps:
API:
https://api.covid19api.com/summary

returns data having 3keys: Message, Global, countries.
We need only the countries hence used data.countries in following code.
fetch('https://api.covid19api.com/summary',{
    "method": "GET",
    "headers": {
    "X-Access-Token": "5cf9dfd5-3449-485e-b5ae-70a60e997864",
    }
})
.then(response=>{
return response.json();
}).then(data=>{
    indexes=Object.keys(data.Countries);    // https://www.geeksforgeeks.org/object-keys-javascript/
    indexes.forEach(index=>{                // indexes conains the index of the objs present inside data.Countries
        let DATA=data.Countries[index];
        // console.log('country:'+ DATA.Country+'  confirmed: '+DATA.TotalConfirmed+'  NewConfirmed: '+DATA.NewConfirmed);
    });
});


________________________________________________________________________________________________

https://docs.mapbox.com/help/tutorials/custom-markers-gl-js/#attach-popups-to-markers

linking markers and cases data:
for every marker i need the cases to be linked, so combined the code of marker creation and fetching the data into one js file.

custom markers:
1.      var el = document.createElement('div');
        el.className = 'marker';    //creted class to add the styling
        
        markerObjs[i]=new mapboxgl.Marker(el)   // above el used here 
        .setLngLat([country_list[index].Lon, country_list[index].Lat])
        .addTo(map);

        styling:
        .marker {
            background-image: url('../img/mapMarker2.png');
            background-size: cover;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            cursor: pointer;
        }

plan:
1. fetch summary (it will have the cases info but no lat and long)
2. for each obj in the above fetched summry, create marker for all
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
        
        markerObjs[i]=new mapboxgl.Marker(el)
        .setLngLat([country_list[index].Lon, country_list[index].Lat])
        .addTo(map);
        // console.log('country:'+ DATA.Country+'  confirmed: '+DATA.TotalConfirmed+'  NewConfirmed: '+DATA.NewConfirmed);
    });
});
