// fetch('https://api.covid19api.com/summary',{
//     "method": "GET",
//     "headers": {
//     "X-Access-Token": "5cf9dfd5-3449-485e-b5ae-70a60e997864",
//     }
// })
// .then(response=>{
// return response.json();
// }).then(data=>{
//     indexes=Object.keys(data.Countries);    
//     indexes.forEach(index=>{               
//         let DATA=data.Countries[index];
//         // console.log('country:'+ DATA.Country+'  confirmed: '+DATA.TotalConfirmed+'  NewConfirmed: '+DATA.NewConfirmed);
//     });
// });


let country_list=[
	{
		"name": "Afghanistan",
		"slug": "afghanistan",
		"code": "AF",
		"Lat": "33.94",
		"Lon": "67.71"
	},
	{
		"name": "Albania",
		"slug": "albania",
		"code": "AL",
		"Lat": "41.15",
		"Lon": "20.17"
	},
	{
		"name": "Algeria",
		"slug": "algeria",
		"code": "DZ",
		"Lat": "28.03",
		"Lon": "1.66"
	},
	{
		"name": "Andorra",
		"slug": "andorra",
		"code": "AD",
		"Lat": "42.55",
		"Lon": "1.6"
	},
	{
		"name": "Angola",
		"slug": "angola",
		"code": "AO",
		"Lat": "-11.2",
		"Lon": "17.87"
	},
	{
		"name": "Antigua and Barbuda",
		"slug": "antigua-and-barbuda",
		"code": "AG",
		"Lat": "17.06",
		"Lon": "-61.8"
	},
	{
		"name": "Argentina",
		"slug": "argentina",
		"code": "AR",
		"Lat": "-38.42",
		"Lon": "-63.62"
	},
	{
		"name": "Armenia",
		"slug": "armenia",
		"code": "AM",
		"Lat": "40.07",
		"Lon": "45.04"
	},
	{
		"name": "Australia",
		"slug": "australia",
		"code": "AU",
		"Lat": "-37.81",
		"Lon": "144.96"
	},
	{
		"name": "Austria",
		"slug": "austria",
		"code": "AT",
		"Lat": "47.52",
		"Lon": "14.55"
	},
	{
		"name": "Azerbaijan",
		"slug": "azerbaijan",
		"code": "AZ",
		"Lat": "40.14",
		"Lon": "47.58"
	},
	{
		"name": "Bahamas",
		"slug": "bahamas",
		"code": "BS",
		"Lat": "25.03",
		"Lon": "-77.4"
	},
	{
		"name": "Bahrain",
		"slug": "bahrain",
		"code": "BH",
		"Lat": "25.93",
		"Lon": "50.64"
	},
	{
		"name": "Bangladesh",
		"slug": "bangladesh",
		"code": "BD",
		"Lat": "23.68",
		"Lon": "90.36"
	},
	{
		"name": "Barbados",
		"slug": "barbados",
		"code": "BB",
		"Lat": "13.19",
		"Lon": "-59.54"
	},
	{
		"name": "Belarus",
		"slug": "belarus",
		"code": "BY",
		"Lat": "53.71",
		"Lon": "27.95"
	},
	{
		"name": "Belgium",
		"slug": "belgium",
		"code": "BE",
		"Lat": "50.5",
		"Lon": "4.47"
	},
	{
		"name": "Belize",
		"slug": "belize",
		"code": "BZ",
		"Lat": "17.19",
		"Lon": "-88.5"
	},
	{
		"name": "Benin",
		"slug": "benin",
		"code": "BJ",
		"Lat": "9.31",
		"Lon": "2.32"
	},
	{
		"name": "Bhutan",
		"slug": "bhutan",
		"code": "BT",
		"Lat": "27.51",
		"Lon": "90.43"
	},
	{
		"name": "Bolivia",
		"slug": "bolivia",
		"code": "BO",
		"Lat": "-16.29",
		"Lon": "-63.59"
	},
	{
		"name": "Bosnia and Herzegovina",
		"slug": "bosnia-and-herzegovina",
		"code": "BA",
		"Lat": "43.92",
		"Lon": "17.68"
	},
	{
		"name": "Botswana",
		"slug": "botswana",
		"code": "BW",
		"Lat": "-22.33",
		"Lon": "24.68"
	},
	{
		"name": "Brazil",
		"slug": "brazil",
		"code": "BR",
		"Lat": "-14.24",
		"Lon": "-51.93"
	},
	{
		"name": "Brunei Darussalam",
		"slug": "brunei",
		"code": "BN",
		"Lat": "4.54",
		"Lon": "114.73"
	},
	{
		"name": "Bulgaria",
		"slug": "bulgaria",
		"code": "BG",
		"Lat": "42.73",
		"Lon": "25.49"
	},
	{
		"name": "Burkina Faso",
		"slug": "burkina-faso",
		"code": "BF",
		"Lat": "12.24",
		"Lon": "-1.56"
	},
	{
		"name": "Burundi",
		"slug": "burundi",
		"code": "BI",
		"Lat": "-3.37",
		"Lon": "29.92"
	},
	{
		"name": "Cambodia",
		"slug": "cambodia",
		"code": "KH",
		"Lat": "12.57",
		"Lon": "104.99"
	},
	{
		"name": "Cameroon",
		"slug": "cameroon",
		"code": "CM",
		"Lat": "7.37",
		"Lon": "12.35"
	},
	{
		"name": "Canada",
		"slug": "canada",
		"code": "CA",
		"Lat": "51.25",
		"Lon": "-85.32"
	},
	{
		"name": "Cape Verde",
		"slug": "cape-verde",
		"code": "CV",
		"Lat": "16",
		"Lon": "-24.01"
	},
	{
		"name": "Central African Republic",
		"slug": "central-african-republic",
		"code": "CF",
		"Lat": "6.61",
		"Lon": "20.94"
	},
	{
		"name": "Chad",
		"slug": "chad",
		"code": "TD",
		"Lat": "15.45",
		"Lon": "18.73"
	},
	{
		"name": "Chile",
		"slug": "chile",
		"code": "CL",
		"Lat": "-35.68",
		"Lon": "-71.54"
	},
	{
		"name": "China",
		"slug": "china",
		"code": "CN",
		"Lat": "24.97",
		"Lon": "101.49"
	},
	{
		"name": "Colombia",
		"slug": "colombia",
		"code": "CO",
		"Lat": "4.57",
		"Lon": "-74.3"
	},
	{
		"name": "Comoros",
		"slug": "comoros",
		"code": "KM",
		"Lat": "-11.88",
		"Lon": "43.87"
	},
	{
		"name": "Congo (Brazzaville)",
		"slug": "congo-brazzaville",
		"code": "CG",
		"Lat": "-0.23",
		"Lon": "15.83"
	},
	{
		"name": "Congo (Kinshasa)",
		"slug": "congo-kinshasa",
		"code": "CD",
		"Lat": "-4.04",
		"Lon": "21.76"
	},
	{
		"name": "Costa Rica",
		"slug": "costa-rica",
		"code": "CR",
		"Lat": "9.75",
		"Lon": "-83.75"
	},
	{
		"name": "Croatia",
		"slug": "croatia",
		"code": "HR",
		"Lat": "45.1",
		"Lon": "15.2"
	},
	{
		"name": "Cuba",
		"slug": "cuba",
		"code": "CU",
		"Lat": "21.52",
		"Lon": "-77.78"
	},
	{
		"name": "Cyprus",
		"slug": "cyprus",
		"code": "CY",
		"Lat": "35.13",
		"Lon": "33.43"
	},
	{
		"name": "Czech Republic",
		"slug": "czech-republic",
		"code": "CZ",
		"Lat": "49.82",
		"Lon": "15.47"
	},
	{
		"name": "Denmark",
		"slug": "denmark",
		"code": "DK",
		"Lat": "56.26",
		"Lon": "9.5"
	},
	{
		"name": "Djibouti",
		"slug": "djibouti",
		"code": "DJ",
		"Lat": "11.83",
		"Lon": "42.59"
	},
	{
		"name": "Dominica",
		"slug": "dominica",
		"code": "DM",
		"Lat": "15.41",
		"Lon": "-61.37"
	},
	{
		"name": "Dominican Republic",
		"slug": "dominican-republic",
		"code": "DO",
		"Lat": "18.74",
		"Lon": "-70.16"
	},
	{
		"name": "Ecuador",
		"slug": "ecuador",
		"code": "EC",
		"Lat": "-1.83",
		"Lon": "-78.18"
	},
	{
		"name": "Egypt",
		"slug": "egypt",
		"code": "EG",
		"Lat": "26.82",
		"Lon": "30.8"
	},
	{
		"name": "El Salvador",
		"slug": "el-salvador",
		"code": "SV",
		"Lat": "13.79",
		"Lon": "-88.9"
	},
	{
		"name": "Equatorial Guinea",
		"slug": "equatorial-guinea",
		"code": "GQ",
		"Lat": "1.65",
		"Lon": "10.27"
	},
	{
		"name": "Eritrea",
		"slug": "eritrea",
		"code": "ER",
		"Lat": "15.18",
		"Lon": "39.78"
	},
	{
		"name": "Estonia",
		"slug": "estonia",
		"code": "EE",
		"Lat": "58.6",
		"Lon": "25.01"
	},
	{
		"name": "Ethiopia",
		"slug": "ethiopia",
		"code": "ET",
		"Lat": "9.15",
		"Lon": "40.49"
	},
	{
		"name": "Fiji",
		"slug": "fiji",
		"code": "FJ",
		"Lat": "-16.58",
		"Lon": "179.41"
	},
	{
		"name": "Finland",
		"slug": "finland",
		"code": "FI",
		"Lat": "61.92",
		"Lon": "25.75"
	},
	{
		"name": "France",
		"slug": "france",
		"code": "FR",
		"Lat": "46.23",
		"Lon": "2.21"
	},
	{
		"name": "Gabon",
		"slug": "gabon",
		"code": "GA",
		"Lat": "-0.8",
		"Lon": "11.61"
	},
	{
		"name": "Gambia",
		"slug": "gambia",
		"code": "GM",
		"Lat": "13.44",
		"Lon": "-15.31"
	},
	{
		"name": "Georgia",
		"slug": "georgia",
		"code": "GE",
		"Lat": "42.32",
		"Lon": "43.36"
	},
	{
		"name": "Germany",
		"slug": "germany",
		"code": "DE",
		"Lat": "51.17",
		"Lon": "10.45"
	},
	{
		"name": "Ghana",
		"slug": "ghana",
		"code": "GH",
		"Lat": "7.95",
		"Lon": "-1.02"
	},
	{
		"name": "Greece",
		"slug": "greece",
		"code": "GR",
		"Lat": "39.07",
		"Lon": "21.82"
	},
	{
		"name": "Grenada",
		"slug": "grenada",
		"code": "GD",
		"Lat": "12.26",
		"Lon": "-61.6"
	},
	{
		"name": "Guatemala",
		"slug": "guatemala",
		"code": "GT",
		"Lat": "15.78",
		"Lon": "-90.23"
	},
	{
		"name": "Guinea",
		"slug": "guinea",
		"code": "GN",
		"Lat": "9.95",
		"Lon": "-9.7"
	},
	{
		"name": "Guinea-Bissau",
		"slug": "guinea-bissau",
		"code": "GW",
		"Lat": "11.8",
		"Lon": "-15.18"
	},
	{
		"name": "Guyana",
		"slug": "guyana",
		"code": "GY",
		"Lat": "4.86",
		"Lon": "-58.93"
	},
	{
		"name": "Haiti",
		"slug": "haiti",
		"code": "HT",
		"Lat": "18.97",
		"Lon": "-72.29"
	},
	{
		"name": "Holy See (Vatican City State)",
		"slug": "holy-see-vatican-city-state",
		"code": "VA",
		"Lat": "41.9",
		"Lon": "12.45"
	},
	{
		"name": "Honduras",
		"slug": "honduras",
		"code": "HN",
		"Lat": "15.2",
		"Lon": "-86.24"
	},
	{
		"name": "Hungary",
		"slug": "hungary",
		"code": "HU",
		"Lat": "47.16",
		"Lon": "19.5"
	},
	{
		"name": "Iceland",
		"slug": "iceland",
		"code": "IS",
		"Lat": "64.96",
		"Lon": "-19.02"
	},
	{
		"name": "India",
		"slug": "india",
		"code": "IN",
		"Lat": "20.59",
		"Lon": "78.96"
	},
	{
		"name": "Indonesia",
		"slug": "indonesia",
		"code": "ID",
		"Lat": "-0.79",
		"Lon": "113.92"
	},
	{
		"name": "Iran, Islamic Republic of",
		"slug": "iran",
		"code": "IR",
		"Lat": "32.43",
		"Lon": "53.69"
	},
	{
		"name": "Iraq",
		"slug": "iraq",
		"code": "IQ",
		"Lat": "33.22",
		"Lon": "43.68"
	},
	{
		"name": "Ireland",
		"slug": "ireland",
		"code": "IE",
		"Lat": "53.41",
		"Lon": "-8.24"
	},
	{
		"name": "Israel",
		"slug": "israel",
		"code": "IL",
		"Lat": "31.05",
		"Lon": "34.85"
	},
	{
		"name": "Italy",
		"slug": "italy",
		"code": "IT",
		"Lat": "41.87",
		"Lon": "12.57"
	},
	{
		"name": "Jamaica",
		"slug": "jamaica",
		"code": "JM",
		"Lat": "18.11",
		"Lon": "-77.3"
	},
	{
		"name": "Japan",
		"slug": "japan",
		"code": "JP",
		"Lat": "36.2",
		"Lon": "138.25"
	},
	{
		"name": "Jordan",
		"slug": "jordan",
		"code": "JO",
		"Lat": "30.59",
		"Lon": "36.24"
	},
	{
		"name": "Kazakhstan",
		"slug": "kazakhstan",
		"code": "KZ",
		"Lat": "48.02",
		"Lon": "66.92"
	},
	{
		"name": "Kenya",
		"slug": "kenya",
		"code": "KE",
		"Lat": "-0.02",
		"Lon": "37.91"
	},
	{
		"name": "Korea (South)",
		"slug": "korea-south",
		"code": "KR",
		"Lat": "35.91",
		"Lon": "127.77"
	},
	{
		"name": "Republic of Kosovo",
		"slug": "kosovo",
		"code": "XK",
		"Lat": "42.6",
		"Lon": "20.9"
	},
	{
		"name": "Kuwait",
		"slug": "kuwait",
		"code": "KW",
		"Lat": "29.31",
		"Lon": "47.48"
	},
	{
		"name": "Kyrgyzstan",
		"slug": "kyrgyzstan",
		"code": "KG",
		"Lat": "41.2",
		"Lon": "74.77"
	},
	{
		"name": "Lao PDR",
		"slug": "lao-pdr",
		"code": "LA",
		"Lat": "19.86",
		"Lon": "102.5"
	},
	{
		"name": "Latvia",
		"slug": "latvia",
		"code": "LV",
		"Lat": "56.88",
		"Lon": "24.6"
	},
	{
		"name": "Lebanon",
		"slug": "lebanon",
		"code": "LB",
		"Lat": "33.85",
		"Lon": "35.86"
	},
	{
		"name": "Lesotho",
		"slug": "lesotho",
		"code": "LS",
		"Lat": "-29.61",
		"Lon": "28.23"
	},
	{
		"name": "Liberia",
		"slug": "liberia",
		"code": "LR",
		"Lat": "6.43",
		"Lon": "-9.43"
	},
	{
		"name": "Libya",
		"slug": "libya",
		"code": "LY",
		"Lat": "26.34",
		"Lon": "17.23"
	},
	{
		"name": "Liechtenstein",
		"slug": "liechtenstein",
		"code": "LI",
		"Lat": "47.17",
		"Lon": "9.56"
	},
	{
		"name": "Lithuania",
		"slug": "lithuania",
		"code": "LT",
		"Lat": "55.17",
		"Lon": "23.88"
	},
	{
		"name": "Luxembourg",
		"slug": "luxembourg",
		"code": "LU",
		"Lat": "49.82",
		"Lon": "6.13"
	},
	{
		"name": "Macedonia, Republic of",
		"slug": "macedonia",
		"code": "MK",
		"Lat": "41.61",
		"Lon": "21.75"
	},
	{
		"name": "Madagascar",
		"slug": "madagascar",
		"code": "MG",
		"Lat": "-18.77",
		"Lon": "46.87"
	},
	{
		"name": "Malawi",
		"slug": "malawi",
		"code": "MW",
		"Lat": "-13.25",
		"Lon": "34.3"
	},
	{
		"name": "Malaysia",
		"slug": "malaysia",
		"code": "MY",
		"Lat": "4.21",
		"Lon": "101.98"
	},
	{
		"name": "Maldives",
		"slug": "maldives",
		"code": "MV",
		"Lat": "3.2",
		"Lon": "73.22"
	},
	{
		"name": "Mali",
		"slug": "mali",
		"code": "ML",
		"Lat": "17.57",
		"Lon": "-4"
	},
	{
		"name": "Malta",
		"slug": "malta",
		"code": "MT",
		"Lat": "35.94",
		"Lon": "14.38"
	},
	{
		"name": "Marshall Islands",
		"slug": "marshall-islands",
		"code": "MH",
		"Lat": "7.13",
		"Lon": "171.18"
	},
	{
		"name": "Mauritania",
		"slug": "mauritania",
		"code": "MR",
		"Lat": "21.01",
		"Lon": "-10.94"
	},
	{
		"name": "Mauritius",
		"slug": "mauritius",
		"code": "MU",
		"Lat": "-20.35",
		"Lon": "57.55"
	},
	{
		"name": "Mexico",
		"slug": "mexico",
		"code": "MX",
		"Lat": "23.63",
		"Lon": "-102.55"
	},
	{
		"name": "Moldova",
		"slug": "moldova",
		"code": "MD",
		"Lat": "47.41",
		"Lon": "28.37"
	},
	{
		"name": "Monaco",
		"slug": "monaco",
		"code": "MC",
		"Lat": "43.75",
		"Lon": "7.41"
	},
	{
		"name": "Mongolia",
		"slug": "mongolia",
		"code": "MN",
		"Lat": "46.86",
		"Lon": "103.85"
	},
	{
		"name": "Montenegro",
		"slug": "montenegro",
		"code": "ME",
		"Lat": "42.71",
		"Lon": "19.37"
	},
	{
		"name": "Morocco",
		"slug": "morocco",
		"code": "MA",
		"Lat": "31.79",
		"Lon": "-7.09"
	},
	{
		"name": "Mozambique",
		"slug": "mozambique",
		"code": "MZ",
		"Lat": "-18.67",
		"Lon": "35.53"
	},
	{
		"name": "Myanmar",
		"slug": "myanmar",
		"code": "MM",
		"Lat": "21.91",
		"Lon": "95.96"
	},
	{
		"name": "Namibia",
		"slug": "namibia",
		"code": "NA",
		"Lat": "-22.96",
		"Lon": "18.49"
	},
	{
		"name": "Nepal",
		"slug": "nepal",
		"code": "NP",
		"Lat": "28.39",
		"Lon": "84.12"
	},
	{
		"name": "Netherlands",
		"slug": "netherlands",
		"code": "NL",
		"Lat": "52.13",
		"Lon": "5.29"
	},
	{
		"name": "New Zealand",
		"slug": "new-zealand",
		"code": "NZ",
		"Lat": "-40.9",
		"Lon": "174.89"
	},
	{
		"name": "Nicaragua",
		"slug": "nicaragua",
		"code": "NI",
		"Lat": "12.87",
		"Lon": "-85.21"
	},
	{
		"name": "Niger",
		"slug": "niger",
		"code": "NE",
		"Lat": "17.61",
		"Lon": "8.08"
	},
	{
		"name": "Nigeria",
		"slug": "nigeria",
		"code": "NG",
		"Lat": "9.08",
		"Lon": "8.68"
	},
	{
		"name": "Norway",
		"slug": "norway",
		"code": "NO",
		"Lat": "60.47",
		"Lon": "8.47"
	},
	{
		"name": "Oman",
		"slug": "oman",
		"code": "OM",
		"Lat": "21.51",
		"Lon": "55.92"
	},
	{
		"name": "Pakistan",
		"slug": "pakistan",
		"code": "PK",
		"Lat": "30.38",
		"Lon": "69.35"
	},
	{
		"name": "Palestinian Territory",
		"slug": "palestine",
		"code": "PS",
		"Lat": "31.95",
		"Lon": "35.23"
	},
	{
		"name": "Panama",
		"slug": "panama",
		"code": "PA",
		"Lat": "8.54",
		"Lon": "-80.78"
	},
	{
		"name": "Papua New Guinea",
		"slug": "papua-new-guinea",
		"code": "PG",
		"Lat": "-6.31",
		"Lon": "143.96"
	},
	{
		"name": "Paraguay",
		"slug": "paraguay",
		"code": "PY",
		"Lat": "-23.44",
		"Lon": "-58.44"
	},
	{
		"name": "Peru",
		"slug": "peru",
		"code": "PE",
		"Lat": "-9.19",
		"Lon": "-75.02"
	},
	{
		"name": "Philippines",
		"slug": "philippines",
		"code": "PH",
		"Lat": "12.88",
		"Lon": "121.77"
	},
	{
		"name": "Poland",
		"slug": "poland",
		"code": "PL",
		"Lat": "51.92",
		"Lon": "19.15"
	},
	{
		"name": "Portugal",
		"slug": "portugal",
		"code": "PT",
		"Lat": "39.4",
		"Lon": "-8.22"
	},
	{
		"name": "Qatar",
		"slug": "qatar",
		"code": "QA",
		"Lat": "25.35",
		"Lon": "51.18"
	},
	{
		"name": "Romania",
		"slug": "romania",
		"code": "RO",
		"Lat": "45.94",
		"Lon": "24.97"
	},
	{
		"name": "Russian Federation",
		"slug": "russia",
		"code": "RU",
		"Lat": "61.52",
		"Lon": "105.32"
	},
	{
		"name": "Rwanda",
		"slug": "rwanda",
		"code": "RW",
		"Lat": "-1.94",
		"Lon": "29.87"
	},
	{
		"name": "Saint Kitts and Nevis",
		"slug": "saint-kitts-and-nevis",
		"code": "KN",
		"Lat": "17.36",
		"Lon": "-62.78"
	},
	{
		"name": "Saint Lucia",
		"slug": "saint-lucia",
		"code": "LC",
		"Lat": "13.91",
		"Lon": "-60.98"
	},
	{
		"name": "Saint Vincent and Grenadines",
		"slug": "saint-vincent-and-the-grenadines",
		"code": "VC",
		"Lat": "12.98",
		"Lon": "-61.29"
	},
	{
		"name": "San Marino",
		"slug": "san-marino",
		"code": "SM",
		"Lat": "43.94",
		"Lon": "12.46"
	},
	{
		"name": "Sao Tome and Principe",
		"slug": "sao-tome-and-principe",
		"code": "ST",
		"Lat": "0.19",
		"Lon": "6.61"
	},
	{
		"name": "Saudi Arabia",
		"slug": "saudi-arabia",
		"code": "SA",
		"Lat": "23.89",
		"Lon": "45.08"
	},
	{
		"name": "Senegal",
		"slug": "senegal",
		"code": "SN",
		"Lat": "14.5",
		"Lon": "-14.45"
	},
	{
		"name": "Serbia",
		"slug": "serbia",
		"code": "RS",
		"Lat": "44.02",
		"Lon": "21.01"
	},
	{
		"name": "Seychelles",
		"slug": "seychelles",
		"code": "SC",
		"Lat": "-4.68",
		"Lon": "55.49"
	},
	{
		"name": "Sierra Leone",
		"slug": "sierra-leone",
		"code": "SL",
		"Lat": "8.46",
		"Lon": "-11.78"
	},
	{
		"name": "Singapore",
		"slug": "singapore",
		"code": "SG",
		"Lat": "1.35",
		"Lon": "103.82"
	},
	{
		"name": "Slovakia",
		"slug": "slovakia",
		"code": "SK",
		"Lat": "48.67",
		"Lon": "19.7"
	},
	{
		"name": "Slovenia",
		"slug": "slovenia",
		"code": "SI",
		"Lat": "46.15",
		"Lon": "15"
	},
	{
		"name": "Solomon Islands",
		"slug": "solomon-islands",
		"code": "SB",
		"Lat": "-9.65",
		"Lon": "160.16"
	},
	{
		"name": "Somalia",
		"slug": "somalia",
		"code": "SO",
		"Lat": "5.15",
		"Lon": "46.2"
	},
	{
		"name": "South Africa",
		"slug": "south-africa",
		"code": "ZA",
		"Lat": "-30.56",
		"Lon": "22.94"
	},
	{
		"name": "South Sudan",
		"slug": "south-sudan",
		"code": "SS",
		"Lat": "7.86",
		"Lon": "29.69"
	},
	{
		"name": "Spain",
		"slug": "spain",
		"code": "ES",
		"Lat": "40.46",
		"Lon": "-3.75"
	},
	{
		"name": "Sri Lanka",
		"slug": "sri-lanka",
		"code": "LK",
		"Lat": "7.87",
		"Lon": "80.77"
	},
	{
		"name": "Sudan",
		"slug": "sudan",
		"code": "SD",
		"Lat": "12.86",
		"Lon": "30.22"
	},
	{
		"name": "Suriname",
		"slug": "suriname",
		"code": "SR",
		"Lat": "3.92",
		"Lon": "-56.03"
	},
	{
		"name": "Swaziland",
		"slug": "swaziland",
		"code": "SZ",
		"Lat": "-26.52",
		"Lon": "31.47"
	},
	{
		"name": "Sweden",
		"slug": "sweden",
		"code": "SE",
		"Lat": "60.13",
		"Lon": "18.64"
	},
	{
		"name": "Switzerland",
		"slug": "switzerland",
		"code": "CH",
		"Lat": "46.82",
		"Lon": "8.23"
	},
	{
		"name": "Syrian Arab Republic (Syria)",
		"slug": "syria",
		"code": "SY",
		"Lat": "34.8",
		"Lon": "39"
	},
	{
		"name": "Taiwan, Republic of China",
		"slug": "taiwan",
		"code": "TW",
		"Lat": "23.7",
		"Lon": "120.96"
	},
	{
		"name": "Tajikistan",
		"slug": "tajikistan",
		"code": "TJ",
		"Lat": "38.86",
		"Lon": "71.28"
	},
	{
		"name": "Tanzania, United Republic of",
		"slug": "tanzania",
		"code": "TZ",
		"Lat": "-6.37",
		"Lon": "34.89"
	},
	{
		"name": "Thailand",
		"slug": "thailand",
		"code": "TH",
		"Lat": "15.87",
		"Lon": "100.99"
	},
	{
		"name": "Timor-Leste",
		"slug": "timor-leste",
		"code": "TL",
		"Lat": "-8.87",
		"Lon": "125.73"
	},
	{
		"name": "Togo",
		"slug": "togo",
		"code": "TG",
		"Lat": "8.62",
		"Lon": "0.82"
	},
	{
		"name": "Trinidad and Tobago",
		"slug": "trinidad-and-tobago",
		"code": "TT",
		"Lat": "10.69",
		"Lon": "-61.22"
	},
	{
		"name": "Tunisia",
		"slug": "tunisia",
		"code": "TN",
		"Lat": "33.89",
		"Lon": "9.54"
	},
	{
		"name": "Turkey",
		"slug": "turkey",
		"code": "TR",
		"Lat": "38.96",
		"Lon": "35.24"
	},
	{
		"name": "Uganda",
		"slug": "uganda",
		"code": "UG",
		"Lat": "1.37",
		"Lon": "32.29"
	},
	{
		"name": "Ukraine",
		"slug": "ukraine",
		"code": "UA",
		"Lat": "48.38",
		"Lon": "31.17"
	},
	{
		"name": "United Arab Emirates",
		"slug": "united-arab-emirates",
		"code": "AE",
		"Lat": "23.42",
		"Lon": "53.85"
	},
	{
		"name": "United Kingdom",
		"slug": "united-kingdom",
		"code": "GB",
		"Lat": "55.38",
		"Lon": "-3.44"
	},
	{
		"name": "Uruguay",
		"slug": "uruguay",
		"code": "UY",
		"Lat": "-32.52",
		"Lon": "-55.77"
	},
	{
		"name": "Uzbekistan",
		"slug": "uzbekistan",
		"code": "UZ",
		"Lat": "41.38",
		"Lon": "64.59"
	},
	{
		"name": "Venezuela (Bolivarian Republic)",
		"slug": "venezuela",
		"code": "VE",
		"Lat": "6.42",
		"Lon": "-66.59"
	},
	{
		"name": "Viet Nam",
		"slug": "vietnam",
		"code": "VN",
		"Lat": "14.06",
		"Lon": "108.28"
	},
	{
		"name": "Western Sahara",
		"slug": "western-sahara",
		"code": "EH",
		"Lat": "24.22",
		"Lon": "-12.89"
	},
	{
		"name": "Yemen",
		"slug": "yemen",
		"code": "YE",
		"Lat": "15.55",
		"Lon": "48.52"
	},
	{
		"name": "Zambia",
		"slug": "zambia",
		"code": "ZM",
		"Lat": "-13.13",
		"Lon": "27.85"
	},
	{
		"name": "Zimbabwe",
		"slug": "zimbabwe",
		"code": "ZW",
		"Lat": "-19.02",
		"Lon": "29.15"
	}
]