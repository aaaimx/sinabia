const getTimeRemaining = (endtime) => {
    // Time calculations for days, hours, minutes and seconds
    const total = Date.parse(endtime) - Date.parse(new Date())
    const days = Math.floor(total / (1000 * 60 * 60 * 24))
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((total / 1000 / 60) % 60)
    const seconds = Math.floor((total / 1000) % 60)

    return {
        total,
        hours,
        minutes,
        days,
        seconds,
    }
}

const hoursCount = document.getElementById('hours')
const minutesCount = document.getElementById('minutes')
const daysCount = document.getElementById('days')
const secondsCount = document.getElementById('seconds')
const secondsText = document.getElementById('seconds-text')
const hourText = document.getElementById('hours-text')
const minuteText = document.getElementById('minutes-text')
const daysText = document.getElementById('days-text')

// Date to expires the counter

const countDouwnDate = new Date('Apr 02, 2021 23:59:59 GMT-0500').toUTCString()

const countDown = setInterval(() => {
    const time = getTimeRemaining(countDouwnDate)

    hoursCount.textContent = ('0' + time.hours).slice(-2)
    minutesCount.textContent = ('0' + time.minutes).slice(-2)
    daysCount.textContent = ('0' + time.days).slice(-2)
    secondsCount.textContent = ('0' + time.seconds).slice(-2)

    if (time.total <= 0) {
        daysCount.textContent = ''
        hoursCount.textContent = 'A'
        minutesCount.textContent = 'CODEAR'
        secondsCount.textContent = '!'

        secondsText.textContent = ''
        minuteText.textContent = ''
        hourText.textContent = ''
        daysText.textContent = ''
        clearInterval(countDown)
    } else {
        hourText.textContent = time.hours < 2 ? 'Hora' : 'Horas'
        minuteText.textContent = time.minutes < 2 ? 'Minuto' : 'Minutos'
        daysText.textContent = time.days < 2 ? 'Día' : 'Días'
        secondsText.textContent = time.days < 2 ? 'Segundos' : 'Segundos'
    }
}, 1000)
