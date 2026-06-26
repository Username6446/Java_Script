const API_KEY = '82c11ce4d0230465d93ebca3ac7c476f';

const searchForm = document.getElementById('searchForm');
const cityInput = document.getElementById('cityInput');

const tabToday = document.getElementById('tab-today');
const tabForecast = document.getElementById('tab-forecast');

const viewToday = document.getElementById('view-today');
const viewForecast = document.getElementById('view-forecast');
const viewError = document.getElementById('view-error');
const mainContent = document.getElementById('main-content');
const errorCityName = document.getElementById('error-city-name');


function formatDate(inputdate) {
    const date = new Date(inputdate * 1000);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
}

function formatTimeAMPM(time) {
    const date = new Date(time * 1000);
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
}

function formatHourOnly(time) {
    const date = new Date(time * 1000);
    const hours24 = date.getHours();
    let hours12;
    let ampm;

    if (hours24 >= 12) {
        ampm = 'pm';
    } else {
        ampm = 'am';
    }

    if (hours24 === 0) {
        hours12 = 12;
    } else if (hours24 > 12) {
        hours12 = hours24 - 12;
    } else {
        hours12 = hours24;
    }
    return `${hours12}${ampm}`;
}

function getDaylightDuration(sunrise, sunset) {
    const diffSeconds = sunset - sunrise;
    const hours = Math.floor(diffSeconds / 3600);
    const minutes = Math.floor((diffSeconds % 3600) / 60);
    return `${hours}:${String(minutes).padStart(2, '0')} hr`;
}

function getWindDirection(degree) {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    const index = Math.round(degree / 22.5) % 16;
    return directions[index];
}

function getDayName(time) {
    const date = new Date(time * 1000);
    return date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
}

function getShortDate(time) {
    const date = new Date(time * 1000);
    const month = date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
    const day = String(date.getDate()).padStart(2, '0');
    return `${month} ${day}`;
}

tabToday.addEventListener('click', (e) => {
    e.preventDefault();
    tabToday.classList.add('active', 'border-bottom', 'border-3', 'border-info', 'link-light');
    tabToday.classList.remove('link-secondary');
    tabForecast.classList.remove('active', 'border-bottom', 'border-3', 'border-info', 'link-light');
    tabForecast.classList.add('link-secondary');

    viewToday.classList.remove('d-none');
    viewForecast.classList.add('d-none');
});

tabForecast.addEventListener('click', (e) => {
    e.preventDefault();
    tabForecast.classList.add('active', 'border-bottom', 'border-3', 'border-info', 'link-light');
    tabForecast.classList.remove('link-secondary');
    tabToday.classList.remove('active', 'border-bottom', 'border-3', 'border-info', 'link-light');
    tabToday.classList.add('link-secondary');

    viewForecast.classList.remove('d-none');
    viewToday.classList.add('d-none');
});


async function fetchAndDisplayWeather(lat, lon) {
    // Поточна погода
    const urlCurrent = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=en&appid=${API_KEY}`;
    // запит onecall на погодинний прогноз для сьогодні (інтервал 1 година)
    const urlTodayHourly = `https://api.openweathermap.org/data/4.0/onecall/timeline/1h?lat=${lat}&lon=${lon}&units=metric&lang=en&appid=${API_KEY}`;
    // Запит forecast на 5 днів (інтервал 3 години)
    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=en&appid=${API_KEY}`;

    try {
        const [responseCurrent, responseTodayHourly, responseForecast] = await Promise.all([
            fetch(urlCurrent),
            fetch(urlTodayHourly),
            fetch(urlForecast)
        ]);

        if (!responseCurrent.ok || !responseTodayHourly.ok || !responseForecast.ok) {
            throw new Error("Помилка отримання даних від сервера.");
        }

        const currentData = await responseCurrent.json();
        const todayHourlyData = await responseTodayHourly.json();
        const forecastData = await responseForecast.json();


        renderCurrentWeather(currentData);

        renderTodayHourlyTable(todayHourlyData.data.slice(0, 6)); 

        render5DayCards(forecastData);

    } catch (error) {
        console.error("Помилка:", error);
        showError();
    }
}


function renderCurrentWeather(data) {
    document.getElementById('current-date').innerText = formatDate(data.dt);
    const iconCode = data.weather[0].icon;
    document.getElementById('current-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="weather icon" width="80">`;
    document.getElementById('current-desc').innerText = data.weather[0].main;
    document.getElementById('current-temp').innerText = `${Math.round(data.main.temp)}°C`;
    document.getElementById('current-feels').innerText = `Real Feel ${Math.round(data.main.feels_like)}°`;
    
    document.getElementById('current-sunrise').innerText = formatTimeAMPM(data.sys.sunrise);
    document.getElementById('current-sunset').innerText = formatTimeAMPM(data.sys.sunset);
    document.getElementById('current-duration').innerText = getDaylightDuration(data.sys.sunrise, data.sys.sunset);
}

