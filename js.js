console.log('yoy')

const display = document.getElementById('display');
const weekDay = document.getElementById('weekDay');
const btn = document.getElementById('btn');


const getData = async () => {
    try {
        const res = await fetch('data.json')
        const data = await res.json();
        console.log(data);
        display.innerHTML = '';

        // display.innerHTML = data.forecastCreationTimeUtc.split(' ')[0]

        const table = data.forecastTimestamps.map(info => {
            const fdate = new Date(info.forecastTimeUtc);
            // console.log(fdate)
            const h = info.forecastTimeUtc.split(' ')[1].split(':')[0];
            const m = info.forecastTimeUtc.split(' ')[1].split(':')[1];

            if(info.forecastTimeUtc.split(' ')[0] == weekDay.value)
            return ` <div class="col-2">
                        <div class="card " style="width: 8rem;">
                        <div class="card-body">
                    <h5 class="card-title">${h}:${m}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${info.airTemperature} °C</h6>
                    <h6 class="card-subtitle mb-2 text-muted">${info.conditionCode}</h6>
                    <h6 class="card-subtitle mb-2 text-muted">${info.windSpeed} m/s</h6>
                </div>
                </div>
                </div>`
        })
        display.innerHTML = table;


    } catch (error) {
        console.log(error)
    }
    
}
 btn.addEventListener('click', getData)