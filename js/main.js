var customLoc = document.getElementById("searchArea");
var citis = ["cairo", "london", "abu dhabi"];
var date = new Date();
const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
// var httpReq = new XMLHttpRequest();
// httpReq.open(
//   "get",
//   `https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${a}&days=3`,
//   "true"
// );
// var data = [];
// httpReq.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status === 200) {
//     data = JSON.parse(this.responseText);
//     console.log();
//     displayCurrentData(data.current, data.location);
//     displayForstdata(data.forecast.forecastday);
//   }
// };

// httpReq.send();

function displayCurrentData(current, location) {
  if (current != null) {
    document.getElementById(
      "disPlayData"
    ).innerHTML = `<div class="col-md-4 m-0 p-0 pb-5 ">
                <div class="today ">
                  <di class="title d-flex px-2 justify-content-between py-1  text-white-50">
                    <div >${weekday[date.getDay()]}</div>
                    <div >${date.getMonth()} ${
      monthNames[date.getMonth()]
    } </div>
                  </di>
                  <div class="pt-3 my-3">
                    <div class="ps-3 pt-2 ">${location.name}</div>
                    <div class="ps-3 py-2 text-white temp">${
                      current.temp_c
                    }<sup>o</sup>C  <img src="https://${
      current.condition.icon
    }" alt="" class="py-3" ></div>
                     
                    <span class="stuts ps-3">${current.condition.text}</span>
                    <br> <br>
                      <div class="d-flex  w-75 m-auto justify-content-around ">
                      <span class=" " ><img src="image/icon-umberella@2x.png" alt="umberella" width="21px" height="21">${
                        current.precip_mm
                      }%</span>
                      <span class=""><img src="image/icon-wind@2x.png" alt="wind" width="21px" height="21">${
                        current.wind_kph
                      }km/h</span>
                      <span  class=""><img src="image/icon-compass@2x.png" alt="compass" width="21px" height="21">${
                        current.wind_dir
                      }</span></div>
                    </div>
                  </div>
                </div>`;
  }
}
function displayForstdata(forecast) {
  var nextDay = ``;
  var e = 0;
  for (let i = 1; i < forecast.length; i++) {
    e++;
    nextDay += ` <div class="col-md-4 m-0 tomorrow   p-0 ">
                <div class=" text-center">
                  <div class="title text-center py-1 p-0  text-white-50">
                    <div>${weekday[date.getDay() + e]}</div>
                  </div>
                  <div class="pt-3 my-3">
                   <div><img src="https://${
                     forecast[i].day.condition.icon
                   }" alt="" class="py-3 px-0" ></div> 
                   <div class="hitemp pt-2  ">${
                     forecast[i].day.maxtemp_c
                   }<sup>o</sup>c</div>
                    <div class="lowerTemp py-2">${
                      forecast[i].day.mintemp_c
                    }</div>
                    <span class="stuts"> ${
                      forecast[i].day.condition.text
                    }</span>
                    
                  </div>
                </div>
              </div>`;
  }
  document.getElementById(`disPlayData`).innerHTML += nextDay;
}
function cstLoc(customloction) {
  for (let i = 0; i < citis.length; i++) {
    if (citis[i].includes(customloction) == true) {
      console.log(citis[i]);
      var city = citis[i];
    }
  }
  var httpReq = new XMLHttpRequest();
  httpReq.open(
    "get",
    `https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${city}&days=3`,
    "true"
  );
  var data = [];
  httpReq.onreadystatechange = function () {
    if (this.readyState == 4 && this.status === 200) {
      data = JSON.parse(this.responseText);
      console.log();
      displayCurrentData(data.current, data.location);
      displayForstdata(data.forecast.forecastday);
    }
  
  };

  httpReq.send();
}
function norecoll(event) {
  event.preventDefault();
}
cstLoc("cairo");

