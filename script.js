
let hourHand = document.querySelector('.hour')
let minuteHand = document.querySelector('.minute')
let secondHand = document.querySelector('.second')


let setClock = ()=> {
    let date = new Date()
    let dateInSeconds = date.getSeconds() / 60
    let dateInMinutes = (dateInSeconds + date.getMinutes()) / 60
    let dateInHours = (dateInMinutes + date.getHours()) / 12
    
    setRotation(secondHand, dateInSeconds)
    setRotation(minuteHand, dateInMinutes)
    setRotation(hourHand, dateInHours)
}

let setRotation = (element, rotation) => {
    element.style.setProperty('--rotate', rotation * 360);
}

setInterval(setClock, 1000)