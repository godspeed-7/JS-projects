var temp;
window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureSection = document.querySelector(".temperature");
    let temperatureSpan = document.querySelector(".temperature span");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/d0ee10f19471fec5f01bfabbe6635442/${lat},${long}`;
            fetch(api).then(res =>res.json()).then(data =>console.log({data}));
            fetch(api).then(result => result.json().then(data => {
                console.log({data});
                const { temperature, summary, icon } = data.currently;
                temp = temperature;
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = summary;
                locationTimezone.textContent = data.timezone;
                let celsius = (temperature - 32) * (5 / 9);
                setIcons(icon, document.querySelector(".icon"));

                temperatureSection.addEventListener('click', () => {
                    if (temperatureSpan.textContent === 'F') {
                        temperatureSpan.textContent = 'C';
                        temperatureDegree.textContent = Math.floor(celsius);
                    } else {
                        temperatureSpan.textContent = 'F';
                        temperatureDegree.textContent = temperature;
                    }
                })
            })).catch((e) => {
                console.log('error',e);
            })
        })
    } else {

    }
    function setIcons(icon, iconId) {
        const skycons = new Skycons({ color: 'white' });
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconId, Skycons[currentIcon]);
    }
});

function onTemperatureChange(event) {
    let temperatureSpan = document.querySelector(".temperature span");
    let temperatureDegree = document.querySelector('.temperature-degree');
    console.log(event.target.value);
    if (event.target.value === 'F') {
        let celsius = (temp - 32) * (5 / 9);
        temperatureSpan.textContent = 'C';
        temperatureDegree.textContent = Math.floor(celsius);
    } else {
        temperatureSpan.textContent = 'F';
        temperatureDegree.textContent = temp;
    }
}