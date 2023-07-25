const apiKey = 'c04fa4dc45fbb9ddcd8d1907544636e0';
const searchBtn = document.getElementById('searchBtn');
const citySearch = document.getElementById('city-search');
const contain = document.querySelector('#contain');
// const city = 'ondo';
document.querySelector('.error-msg').style.display = 'none';



// Send GET request to the API
const getCountryWeather = function (city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => {
            if (response.status === 404) {
                document.querySelector('.error-msg').style.display = 'block';
                document.querySelector('.forecast-con').style.display = 'none';
                 throw new Error('City not found');
            } else {
                return response.json();
            }
        }  )
        .then((data) => {
            
            // Process the weather data as per your requirements
            console.log(data)
            // console.log(data.name);
            // console.log(data.main.temp);
            // console.log(data.main);
            // console.log(data.weather[0].main);
            // console.log(data.main.humidity)
            // console.log(data.wind.speed);
        
            document.querySelector('.error-msg').style.display = 'none';
           
            let imageIcon = document.querySelector('.main-forecast');
            const container = document.querySelector('.container');
            const weatherName = document.querySelector('.weather-name');
            weatherName.textContent = `${data.weather[0].main}`;
            if (data.weather[0].main === "Rain") {
                imageIcon.src = "images/rainnew.png";
            } if (data.weather[0].main === "Sunny") {
                imageIcon.src = "images/sunnynew.png";
            } if (data.weather[0].main === "Clouds") {
                imageIcon.src = "images/partlysunny.png";
            };
            if (data.weather[0].main === "Snow") {
                imageIcon.src = "images/images/snownew.png";
            };
            if (data.weather[0].main === "Clear") {
                imageIcon.src = "images/clear.png";
            }
            // if (data.weather[0].main === "Clouds") {
            //     container.style.backgroundColor = '#f88508';
            // }if (data.weather[0].main === "Snow") {
            //     container.style.backgroundColor = '#f88508';
            // }
            document.querySelector('#city-name').innerHTML = data.name;
            document.querySelector('#humidValue').innerHTML = data.main.humidity + '%';
            document.querySelector('#windValue').innerHTML = data.wind.speed;
            document.querySelector('#degree').innerHTML = Math.floor(data.main.temp) + "℃";

        })
};
searchBtn.addEventListener('click', function () {
    
    getCountryWeather(citySearch.value);
    document.querySelector('.forecast-con').style.display = 'block';
        })
 
citySearch.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        getCountryWeather(citySearch.value);
        document.querySelector('.forecast-con').style.display = 'block';
    }
})




// const contain = document.querySelector('#contain');
// const btn = document.querySelector('.btn-country');

// const renderCountry = function (data, type = 'main') {
//     const html = ` 
//     <div class="img-container">
//         <img src="${data.flags.png}" alt="image-flag" class="image">
        
//     </div>

//     <div class="card-details">
//         <div class="image-name">${data.name.common}</div>
//         <div class="country-otherdetails">
//         <p>Continent : <span class="api-inputs">${data.continents}</span></p>
//         <p>Capital : <span class="api-inputs"></span>${data.capital}</p>
//         <p>Language : <span class="api-inputs">${data.languages.por}</span></p>
//         <p>Currency : <span class="api-inputs">${data.currencies.EUR.name}</span></p>
//         <p>Borders shared with : <span class="api-inputs">${data.borders}</span></p>
//         </div>
//     </div>
// `;
//     contain.insertAdjacentHTML('beforeend', html);
// }

// const renderError = function (msg) {
//     contain.insertAdjacentText('beforeend', msg);
//     contain.getElementsByClassName.opacity = 1;
// }

// const getCountryData = function (country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
//         .then(function (response) {
//             console.log(response);
//             return response.json();
//         }).then(function (data) {
//             console.log(data);
//             renderCountry(data[0]);
//             const neighbour = data[0].borders[0]
        
//             if (!neighbour) return;
//             //country 2
//             return fetch(`https://restcountries.com/v3.1/name/${neighbour}?fullText=true`);
//         }).then(response => response.json()).then(data => renderCountry(data[0], 'neighbour'))
//         .catch(err => {
//             console.log(`${err}`)
//             renderError(`something went wrong ${err, message}. try again`)
        
//         });
// };


// btn.addEventListener('click', function () {
//     getCountryData('portugal');
// }