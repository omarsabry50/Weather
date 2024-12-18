"use strict"

let key = `fe2e28ca321f4b3e8cf64504243107`;
let searchInput = document.getElementById('search');
let box = document.getElementById('data');


async function getAllData(city)
{
    let data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=3`);
    let result = await data.json();
    display(result);

}
getAllData('cairo');

searchInput.addEventListener('input',function(e){
    getAllData(e.target.value);
})


function display(result)
{

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let todayDate = days[(new Date(result.forecast.forecastday[0].date)).getDay()];
    let tomorrowDate = days[(new Date(result.forecast.forecastday[1].date)).getDay()];
    let afterTomorrowDate = days[(new Date(result.forecast.forecastday[2].date)).getDay()];
    let cartona = ``;

    cartona += ` <div class="box today">
                    <div class="head d-flex justify-content-between align-items-center s">
                        <p class="m-0 ms-2">${todayDate}</p>
                        <p class="m-0 me-2">31July</p>
                    </div>

                    <div class="content text-start ms-3 mt-4">
                        <h4 class="text-secondary h5">${result.location.name}</h4>
                        <div class="temp">
                            <h1 class="text-white fw-bold">${result.current.temp_c} c</h1>
                            <img src="${result.current.condition.icon}" alt="">
                        </div>
                        <div class="status">
                            <h5 class="h6 text-primary mb-3">${result.current.condition.text}</h5>
                            <div class="status-stats d-flex">
                                <p class="me-3 text-secondary">${result.current.humidity} %</p>
                                <p class="me-3 text-secondary">${result.current.wind_kph} km/h</p>
                                <p class="text-secondary">${result.current.wind_dir}</p>

                            </div>
                        </div>
                    </div>

                </div>
                <div class="box tomorrow">
                    <div class="head shadow">
                        <p>${tomorrowDate}</p>

                    </div>
                    <div class="content">
                        <img class="mt-4" src="${result.forecast.forecastday[1].day.condition.icon}" alt="">
                        <div class="temp pt-3 pb-5">
                            <h3 class="text-white">${result.forecast.forecastday[1].day.maxtemp_c}</h3>
                            <span class="text-secondary">${result.forecast.forecastday[1].day.mintemp_c}</span>
                            <h5 class="h6 text-primary mt-4">${result.forecast.forecastday[1].day.condition.text}</h5>
                        </div>
                    </div>

                </div>
                <div class="box after-tomorrow">
                    <div class="head shadow">
                        <p>${afterTomorrowDate}</p>

                    </div>
                    <div class="content">
                        <img class="mt-4" src="${result.forecast.forecastday[2].day.condition.icon}" alt="">
                        <div class="temp pt-3 pb-5">
                            <h3 class="text-white">${result.forecast.forecastday[2].day.maxtemp_c}</h3>
                            <span class="text-secondary">${result.forecast.forecastday[2].day.mintemp_c}</span>
                            <h5 class="h6 text-primary mt-4">${result.forecast.forecastday[2].day.condition.text}</h5>
                        </div>
                    </div>

                </div>`

                box.innerHTML = cartona;

                

}
