// const timer = document.getElementById('timer')

// const contToDate = new Date("Jan 15 ,2021 23:59:59").getTime();

// const myTimer = setInterval(() => {
//     const actual = new Date().getTime()
//     const diff = contToDate - actual;
//     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//     const hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
//     const minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
//     const seconds = Math.floor(diff % (1000 * 60) / (1000));
//     // timer.innerHTML = ` ${days} Dni ${hours} Godzin ${minutes} Minut ${seconds} Sekund`
//     if (diff < 0) {
//         clearInterval(myTimer)
//         timer.innerHTML = "Kurs ruszyl w styczniu   "
//     }
// }, 1000)


const days = document.querySelector("#days")
const hours = document.querySelector("#hours")
const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")

const day_t = document.querySelectorAll('.day-t');
const hour_t = document.querySelectorAll('.hour-t');
const min_t = document.querySelectorAll('.min-t');
const sec_t = document.querySelectorAll('.sec-t');

let dayAngle = 0
let hourAngle = 0
let minAngle = 0
let secAngle = 0
let now = new Date().getSeconds()
const contDate = new Date('May 1, 2021 00:00:00').getTime();
const actual = new Date().getTime();
diff = contDate - actual;
let daysDate = Math.floor(diff / (1000 * 60 * 60 * 24));
let hoursDate = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
let minutesDate = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
let secondsDate = Math.floor(diff % (1000 * 60) / (1000));

day_t.forEach(dayText => {
    dayText.textContent = daysDate;
})
hour_t.forEach(hourText => {
    hourText.textContent = hoursDate;
})
min_t.forEach(minText => {
    minText.textContent = minutesDate;
})
sec_t.forEach(secText => {
    secText.textContent = secondsDate;
})

start = setInterval(() => {
    now = new Date().getSeconds()
    console.log(now);
    if (now === 0) {
        clearInterval(start)
        let daysTime = setInterval(() => {
            const contDate = new Date('May 15, 2021 00:00:00').getTime();
            const actual = new Date().getTime();
            diff = contDate - actual;
            let daysDate = Math.floor(diff / (1000 * 60 * 60 * 24));
            days.style.transform = `rotateX(${dayAngle+=360}deg)`
            setTimeout(() => {
                day_t.forEach(dayText => {
                    dayText.textContent = secondsDate;
                })
            }, 1000);

        }, 1000 * 60 * 60 * 24)

        let hoursTime = setInterval(() => {
            const contDate = new Date('May 15, 2021 00:00:00').getTime();
            const actual = new Date().getTime();
            diff = contDate - actual;
            let hoursDate = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            hours.style.transform = `rotateX(${hourAngle+=360}deg)`
            setTimeout(() => {
                hour_t.forEach(hourText => {
                    hourText.textContent = secondsDate;
                })
            }, 1000);

        }, 1000 * 60 * 60)

        let minutesTime = setInterval(() => {
            const contDate = new Date('May 15, 2021 00:00:00').getTime();
            const actual = new Date().getTime();
            let diff = contDate - actual;
            let minutesDate = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
            minutes.style.transform = `rotateX(${minAngle+=360}deg)`
            setTimeout(() => {
                min_t.forEach(minText => {
                    minText.textContent = secondsDate;
                })
            }, 1000);

        }, 1000 * 60)

        let secondsTime = setInterval(() => {
            const contDate = new Date('May 15, 2021 00:00:00').getTime();
            const actual = new Date().getTime();
            let diff = contDate - actual;
            let secondsDate = Math.floor(diff % (1000 * 60) / (1000));
            diff = contDate - actual;

            seconds.style.transform = `rotateX(${secAngle+=360}deg)`
            setTimeout(() => {
                sec_t.forEach(secText => {
                    secText.textContent = secondsDate;
                })
            }, 1000);

        }, 1000)
    }
}, 1000)