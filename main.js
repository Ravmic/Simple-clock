//regular clock

const clock = () => {
    //hours
    const hours = new Date().getHours()
    const acutalHours = (hours / 12) * 360
    
    document.querySelector("div.hours").style.transform = `translateX(-50%) rotate(${acutalHours}deg)`
   //minutes
   const minutes = new Date().getMinutes()
   const acutalMinutes = (minutes / 60) * 360
   document.querySelector("div.minutes").style.transform = `translateX(-50%) rotate(${acutalMinutes}deg)`


    //seconds
    const seconds = new Date().getSeconds()
    const acutalSeconds = (seconds / 60)  * 360 
    document.querySelector("div.seconds").style.transform = `translateX(-50%) rotate(${acutalSeconds}deg)`
}


//digital clock
const digitalClock = () => {
    const Hours = new Date().getHours()
    const Minutes =  new Date().getMinutes()
    const Seconds = new Date().getSeconds()
    const time = `${Hours < 10? '0' + Hours : Hours} : ${Minutes < 10? '0'+ Minutes : Minutes} : ${Seconds < 10? '0'+Seconds : Seconds}`
    
    document.querySelector('div.digitalClock span').textContent = time
    }
    
setInterval(clock, 1000)    
setInterval(digitalClock, 1000)

   