function renderTodayHourlyTable(next6Hours) {
    const rowTimeElem = document.getElementById('today-row-time');
    const rowIconElem = document.getElementById('today-row-icon');
    const rowDescElem = document.getElementById('today-row-desc');
    const rowTempElem = document.getElementById('today-row-temp');
    const rowFeelsElem = document.getElementById('today-row-feels');
    const rowWindElem = document.getElementById('today-row-wind');

    rowTimeElem.innerHTML = `<td class="text-start text-uppercase text-dark">Today</td>`;
    rowIconElem.innerHTML = `<td></td>`;
    rowDescElem.innerHTML = `<td class="text-start text-muted">Forecast</td>`;
    rowTempElem.innerHTML = `<td class="text-start text-muted small">Temp (°C)</td>`;
    rowFeelsElem.innerHTML = `<td class="text-start text-muted">RealFeel</td>`;
    rowWindElem.innerHTML = `<td class="text-start text-muted">Wind (km/h)</td>`;

    next6Hours.forEach(hour => {
        rowTimeElem.innerHTML += `<td class="text-secondary fw-normal">${formatHourOnly(hour.dt)}</td>`;
        rowIconElem.innerHTML += `<td><img src="https://openweathermap.org/img/wn/${hour.weather[0].icon}.png" width="40" alt="icon"></td>`;
        rowDescElem.innerHTML += `<td class="text-dark">${hour.weather[0].main}</td>`;
        rowTempElem.innerHTML += `<td class="text-dark fw-bold">${Math.round(hour.temp)}°</td>`;
        rowFeelsElem.innerHTML += `<td class="text-dark">${Math.round(hour.feels_like)}°</td>`;
        
        const windKmH = Math.round(hour.wind_speed * 3.6);
        const windDir = getWindDirection(hour.wind_deg);
        rowWindElem.innerHTML += `<td class="text-dark">${windKmH} ${windDir}</td>`;
    });
}

function renderForecastHourlyTable(listItems, dayName) {
    const rowTimeElem = document.getElementById('forecast-row-time');
    const rowIconElem = document.getElementById('forecast-row-icon');
    const rowDescElem = document.getElementById('forecast-row-desc');
    const rowTempElem = document.getElementById('forecast-row-temp');
    const rowFeelsElem = document.getElementById('forecast-row-feels');
    const rowWindElem = document.getElementById('forecast-row-wind');

    rowTimeElem.innerHTML = `<td id="hourly-day-name" class="text-start text-uppercase text-dark">${dayName}</td>`;
    rowIconElem.innerHTML = `<td></td>`;
    rowDescElem.innerHTML = `<td class="text-start text-muted">Forecast</td>`;
    rowTempElem.innerHTML = `<td class="text-start text-muted small">Temp (°C)</td>`;
    rowFeelsElem.innerHTML = `<td class="text-start text-muted">RealFeel</td>`;
    rowWindElem.innerHTML = `<td class="text-start text-muted">Wind (km/h)</td>`;

    listItems.forEach(item => {
        rowTimeElem.innerHTML += `<td class="text-secondary fw-normal">${formatHourOnly(item.dt)}</td>`;
        rowIconElem.innerHTML += `<td><img src="https://openweathermap.org/img/wn/${item.weather[0].icon}.png" width="40" alt="icon"></td>`;
        rowDescElem.innerHTML += `<td class="text-dark">${item.weather[0].main}</td>`;
        rowTempElem.innerHTML += `<td class="text-dark fw-bold">${Math.round(item.main.temp)}°</td>`;
        rowFeelsElem.innerHTML += `<td class="text-dark">${Math.round(item.main.feels_like)}°</td>`;
        
        const windKmH = Math.round(item.wind.speed * 3.6);
        const windDir = getWindDirection(item.wind.deg);
        rowWindElem.innerHTML += `<td class="text-dark">${windKmH} ${windDir}</td>`;
    });
}


function render5DayCards(forecastData) {
    const groupedData = {};
    forecastData.list.forEach(item => {
        const dateStr = item.dt_txt.split(' ')[0];
        if (!groupedData[dateStr]) groupedData[dateStr] = [];
        groupedData[dateStr].push(item);
    });

    const daysKeys = Object.keys(groupedData).slice(0, 5); 

    daysKeys.forEach((dateKey, index) => {
        const dayItems = groupedData[dateKey];
        const middleOfDayItem = dayItems[Math.floor(dayItems.length / 2)]; 

        const colElem = document.getElementById(`day${index}-col`);
        
        document.getElementById(`day${index}-name`).innerText = index === 0 ? "TONIGHT" : getDayName(middleOfDayItem.dt);
        document.getElementById(`day${index}-date`).innerText = getShortDate(middleOfDayItem.dt);
        document.getElementById(`day${index}-icon`).innerHTML = `<img src="https://openweathermap.org/img/wn/${middleOfDayItem.weather[0].icon}@2x.png" width="60" alt="icon">`;
        document.getElementById(`day${index}-temp`).innerText = `${Math.round(middleOfDayItem.main.temp)}°C`;
        document.getElementById(`day${index}-desc`).innerText = middleOfDayItem.weather[0].main;

        colElem.classList.remove('bg-white', 'shadow-sm');

        colElem.onclick = () => {
            for(let i=0; i<5; i++) {
                document.getElementById(`day${i}-col`).classList.remove('bg-white', 'shadow-sm');
            }
            colElem.classList.add('bg-white', 'shadow-sm');

            const fullDayName = new Date(middleOfDayItem.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
            renderForecastHourlyTable(dayItems.slice(0, 6), fullDayName);
        };
    });

    document.getElementById('day0-col').click();
}


async function getCoordinatesByCity(cityName) {
    const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;
    const response = await fetch(geoUrl);
    const data = await response.json();

    if (data.length === 0) {
        throw new Error("Місто не знайдено!");
    }

    return { lat: data[0].lat, lon: data[0].lon, name: data[0].name };
}

function showError(cityName = cityInput.value) {
    mainContent.classList.add('d-none');
    viewError.classList.remove('d-none');
    errorCityName.innerText = cityName;
}

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const cityName = cityInput.value.trim();
    
    if (cityName === "") return;

    try {
        const locationData = await getCoordinatesByCity(cityName);
        cityInput.value = locationData.name; 
        
        await fetchAndDisplayWeather(locationData.lat, locationData.lon);

        viewError.classList.add('d-none');
        mainContent.classList.remove('d-none');
    } catch (error) {
        showError(cityName);
    }
});

// Вхідне місто Львів
fetchAndDisplayWeather('49.8397', '24.0297');